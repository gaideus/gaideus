// GAIDEUS Learn API (Cloudflare Pages Function, served under /api/*).
// Needs: a D1 database bound as DB, and secrets ADMIN_EMAIL + ADMIN_PASSWORD.

import study from "../_content/study.js";

// Learning paths. Learners pick their own path on the course menu; age only decides which card is
// marked "Recommended for you". To add a path: add its id here, add its content to CONTENT below
// (unless its lessons are written inside learn/index.html), and add one entry to PATHS in learn/index.html.
const TRACKS = ["kids", "study"];
const CONTENT = { study };
const COURSE_NAMES = { kids: "Aqeedah Journey", study: "Aqeedah Studies" };
const trackFor = (age) => (Number(age) > 15 ? "study" : "kids");
// Progress for each page is kept side by side in one row: { kids: {...}, study: {...} }.
// Rows saved before this existed hold a single profile, which belongs to the original page.
const parseTracks = (text) => { try { const d = JSON.parse(text); return d && d.lessons ? { kids: d } : (d || {}); } catch { return {}; } };

const SESSION_DAYS = 30;
const PBKDF2_ITERATIONS = 100000;           // Cloudflare Workers allows at most 100,000
const MAX_BODY = 60 * 1024;
const enc = new TextEncoder();

const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers },
  });
const fail = (status, error) => json({ error }, status);

/* ---------- crypto helpers ---------- */
const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const hex = (buf) => [...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, "0")).join("");

async function pbkdf2(password, salt, iterations) {
  const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  return crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt, iterations }, key, 256);
}
async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  return `pbkdf2$${PBKDF2_ITERATIONS}$${b64(salt)}$${b64(await pbkdf2(password, salt, PBKDF2_ITERATIONS))}`;
}
function safeEqual(a, b) {
  const x = enc.encode(a), y = enc.encode(b);
  let d = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) d |= (x[i] || 0) ^ (y[i] || 0);
  return d === 0;
}
async function checkPassword(password, stored) {
  const [scheme, iter, salt, hash] = String(stored).split("$");
  if (scheme !== "pbkdf2") return false;
  return safeEqual(b64(await pbkdf2(password, unb64(salt), +iter)), hash);
}
const sha256hex = async (s) => hex(await crypto.subtle.digest("SHA-256", enc.encode(s)));

/* ---------- sessions ---------- */
const now = () => Math.floor(Date.now() / 1000);
function readCookie(request, name) {
  const m = (request.headers.get("cookie") || "").match(new RegExp("(?:^|;\\s*)" + name + "=([^;]+)"));
  return m ? m[1] : null;
}
// Learners and the admin use different cookies, so being signed in to one never signs you out of the other.
const cookieName = (role) => (role === "admin" ? "ga" : "gs");
const cookie = (role, value, maxAge) =>
  `${cookieName(role)}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;

async function startSession(env, userId, role) {
  const raw = hex(crypto.getRandomValues(new Uint8Array(32)));
  const exp = now() + SESSION_DAYS * 86400;
  await env.DB.prepare("INSERT INTO sessions (token_hash, user_id, role, expires_at) VALUES (?, ?, ?, ?)")
    .bind(await sha256hex(raw), userId, role, exp).run();
  return cookie(role, raw, SESSION_DAYS * 86400);
}
async function getSession(env, request, role) {
  const raw = readCookie(request, cookieName(role));
  if (!raw || !/^[0-9a-f]{64}$/.test(raw)) return null;
  return env.DB.prepare("SELECT user_id, role FROM sessions WHERE token_hash = ? AND role = ? AND expires_at > ?")
    .bind(await sha256hex(raw), role, now()).first();
}

/* ---------- rate limiting ---------- */
async function tooMany(env, key, limit, windowSec) {
  const r = await env.DB.prepare("SELECT COUNT(*) AS n FROM attempts WHERE k = ? AND ts > ?")
    .bind(key, now() - windowSec).first();
  return (r?.n || 0) >= limit;
}
const noteAttempt = (env, key) => env.DB.prepare("INSERT INTO attempts (k, ts) VALUES (?, ?)").bind(key, now()).run();

/* ---------- validation ---------- */
const clean = (s, max) => String(s ?? "").replace(/\s+/g, " ").trim().slice(0, max);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clampInt = (v, lo, hi) => Math.max(lo, Math.min(hi, Math.round(Number(v) || 0)));

async function body(request) {
  const text = await request.text();
  if (text.length > MAX_BODY) throw new Response(null, { status: 413 });
  try { return JSON.parse(text || "{}"); } catch { throw fail(400, "Bad request."); }
}

/* ---------- handlers ---------- */
async function register(env, request) {
  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  if (await tooMany(env, "reg:" + ip, 10, 3600)) return fail(429, "Too many sign-ups from this network. Please try again later.");
  const b = await body(request);
  const name = clean(b.name, 30), email = clean(b.email, 254).toLowerCase(), age = Math.round(Number(b.age));
  const password = String(b.password ?? "");
  if (!name) return fail(400, "Please type your name.");
  if (!Number.isFinite(age) || age < 3 || age > 120) return fail(400, "Please type your age (a number from 3 to 120).");
  if (!EMAIL.test(email)) return fail(400, "That email doesn't look right.");
  if (password.length < 8) return fail(400, "Your password needs at least 8 characters.");
  if (password.length > 200) return fail(400, "That password is too long.");
  if (b.agreed !== true) return fail(400, "Please tick the box: you are 13 or older, or a parent or guardian says it's OK.");
  const taken = await env.DB.prepare("SELECT id FROM users WHERE email = ?").bind(email).first();
  if (taken) return fail(409, "There is already an account with that email. Try logging in.");
  await noteAttempt(env, "reg:" + ip);
  const res = await env.DB.prepare("INSERT INTO users (name, age, email, pass_hash, created_at, last_login, consent_at) VALUES (?, ?, ?, ?, ?, ?, ?)")
    .bind(name, age, email, await hashPassword(password), now(), now(), now()).run();
  const id = res.meta.last_row_id;
  const setCookie = await startSession(env, id, "user");
  return json({ user: { id, name, age, email, role: "user" } }, 201, { "set-cookie": setCookie });
}

async function login(env, request) {
  const b = await body(request);
  const email = clean(b.email, 254).toLowerCase(), password = String(b.password ?? "").slice(0, 200);
  const key = "login:" + email;
  if (await tooMany(env, key, 8, 900)) return fail(429, "Too many tries. Please wait 15 minutes and try again.");
  const bad = async () => { await noteAttempt(env, key); return fail(401, "Wrong email or password."); };

  // The admin signs in with the secrets set in Cloudflare, not with a database row.
  if (env.ADMIN_EMAIL && env.ADMIN_PASSWORD && email === String(env.ADMIN_EMAIL).trim().toLowerCase()) {
    if (!safeEqual(password, String(env.ADMIN_PASSWORD))) return bad();
    const setCookie = await startSession(env, null, "admin");
    return json({ user: { name: "Admin", email, role: "admin" } }, 200, { "set-cookie": setCookie });
  }
  const u = await env.DB.prepare("SELECT * FROM users WHERE email = ?").bind(email).first();
  if (!u) { await pbkdf2(password, new Uint8Array(16), PBKDF2_ITERATIONS); return bad(); }  // same timing either way
  if (!(await checkPassword(password, u.pass_hash))) return bad();
  await env.DB.prepare("UPDATE users SET last_login = ? WHERE id = ?").bind(now(), u.id).run();
  const setCookie = await startSession(env, u.id, "user");
  return json({ user: { id: u.id, name: u.name, age: u.age, email: u.email, role: "user" } }, 200, { "set-cookie": setCookie });
}

async function logout(env, request, role) {
  const raw = readCookie(request, cookieName(role));
  if (raw && /^[0-9a-f]{64}$/.test(raw)) await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(await sha256hex(raw)).run();
  return json({ ok: true }, 200, { "set-cookie": cookie(role, "", 0) });
}

async function me(env, session) {
  if (!session) return json({ user: null });
  if (session.role === "admin") return json({ user: { name: "Admin", role: "admin" } });
  const u = await env.DB.prepare("SELECT id, name, age, email FROM users WHERE id = ?").bind(session.user_id).first();
  if (!u) return json({ user: null });
  const p = await env.DB.prepare("SELECT data FROM progress WHERE user_id = ?").bind(u.id).first();
  return json({ user: { ...u, role: "user", suggested: trackFor(u.age) }, tracks: p ? parseTracks(p.data) : {} });
}

async function saveProgress(env, session, request) {
  const b = await body(request);
  const p = b.progress, s = b.summary;
  if (!p || typeof p !== "object" || typeof p.lessons !== "object" || typeof p.final !== "object" || !Array.isArray(p.days) || !Array.isArray(p.badges))
    return fail(400, "Bad progress data.");
  if (!s || typeof s !== "object") return fail(400, "Bad summary.");
  const track = b.track === undefined ? "kids" : b.track;
  if (!TRACKS.includes(track)) return fail(400, "Unknown learning path.");
  const summary = JSON.stringify({
    track,
    level: clean(s.level, 30),
    lessons: Array.isArray(s.lessons) ? s.lessons.slice(0, 20).map((l) => ({
      id: clampInt(l.id, 0, 99), title: clean(l.title, 80),
      learned: !!l.learned, game: !!l.game, quick: !!l.quick, memory: !!l.memory,
      best: l.best == null ? null : clampInt(l.best, 0, 99), total: clampInt(l.total, 0, 99),
      stars: clampInt(l.stars, 0, 3), tries: clampInt(l.tries, 0, 9999),
    })) : [],
    final: { best: clampInt(s.final?.best, 0, 99), tries: clampInt(s.final?.tries, 0, 9999) },
    badges: Array.isArray(s.badges) ? s.badges.slice(0, 30).map((x) => clean(x, 40)) : [],
  });
  if (JSON.stringify(p).length > 40000 || summary.length > 8000) return fail(413, "Too much data.");
  const old = await env.DB.prepare("SELECT data FROM progress WHERE user_id = ?").bind(session.user_id).first();
  const data = JSON.stringify({ ...(old ? parseTracks(old.data) : {}), [track]: p });
  await env.DB.prepare(
    `INSERT INTO progress (user_id, data, summary, xp, mastered, stars, pct, streak, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(user_id) DO UPDATE SET data=excluded.data, summary=excluded.summary, xp=excluded.xp,
       mastered=excluded.mastered, stars=excluded.stars, pct=excluded.pct, streak=excluded.streak, updated_at=excluded.updated_at`
  ).bind(session.user_id, data, summary, clampInt(s.xp, 0, 100000), clampInt(s.mastered, 0, 10),
         clampInt(s.stars, 0, 30), clampInt(s.pct, 0, 100), clampInt(s.streak, 0, 4000), now()).run();
  return json({ ok: true });
}

/* ---------- admin ---------- */
async function adminList(env) {
  const { results } = await env.DB.prepare(
    `SELECT u.id, u.name, u.age, u.email, u.created_at, u.last_login,
            COALESCE(p.xp,0) AS xp, COALESCE(p.mastered,0) AS mastered, COALESCE(p.stars,0) AS stars,
            COALESCE(p.pct,0) AS pct, COALESCE(p.streak,0) AS streak, p.updated_at AS last_active
     FROM users u LEFT JOIN progress p ON p.user_id = u.id ORDER BY u.created_at DESC LIMIT 5000`).all();
  return json({ users: results });
}
async function adminUser(env, id) {
  const u = await env.DB.prepare("SELECT id, name, age, email, created_at, last_login FROM users WHERE id = ?").bind(id).first();
  if (!u) return fail(404, "No such user.");
  const p = await env.DB.prepare("SELECT summary, xp, mastered, stars, pct, streak, updated_at FROM progress WHERE user_id = ?").bind(id).first();
  let summary = null;
  try { summary = p ? JSON.parse(p.summary) : null; } catch {}
  return json({ user: u, progress: p ? { ...p, summary } : null });
}
async function adminResetPassword(env, id, request) {
  const b = await body(request), pw = String(b.password ?? "");
  if (pw.length < 8 || pw.length > 200) return fail(400, "The new password needs at least 8 characters.");
  const r = await env.DB.prepare("UPDATE users SET pass_hash = ? WHERE id = ?").bind(await hashPassword(pw), id).run();
  if (!r.meta.changes) return fail(404, "No such user.");
  await env.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(id).run();   // sign them out everywhere
  return json({ ok: true });
}
async function adminDelete(env, id) {
  await env.DB.prepare("DELETE FROM group_members WHERE user_id = ?").bind(id).run();
  await env.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(id).run();
  await env.DB.prepare("DELETE FROM progress WHERE user_id = ?").bind(id).run();
  const r = await env.DB.prepare("DELETE FROM users WHERE id = ?").bind(id).run();
  return r.meta.changes ? json({ ok: true }) : fail(404, "No such user.");
}

/* ---------- learner: my groups ---------- */
// What a learner may see about the groups they are in: each member's first name and course progress.
// Never emails, ages or ids. Progress is worked out here from the saved lesson progress, nothing extra is stored.
const COURSE_LESSONS = { kids: 10, study: study.lessons.length };
const firstName = (n) => clean(n, 30).split(" ")[0].slice(0, 20) || "Learner";
function courseProgress(dataText, course) {
  const p = dataText ? parseTracks(dataText)[course] : null;
  const total = COURSE_LESSONS[course] || 10;
  let steps = 0, done = 0;
  for (let i = 1; i <= total; i++) {
    const s = p && p.lessons && p.lessons[i];
    if (!s) continue;
    const read = !!s.learned, played = !!s.game, quizzed = s.best != null;   // the three steps of a lesson
    steps += read + played + quizzed;
    if (read && played && quizzed) done++;
  }
  return { pct: Math.round((steps / (total * 3)) * 100), done, total };
}
async function myGroups(env, session) {
  const { results: mine } = await env.DB.prepare(
    `SELECT g.id, g.course, g.name FROM group_members m JOIN course_groups g ON g.id = m.group_id
     WHERE m.user_id = ? ORDER BY g.name COLLATE NOCASE`).bind(session.user_id).all();
  const groups = [];
  for (const g of mine) {
    const { results } = await env.DB.prepare(
      `SELECT u.id, u.name, p.data FROM group_members m JOIN users u ON u.id = m.user_id
       LEFT JOIN progress p ON p.user_id = u.id WHERE m.group_id = ?`).bind(g.id).all();
    const members = results
      .map((m) => ({ name: firstName(m.name), me: m.id === session.user_id, ...courseProgress(m.data, g.course) }))
      .sort((x, y) => y.pct - x.pct || y.done - x.done || x.name.localeCompare(y.name));
    groups.push({ name: g.name, course: g.course, courseName: COURSE_NAMES[g.course] || g.course, members });
  }
  return json({ groups });
}

/* ---------- admin: groups inside a course ---------- */
// The router only calls these after it has checked for an admin session.
const groupName = (v) => clean(v, 40);
const isUnique = (e) => /UNIQUE/i.test(String(e && e.message));

async function groupsList(env) {
  const { results } = await env.DB.prepare(
    `SELECT g.id, g.course, g.name, g.created_at, COUNT(m.user_id) AS members
     FROM course_groups g LEFT JOIN group_members m ON m.group_id = g.id
     GROUP BY g.id ORDER BY g.course, g.name COLLATE NOCASE`).all();
  return json({ courses: TRACKS.map((id) => ({ id, name: COURSE_NAMES[id] || id })), groups: results });
}
async function groupCreate(env, request) {
  const b = await body(request), name = groupName(b.name);
  if (!TRACKS.includes(b.course)) return fail(400, "Unknown course.");
  if (!name) return fail(400, "Please give the group a name.");
  try {
    const r = await env.DB.prepare("INSERT INTO course_groups (course, name, created_at) VALUES (?, ?, ?)").bind(b.course, name, now()).run();
    return json({ group: { id: r.meta.last_row_id, course: b.course, name, members: 0 } }, 201);
  } catch (e) { if (isUnique(e)) return fail(409, "That course already has a group with that name."); throw e; }
}
async function groupRename(env, id, request) {
  const name = groupName((await body(request)).name);
  if (!name) return fail(400, "Please give the group a name.");
  try {
    const r = await env.DB.prepare("UPDATE course_groups SET name = ? WHERE id = ?").bind(name, id).run();
    return r.meta.changes ? json({ ok: true, name }) : fail(404, "No such group.");
  } catch (e) { if (isUnique(e)) return fail(409, "That course already has a group with that name."); throw e; }
}
async function groupDelete(env, id) {
  await env.DB.prepare("DELETE FROM group_members WHERE group_id = ?").bind(id).run();
  const r = await env.DB.prepare("DELETE FROM course_groups WHERE id = ?").bind(id).run();
  return r.meta.changes ? json({ ok: true }) : fail(404, "No such group.");
}
async function groupDetail(env, id) {
  const group = await env.DB.prepare("SELECT id, course, name, created_at FROM course_groups WHERE id = ?").bind(id).first();
  if (!group) return fail(404, "No such group.");
  const { results } = await env.DB.prepare(
    `SELECT u.id, u.name, u.age, u.email, m.added_at FROM group_members m JOIN users u ON u.id = m.user_id
     WHERE m.group_id = ? ORDER BY u.name COLLATE NOCASE`).bind(id).all();
  return json({ group: { ...group, courseName: COURSE_NAMES[group.course] || group.course }, members: results });
}
async function groupAddMember(env, id, userId) {
  const g = await env.DB.prepare("SELECT id FROM course_groups WHERE id = ?").bind(id).first();
  if (!g) return fail(404, "No such group.");
  const u = await env.DB.prepare("SELECT id FROM users WHERE id = ?").bind(userId).first();
  if (!u) return fail(404, "No such user.");
  await env.DB.prepare("INSERT OR IGNORE INTO group_members (group_id, user_id, added_at) VALUES (?, ?, ?)").bind(id, userId, now()).run();
  return json({ ok: true });
}
async function groupRemoveMember(env, id, userId) {
  const r = await env.DB.prepare("DELETE FROM group_members WHERE group_id = ? AND user_id = ?").bind(id, userId).run();
  return r.meta.changes ? json({ ok: true }) : fail(404, "That learner is not in this group.");
}

/* ---------- router ---------- */
export async function onRequest({ request, env, params }) {
  try {
    if (!env.DB) return fail(500, "The database is not connected yet.");
    const method = request.method;
    const path = [].concat(params.route || []);
    const url = new URL(request.url);

    // Block cross-site writes.
    if (method !== "GET" && method !== "HEAD") {
      const origin = request.headers.get("origin");
      if (origin && new URL(origin).host !== url.host) return fail(403, "Forbidden.");
    }
    // Tidy up expired rows now and then.
    if (Math.random() < 0.02) {
      await env.DB.batch([
        env.DB.prepare("DELETE FROM sessions WHERE expires_at < ?").bind(now()),
        env.DB.prepare("DELETE FROM attempts WHERE ts < ?").bind(now() - 86400),
      ]);
    }

    const as = url.searchParams.get("as") === "admin" ? "admin" : "user";
    const [a, b, c] = path;
    if (method === "POST" && a === "register" && !b) return await register(env, request);
    if (method === "POST" && a === "login" && !b) return await login(env, request);
    if (method === "POST" && a === "logout" && !b) return await logout(env, request, as);

    if (method === "GET" && a === "me" && !b) return await me(env, await getSession(env, request, as));

    // Lessons for a path whose content lives on the server. Signed-in learners only.
    if (a === "content" && !b && method === "GET") {
      if (!(await getSession(env, request, "user"))) return fail(401, "Please log in.");
      const c = CONTENT[url.searchParams.get("track")];
      return c ? json(c) : fail(404, "Unknown learning path.");
    }

    if (a === "groups" && !b && method === "GET") {
      const session = await getSession(env, request, "user");
      if (!session) return fail(401, "Please log in.");
      return await myGroups(env, session);
    }

    if (a === "progress" && !b && method === "PUT") {
      const session = await getSession(env, request, "user");
      if (!session) return fail(401, "Please log in.");
      return await saveProgress(env, session, request);
    }

    if (a === "admin") {
      if (!(await getSession(env, request, "admin"))) return fail(401, "Admins only.");
      if (b === "users" && !c && method === "GET") return await adminList(env);
      const id = /^\d+$/.test(c || "") ? +c : null;
      if (b === "users" && id) {
        if (path.length === 3 && method === "GET") return await adminUser(env, id);
        if (path.length === 3 && method === "DELETE") return await adminDelete(env, id);
        if (path.length === 4 && path[3] === "password" && method === "POST") return await adminResetPassword(env, id, request);
      }
      if (b === "groups") {
        if (path.length === 2 && method === "GET") return await groupsList(env);
        if (path.length === 2 && method === "POST") return await groupCreate(env, request);
        if (id && path.length === 3 && method === "GET") return await groupDetail(env, id);
        if (id && path.length === 3 && method === "PATCH") return await groupRename(env, id, request);
        if (id && path.length === 3 && method === "DELETE") return await groupDelete(env, id);
        const uid = /^\d+$/.test(path[4] || "") ? +path[4] : null;
        if (id && uid && path.length === 5 && path[3] === "members") {
          if (method === "PUT") return await groupAddMember(env, id, uid);
          if (method === "DELETE") return await groupRemoveMember(env, id, uid);
        }
      }
    }
    return fail(404, "Not found.");
  } catch (err) {
    if (err instanceof Response) return err;
    console.error(err);
    return fail(500, "Something went wrong. Please try again.");
  }
}
