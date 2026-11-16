-- Migration 0002: groups inside each course (learning path).
-- Run once in the D1 Console for each database (production and dev). Safe to run more than once.

CREATE TABLE IF NOT EXISTS course_groups (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  course      TEXT    NOT NULL,
  name        TEXT    NOT NULL,
  created_at  INTEGER NOT NULL,
  UNIQUE (course, name)
);

CREATE TABLE IF NOT EXISTS group_members (
  group_id    INTEGER NOT NULL REFERENCES course_groups(id) ON DELETE CASCADE,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  added_at    INTEGER NOT NULL,
  PRIMARY KEY (group_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_group_members_user ON group_members(user_id);
