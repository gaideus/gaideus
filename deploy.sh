#!/usr/bin/env bash
# Commit any changes, push to your fork (origin) and the GAIDEUS org repo (upstream).
# Cloudflare Pages watches the org repo, so the push to upstream/main is the deploy.
#
# Usage:
#   ./deploy.sh "What changed"      # asks before committing and pushing
#   ./deploy.sh -y "What changed"   # no prompt
set -euo pipefail

cd "$(dirname "$0")"

YES=0
if [[ "${1:-}" == "-y" ]]; then YES=1; shift; fi
MSG="${1:-}"

branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$branch" != "main" ]]; then
  echo "✋ You're on '$branch'. Switch to main first (git checkout main)." >&2
  exit 1
fi

echo "→ Checking GitHub for newer changes…"
git fetch -q origin
git fetch -q upstream

# Stop if either remote has commits we don't have, instead of overwriting them.
for r in origin upstream; do
  if ! git merge-base --is-ancestor "$r/main" HEAD; then
    echo "✋ $r/main has changes you don't have locally." >&2
    echo "   Run: git pull $r main   then run ./deploy.sh again." >&2
    exit 1
  fi
done

if [[ -n "$(git status --porcelain)" ]]; then
  echo
  echo "Changes to commit:"
  git status --short
  echo
  if [[ -z "$MSG" ]]; then
    read -r -p "Commit message: " MSG
    [[ -z "$MSG" ]] && { echo "✋ A commit message is needed." >&2; exit 1; }
  fi
  if [[ $YES -eq 0 ]]; then
    read -r -p "Commit and publish to gaideus.org? [y/N] " ok
    [[ "$ok" =~ ^[Yy]$ ]] || { echo "Cancelled."; exit 0; }
  fi
  git add -A
  git commit -q -m "$MSG"
  echo "✓ Committed: $MSG"
elif [[ "$(git rev-parse HEAD)" == "$(git rev-parse upstream/main)" ]]; then
  echo "Nothing new to publish. gaideus.org is already up to date."
  exit 0
fi

echo "→ Pushing to your fork (origin)…"
git push -q origin main
echo "→ Pushing to the GAIDEUS repo (upstream)…"
git push -q upstream main

echo
echo "✓ Pushed $(git rev-parse --short HEAD) to GitHub."
echo "  Cloudflare Pages will deploy it in about a minute: https://gaideus.org"
