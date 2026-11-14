#!/usr/bin/env bash
# Run the whole site on your computer, including login and the admin portal.
#   ./dev.sh        then open  http://localhost:8788  (learn: /learn/  admin: /admin/)
# Uses a throwaway local database in .wrangler/ (never touches the real one).
# Local admin login: admin@gaideus.local / admin-local-password  (edit .dev.vars to change)
set -euo pipefail
cd "$(dirname "$0")"

STATE="$PWD/.wrangler/state"
mkdir -p "$STATE" .wrangler/dev
cat > .wrangler/dev/wrangler.jsonc <<'JSON'
{"name":"gaideus-dev","compatibility_date":"2025-01-01","d1_databases":[{"binding":"DB","database_name":"DB","database_id":"DB"}]}
JSON
[[ -f .dev.vars ]] || printf 'ADMIN_EMAIL=admin@gaideus.local\nADMIN_PASSWORD=admin-local-password\n' > .dev.vars

echo "→ Preparing the local database…"
(cd .wrangler/dev && npx --yes wrangler@4 d1 execute DB --local --persist-to "$STATE" --file="$OLDPWD/schema.sql" >/dev/null)

echo "→ Starting the site at http://localhost:8788  (Ctrl+C to stop)"
exec npx --yes wrangler@4 pages dev . --port 8788 --d1=DB --persist-to "$STATE"
