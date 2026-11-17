---
description: Commit current changes, push dev, then merge into main and publish gaideus.org
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(./release.sh:*)
---

Publish the current work to the live site.

1. Run `git status --short` and `git diff --stat` to see what changed.
2. Write a short, plain-English commit message (one line, under 70 characters). If the user gave one in $ARGUMENTS, use that.
3. Run `./release.sh -y "<message>"`.
4. Report what went live. If the script stops (merge conflict, or GitHub has newer changes), explain what it said and what to do next. Never force-push.
