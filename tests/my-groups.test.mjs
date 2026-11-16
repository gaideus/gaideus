// Tests for the learner's "My groups" data (GET /api/groups).
// Run the site locally first (./dev.sh), then:  node --test tests/*.test.mjs
// Never run this against the live site: it creates and deletes accounts and groups.

import test from "node:test";
import assert from "node:assert/strict";

const BASE = process.env.BASE || "http://localhost:8788";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@gaideus.local";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin-local-password";
const tag = Date.now();

async function call(method, path, { body, cookie } = {}) {
  const r = await fetch(BASE + path, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: body === undefined ? undefined : JSON.stringify(body) });
  let json = null; try { json = await r.json(); } catch {}
  const set = r.headers.get("set-cookie");
  return { status: r.status, json, text: JSON.stringify(json), cookie: set ? set.split(";")[0] : null };
}
async function newLearner(name, age) {
  const email = `${name.split(" ")[0]}.${tag}@mygroups.test`.toLowerCase();
  const r = await call("POST", "/api/register", { body: { name, age, email, password: "camel-pass-9", agreed: true } });
  assert.equal(r.status, 201, "could not create a test learner: is ./dev.sh running?");
  return { id: r.json.user.id, cookie: r.cookie, email };
}
// Save progress for `lessons` fully finished lessons plus `extraSteps` single steps in the next lesson.
function save(u, track, lessons, extraSteps = 0) {
  const ls = {};
  for (let i = 1; i <= lessons; i++) ls[i] = { learned: true, game: true, best: 3, tries: 1 };
  if (extraSteps) ls[lessons + 1] = { learned: true, game: extraSteps > 1, best: null, tries: 0 };
  return call("PUT", "/api/progress", { cookie: u.cookie, body: { track, progress: { lessons: ls, final: { best: 0, tries: 0 }, days: [], badges: [] }, summary: {} } });
}

let admin, amina, bilal, hamza, loner, gKids, gStudy;

test.before(async () => {
  const a = await call("POST", "/api/login", { body: { email: ADMIN_EMAIL, password: ADMIN_PASSWORD } });
  assert.equal(a.status, 200, "admin login failed");
  admin = a.cookie;
  amina = await newLearner("Amina Khan", 9);
  bilal = await newLearner("Bilal", 12);
  hamza = await newLearner("Hamza", 17);
  loner = await newLearner("Loner", 10);
  gKids = (await call("POST", "/api/admin/groups", { cookie: admin, body: { course: "kids", name: "Kids class " + tag } })).json.group.id;
  gStudy = (await call("POST", "/api/admin/groups", { cookie: admin, body: { course: "study", name: "Study class " + tag } })).json.group.id;
  for (const u of [amina, bilal, hamza]) await call("PUT", `/api/admin/groups/${gKids}/members/${u.id}`, { cookie: admin });
  for (const u of [amina, hamza]) await call("PUT", `/api/admin/groups/${gStudy}/members/${u.id}`, { cookie: admin });
  assert.equal((await save(amina, "kids", 4)).status, 200);        // 4 lessons done  -> 40%
  assert.equal((await save(bilal, "kids", 7, 1)).status, 200);     // 7 done + 1 step -> 73%
  assert.equal((await save(amina, "study", 1, 2)).status, 200);    // study: 1 done + 2 steps -> 17%
  // hamza has saved nothing: 0%
});

test("you must be signed in as a learner", async () => {
  assert.equal((await call("GET", "/api/groups")).status, 401);
  assert.equal((await call("GET", "/api/groups", { cookie: admin })).status, 401, "the admin cookie is not a learner session");
});

test("a learner with no group gets an empty list", async () => {
  const r = await call("GET", "/api/groups", { cookie: loner.cookie });
  assert.equal(r.status, 200);
  assert.deepEqual(r.json.groups, []);
});

test("a learner sees only their own groups", async () => {
  const b = await call("GET", "/api/groups", { cookie: bilal.cookie });
  assert.deepEqual(b.json.groups.map((g) => g.name), ["Kids class " + tag]);
  assert.equal(b.text.includes("Study class"), false, "saw a group they are not in");
  const a = await call("GET", "/api/groups", { cookie: amina.cookie });
  assert.deepEqual(a.json.groups.map((g) => g.course).sort(), ["kids", "study"], "one learner can be in groups in two courses");
});

test("progress comes from the saved lesson data, per course, sorted highest first", async () => {
  const a = await call("GET", "/api/groups", { cookie: amina.cookie });
  const kids = a.json.groups.find((g) => g.course === "kids"), study = a.json.groups.find((g) => g.course === "study");
  assert.equal(kids.courseName, "Aqeedah Journey");
  assert.deepEqual(kids.members.map((m) => [m.name, m.pct, m.done, m.total, m.me]), [["Bilal", 73, 7, 10, false], ["Amina", 40, 4, 10, true], ["Hamza", 0, 0, 10, false]]);
  assert.deepEqual(study.members.map((m) => [m.name, m.pct, m.done, m.total, m.me]), [["Amina", 17, 1, 10, true], ["Hamza", 0, 0, 10, false]], "the study group uses study progress, not kids progress");
  // it follows new progress without anything else being stored
  await save(amina, "kids", 9);
  const again = (await call("GET", "/api/groups", { cookie: bilal.cookie })).json.groups[0].members;
  assert.deepEqual(again.map((m) => [m.name, m.pct, m.me]), [["Amina", 90, false], ["Bilal", 73, true], ["Hamza", 0, false]]);
});

test("other members are shown by first name only: no emails, ages, ids or full names", async () => {
  const r = await call("GET", "/api/groups", { cookie: bilal.cookie });
  for (const u of [amina, bilal, hamza]) assert.equal(r.text.includes(u.email), false, "an email leaked");
  assert.equal(r.text.includes("@"), false, "something that looks like an email leaked");
  assert.equal(r.text.includes("Khan"), false, "a surname leaked");
  for (const m of r.json.groups[0].members) assert.deepEqual(Object.keys(m).sort(), ["done", "me", "name", "pct", "total"], "unexpected fields in a member row");
  assert.deepEqual(Object.keys(r.json.groups[0]).sort(), ["course", "courseName", "members", "name"]);
});

test("being removed from a group hides it straight away", async () => {
  await call("DELETE", `/api/admin/groups/${gKids}/members/${bilal.id}`, { cookie: admin });
  assert.deepEqual((await call("GET", "/api/groups", { cookie: bilal.cookie })).json.groups, []);
});

test.after(async () => {
  if (!admin) return;
  for (const g of [gKids, gStudy]) if (g) await call("DELETE", `/api/admin/groups/${g}`, { cookie: admin });
  for (const u of [amina, bilal, hamza, loner]) if (u) await call("DELETE", `/api/admin/users/${u.id}`, { cookie: admin });
});
