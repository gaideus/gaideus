#!/usr/bin/env bash
# Commit any changes and push the current branch to the GAIDEUS repo (upstream = github.com/gaideus/gaideus).
# Cloudflare Pages watches that repo:
#   main  -> the live site, https://gaideus.org
#   dev   -> a test copy (Cloudflare "preview" deployment), not the live site
#
# Usage:
#   ./deploy.sh "What changed"      # asks before committing and pushing
#   ./deploy.sh -y "What changed"   # no prompt
#
# Test on dev first, then make it live:
#   git checkout dev  && ./deploy.sh "What changed"
#   git checkout main && git merge dev && ./deploy.sh
set -euo pipefail

cd "$(dirname "$0")"

YES=0
if [[ "${1:-}" == "-y" ]]; then YES=1; shift; fi
MSG="${1:-}"

branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$branch" != "main" && "$branch" != "dev" ]]; then
  echo "✋ You're on '$branch'. Switch to main or dev first (git checkout dev)." >&2
  exit 1
fi
if [[ "$branch" == "main" ]]; then where="the LIVE site (gaideus.org)"; else where="the dev test copy (not the live site)"; fi

echo "→ Checking GitHub for newer changes…"
git fetch -q upstream

# Stop if GitHub has commits we don't have, instead of overwriting them.
remote_has_branch=0
if git rev-parse -q --verify "upstream/$branch" >/dev/null; then
  remote_has_branch=1
  if ! git merge-base --is-ancestor "upstream/$branch" HEAD; then
    echo "✋ upstream/$branch has changes you don't have locally." >&2
    echo "   Run: git pull upstream $branch   then run ./deploy.sh again." >&2
    exit 1
  fi
fi

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
    read -r -p "Commit and publish to $where? [y/N] " ok
    [[ "$ok" =~ ^[Yy]$ ]] || { echo "Cancelled."; exit 0; }
  fi
  git add -A
  git commit -q -m "$MSG"
  echo "✓ Committed: $MSG"
elif [[ $remote_has_branch -eq 1 && "$(git rev-parse HEAD)" == "$(git rev-parse "upstream/$branch")" ]]; then
  echo "Nothing new to publish. '$branch' on GitHub is already up to date."
  exit 0
fi

echo "→ Pushing '$branch' to the GAIDEUS repo (upstream)…"
git push -q -u upstream "$branch"

echo
echo "✓ Pushed $(git rev-parse --short HEAD) to GitHub ($branch)."
if [[ "$branch" == "main" ]]; then
  echo "  Cloudflare Pages will deploy it in about a minute: https://gaideus.org"
else
  echo "  Cloudflare Pages will build a test copy in about a minute."
  echo "  Find its address in Cloudflare: Workers & Pages → your project → Deployments → the 'dev' row."
  echo "  When you're happy:  git checkout main && git merge dev && ./deploy.sh"
fi
