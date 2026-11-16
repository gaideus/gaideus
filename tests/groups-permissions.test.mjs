// Permission tests for course groups.
//
// Run the site locally first (./dev.sh), then in another terminal:
//   node --test tests/*.test.mjs
//
// Uses the local admin login from dev.sh by default. To point at another server:
//   BASE=http://localhost:8788 ADMIN_EMAIL=... ADMIN_PASSWORD=... node --test tests/*.test.mjs
// Never run this against the live site: it creates and deletes accounts and groups.

import test from "node:test";
import assert from "node:assert/strict";

const BASE = process.env.BASE || "http://localhost:8788";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@gaideus.local";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin-local-password";
const tag = Date.now();

async function call(method, path, { body, cookie, origin } = {}) {
  const r = await fetch(BASE + path, {
    method,
    headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}), ...(origin ? { origin } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  let json = null;
  try { json = await r.json(); } catch {}
  const set = r.headers.get("set-cookie");
  return { status: r.status, json, cookie: set ? set.split(";")[0] : null };
}
async function newLearner(name, age) {
  const r = await call("POST", "/api/register", { body: { name, age, email: `${name}.${tag}@groups.test`.toLowerCase(), password: "camel-pass-9", agreed: true } });
  assert.equal(r.status, 201, "could not create a test learner: is ./dev.sh running?");
  return { id: r.json.user.id, cookie: r.cookie };
}

// Every group endpoint, with a body where one is needed. :g and :u are filled in below.
const ENDPOINTS = [
  ["GET", "/api/admin/groups"],
  ["POST", "/api/admin/groups", { course: "kids", name: "Sneaky " + tag }],
  ["GET", "/api/admin/groups/:g"],
  ["PATCH", "/api/admin/groups/:g", { name: "Renamed by intruder" }],
  ["DELETE", "/api/admin/groups/:g"],
  ["PUT", "/api/admin/groups/:g/members/:u"],
  ["DELETE", "/api/admin/groups/:g/members/:u"],
];

let admin, learner, other, group;

test.before(async () => {
  const a = await call("POST", "/api/login", { body: { email: ADMIN_EMAIL, password: ADMIN_PASSWORD } });
  assert.equal(a.status, 200, "admin login failed: check ADMIN_EMAIL / ADMIN_PASSWORD");
  admin = a.cookie;
  learner = await newLearner("Bilal", 12);
  other = await newLearner("Hamza", 17);
  const g = await call("POST", "/api/admin/groups", { cookie: admin, body: { course: "kids", name: "Saturday class " + tag } });
  assert.equal(g.status, 201);
  group = g.json.group.id;
  assert.equal((await call("PUT", `/api/admin/groups/${group}/members/${learner.id}`, { cookie: admin })).status, 200);
});

const fill = (p) => p.replace(":g", group).replace(":u", learner.id);

test("someone who is not signed in is refused on every group endpoint", async () => {
  for (const [method, path, body] of ENDPOINTS) {
    const r = await call(method, fill(path), { body });
    assert.equal(r.status, 401, `${method} ${path} should be 401, got ${r.status}`);
    assert.equal(JSON.stringify(r.json).includes("Saturday class"), false, `${method} ${path} leaked group data`);
  }
});

test("a signed-in learner is refused on every group endpoint", async () => {
  for (const [method, path, body] of ENDPOINTS) {
    const r = await call(method, fill(path), { body, cookie: learner.cookie });
    assert.equal(r.status, 401, `${method} ${path} should be 401 for a learner, got ${r.status}`);
    assert.equal(JSON.stringify(r.json).includes("Saturday class"), false, `${method} ${path} leaked group data`);
  }
});

test("a learner cannot pass their cookie off as the admin cookie", async () => {
  const forged = learner.cookie.replace(/^gs=/, "ga=");
  for (const [method, path, body] of ENDPOINTS) {
    const r = await call(method, fill(path), { body, cookie: forged });
    assert.equal(r.status, 401, `${method} ${path} accepted a learner session as admin`);
  }
});

test("a made-up admin cookie is refused", async () => {
  const r = await call("GET", "/api/admin/groups", { cookie: "ga=" + "0".repeat(64) });
  assert.equal(r.status, 401);
});

test("nothing the refused requests tried actually happened", async () => {
  const list = await call("GET", "/api/admin/groups", { cookie: admin });
  const mine = list.json.groups.find((g) => g.id === group);
  assert.ok(mine, "the group was deleted by a refused request");
  assert.equal(mine.name, "Saturday class " + tag, "the group was renamed by a refused request");
  assert.equal(mine.members, 1, "membership was changed by a refused request");
  assert.equal(list.json.groups.some((g) => g.name === "Sneaky " + tag), false, "a refused request created a group");
});

test("an admin write from another website is blocked", async () => {
  const r = await call("POST", "/api/admin/groups", { cookie: admin, origin: "https://evil.example", body: { course: "kids", name: "Cross-site " + tag } });
  assert.equal(r.status, 403);
});

test("learner-facing endpoints never reveal groups", async () => {
  const me = await call("GET", "/api/me", { cookie: learner.cookie });
  assert.equal(me.status, 200);
  assert.equal(JSON.stringify(me.json).includes("Saturday class"), false);
});

test("the admin can create, rename, fill and delete groups", async () => {
  const dup = await call("POST", "/api/admin/groups", { cookie: admin, body: { course: "kids", name: "Saturday class " + tag } });
  assert.equal(dup.status, 409, "a duplicate name in the same course should be refused");
  const bad = await call("POST", "/api/admin/groups", { cookie: admin, body: { course: "nope", name: "X" } });
  assert.equal(bad.status, 400, "an unknown course should be refused");
  const empty = await call("POST", "/api/admin/groups", { cookie: admin, body: { course: "kids", name: "   " } });
  assert.equal(empty.status, 400, "an empty name should be refused");

  // the same name is fine in a different course, and one learner can be in groups in both courses
  const g2 = await call("POST", "/api/admin/groups", { cookie: admin, body: { course: "study", name: "Saturday class " + tag } });
  assert.equal(g2.status, 201);
  assert.equal((await call("PUT", `/api/admin/groups/${g2.json.group.id}/members/${learner.id}`, { cookie: admin })).status, 200);
  assert.equal((await call("PUT", `/api/admin/groups/${g2.json.group.id}/members/${learner.id}`, { cookie: admin })).status, 200, "adding twice is harmless");
  assert.equal((await call("PUT", `/api/admin/groups/${g2.json.group.id}/members/${other.id}`, { cookie: admin })).status, 200);
  assert.equal((await call("PUT", `/api/admin/groups/${g2.json.group.id}/members/99999999`, { cookie: admin })).status, 404);

  const d = await call("GET", `/api/admin/groups/${g2.json.group.id}`, { cookie: admin });
  assert.deepEqual(d.json.members.map((m) => m.id).sort(), [learner.id, other.id].sort());
  assert.equal(d.json.members.some((m) => "pass_hash" in m), false, "member list must not include password data");

  assert.equal((await call("PATCH", `/api/admin/groups/${g2.json.group.id}`, { cookie: admin, body: { name: "Sunday class " + tag } })).status, 200);
  assert.equal((await call("DELETE", `/api/admin/groups/${g2.json.group.id}/members/${other.id}`, { cookie: admin })).status, 200);
  assert.equal((await call("DELETE", `/api/admin/groups/${g2.json.group.id}/members/${other.id}`, { cookie: admin })).status, 404);

  // deleting a learner removes them from their groups; deleting a group keeps its learners
  assert.equal((await call("DELETE", `/api/admin/users/${other.id}`, { cookie: admin })).status, 200);
  assert.equal((await call("DELETE", `/api/admin/groups/${g2.json.group.id}`, { cookie: admin })).status, 200);
  assert.equal((await call("GET", `/api/admin/groups/${g2.json.group.id}`, { cookie: admin })).status, 404);
  assert.equal((await call("GET", `/api/admin/users/${learner.id}`, { cookie: admin })).status, 200, "deleting a group must not delete its learners");
});

test.after(async () => {
  if (!admin) return;
  if (group) await call("DELETE", `/api/admin/groups/${group}`, { cookie: admin });
  if (learner) await call("DELETE", `/api/admin/users/${learner.id}`, { cookie: admin });
});
