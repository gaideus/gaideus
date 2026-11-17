#!/usr/bin/env bash
# One step from dev to the live site:
#   1. commit any changes on dev and push dev (the test copy)
#   2. merge dev into main and push main (gaideus.org)
#   3. switch back to dev
#
# Usage:
#   ./release.sh "What changed"      # asks once before going live
#   ./release.sh -y "What changed"   # no prompt
set -euo pipefail
cd "$(dirname "$0")"

YES=0
if [[ "${1:-}" == "-y" ]]; then YES=1; shift; fi
MSG="${1:-}"

back_to_dev() { git checkout -q dev 2>/dev/null || true; }
trap back_to_dev EXIT

git checkout -q dev

if [[ -n "$(git status --porcelain)" && -z "$MSG" ]]; then
  read -r -p "Commit message: " MSG
  [[ -z "$MSG" ]] && { echo "✋ A commit message is needed." >&2; exit 1; }
fi

echo "== Step 1 of 2: dev (test copy)"
./deploy.sh -y "${MSG:-Release}"

if [[ $YES -eq 0 ]]; then
  echo
  git log --oneline upstream/main..dev | sed 's/^/  /'
  read -r -p "Put the commits above live on gaideus.org? [y/N] " ok
  [[ "$ok" =~ ^[Yy]$ ]] || { echo "Stopped. Your changes are on dev only."; exit 0; }
fi

echo
echo "== Step 2 of 2: main (gaideus.org)"
git checkout -q main
git pull -q --ff-only upstream main
if ! git merge -q --no-edit dev; then
  git merge --abort 2>/dev/null || true
  echo "✋ dev and main have conflicting changes. Nothing went live. Ask Claude to help merge them." >&2
  exit 1
fi
./deploy.sh -y

echo
echo "✓ Live. You're back on the dev branch."
