-- GAIDEUS Learn: database tables (Cloudflare D1).
-- Safe to run more than once.

CREATE TABLE IF NOT EXISTS users (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT    NOT NULL,
  age         INTEGER NOT NULL,
  email       TEXT    NOT NULL UNIQUE,   -- always stored lowercase
  pass_hash   TEXT    NOT NULL,          -- PBKDF2, never the real password
  created_at  INTEGER NOT NULL,
  last_login  INTEGER,
  consent_at  INTEGER                -- when they ticked "13 or older / my parent says it's OK"
);

CREATE TABLE IF NOT EXISTS progress (
  user_id     INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  data        TEXT    NOT NULL,          -- the learner's full progress (JSON)
  summary     TEXT    NOT NULL,          -- per-lesson summary the admin portal shows (JSON)
  xp          INTEGER NOT NULL DEFAULT 0,
  mastered    INTEGER NOT NULL DEFAULT 0,
  stars       INTEGER NOT NULL DEFAULT 0,
  pct         INTEGER NOT NULL DEFAULT 0,
  streak      INTEGER NOT NULL DEFAULT 0,
  updated_at  INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token_hash  TEXT    PRIMARY KEY,       -- SHA-256 of the cookie value
  user_id     INTEGER REFERENCES users(id) ON DELETE CASCADE,  -- NULL = admin
  role        TEXT    NOT NULL,          -- 'user' or 'admin'
  expires_at  INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS attempts (    -- slows down password guessing and spam sign-ups
  k           TEXT    NOT NULL,
  ts          INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_attempts ON attempts(k, ts);
CREATE INDEX IF NOT EXISTS idx_sessions_exp ON sessions(expires_at);
