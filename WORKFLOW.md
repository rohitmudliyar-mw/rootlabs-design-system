# Workflow — update & ship

How a change to the guidelines or a component flows through to every page, the
docs, and production. The system is built so **most things update themselves**.

## Single sources of truth

| You change… | Edit this one place | What updates automatically |
| --- | --- | --- |
| **Brand tokens** (color, radius, fonts) | `src/app/globals.css` | Every component and every page — the guide, installation page, landing, and product — because they all use the same Tailwind token classes (`bg-green`, `text-ink`, …). |
| **Copy / product data** (prices, reviews, FAQ, ingredients) | `src/lib/content.ts` | The landing page, the product page, and any guide section that reads from it. |
| **A component** (e.g. `Button`, `Card`, `BuyBox`) | `src/components/**` | Every page that imports it, instantly. |
| **Docs site nav/chrome** | `src/components/guide/docs-header.tsx` / `docs-footer.tsx` | Both the guide and the installation page (they share these). |

> Because the design guide and the example pages consume the **same** components
> and tokens, you almost never update things in two places. Change the source,
> and it ripples everywhere.

## The two manual sync points

A couple of things are *documentation about* the system, so they don't auto-derive:

1. **`DESIGN.md`** — if you change a token value in `globals.css` (or add a
   component), mirror it in the `DESIGN.md` front matter so AI tools stay accurate.
2. **The guide's "Components" section** (`src/app/page.tsx`) and the
   **installation snippets** — if you add a brand-new *type* of component, add a
   showcase block for it. (Restyling an existing component needs no doc change.)

If you add a folder or route, also update the structure notes in `CLAUDE.md`.

## Ship it (one command)

```bash
npm run ship "describe what you changed"
```

This runs `scripts/ship.sh`, which does, in order:

1. **Build & type-check** (`npm run build`) — if this fails, nothing is shipped.
2. **Commit & push** to GitHub (`main`).
3. **Deploy to production** on Vercel.
4. **Point** `rootlabs-design-system.vercel.app` at the new deployment.

Result: GitHub has the latest, and https://rootlabs-design-system.vercel.app is live.

### Prefer the manual steps?

```bash
npm run build                      # 1. verify it compiles
git add -A && git commit -m "..."  # 2. save
git push                           # 3. push to GitHub
npm run deploy                     # 4. deploy to production
```

## Continuous integration

`.github/workflows/ci.yml` runs the build on every push and pull request, so a
broken change shows a ❌ on GitHub before it reaches users. No setup required.

## Hands-free deploy on push (autodeploy)

Make **every `git push` auto-deploy** — pick ONE:

**Option A — Vercel Git integration (simplest, recommended).** One-time, in the
browser, no tokens:

> vercel.com → **rootlabs-design-system** → Settings → **Git** → connect the
> `rohitmudliyar-mw/rootlabs-design-system` repo.

After that, push to `main` → Vercel builds & deploys to production; other branches
get preview URLs.

**Option B — GitHub Actions (already wired, needs one secret).** The workflow
`.github/workflows/deploy.yml` deploys to prod and re-aliases the domain on every
push to `main`. It stays **inert until** you add a Vercel token:

```bash
# create a token at https://vercel.com/account/tokens, then:
gh secret set VERCEL_TOKEN --repo rohitmudliyar-mw/rootlabs-design-system
```

Until the secret exists, the deploy job is **skipped** (never a red failure). With
both options you can stop running `npm run ship` and just `git push`.

## Quick reference

- **Repo:** https://github.com/rohitmudliyar-mw/rootlabs-design-system
- **Live:** https://rootlabs-design-system.vercel.app
- **Tokens:** `src/app/globals.css` · **Copy:** `src/lib/content.ts`
- **Design spec for AI:** `DESIGN.md` · **Project guide for AI:** `CLAUDE.md`
