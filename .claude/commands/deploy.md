---
description: Commit current changes and publish gaideus.org (push to fork + GAIDEUS repo; Cloudflare Pages deploys)
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(./deploy.sh:*)
---

Publish the current changes to gaideus.org.

1. Run `git status --short` and `git diff --stat` to see what changed. If nothing changed and there are no unpushed commits, say so and stop.
2. Write a short, plain-English commit message (one line, under 70 characters) that describes the change, e.g. "Add Jamal the camel mascot to the learn page". If the user gave a message in $ARGUMENTS, use that instead.
3. Run `./deploy.sh -y "<message>"`.
4. Report what was committed and pushed, and remind the user that Cloudflare Pages deploys gaideus.org about a minute after the push. If the script stops (wrong branch, or GitHub has newer changes), explain what it said and what to do next. Do not force-push.
