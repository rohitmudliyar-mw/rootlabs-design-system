#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Ship the Root Labs design system in one command:
#   build  →  commit  →  push to GitHub  →  deploy to production
#
# Usage:
#   npm run ship "what you changed"
#
# If the build fails, nothing is committed, pushed, or deployed.
# ---------------------------------------------------------------------------
set -euo pipefail

MSG="${1:-Update design system}"
DOMAIN="rootlabs-design-system.vercel.app"

echo "▶ 1/4  Type-check & build"
npm run build

echo "▶ 2/4  Commit & push to GitHub"
git add -A
if git diff --cached --quiet; then
  echo "   (nothing new to commit — deploying current main)"
else
  git commit -m "$MSG"
fi
git push origin main

echo "▶ 3/4  Deploy to production"
DEPLOY_OUT="$(npx vercel@latest deploy --prod --yes 2>/dev/null)"
DEPLOY_URL="$(echo "$DEPLOY_OUT" | grep -oE 'https://[a-z0-9.-]+\.vercel\.app' | tail -1)"
echo "   deployment: $DEPLOY_URL"

echo "▶ 4/4  Point $DOMAIN at the new deployment"
npx vercel@latest alias set "$DEPLOY_URL" "$DOMAIN" >/dev/null
echo "   ✓ live: https://$DOMAIN"

echo ""
echo "✓ Shipped."
