#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Build, commit, and push. GitHub Actions then deploys to production
# automatically (see .github/workflows/deploy.yml).
#
# Usage:
#   npm run ship "what you changed"
#
# If the build fails, nothing is committed or pushed.
# ---------------------------------------------------------------------------
set -euo pipefail

MSG="${1:-Update design system}"

echo "▶ 1/3  Type-check & build"
npm run build

echo "▶ 2/3  Commit"
git add -A
if git diff --cached --quiet; then
  echo "   (nothing new to commit — pushing current main)"
else
  git commit -m "$MSG"
fi

echo "▶ 3/3  Push to GitHub (Actions deploys to production)"
git push origin main

echo ""
echo "✓ Pushed. Deploy is running:"
echo "  https://github.com/rohitmudliyar-mw/rootlabs-design-system/actions"
