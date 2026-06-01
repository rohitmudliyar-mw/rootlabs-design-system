# Workflow, update & ship

How a change to the guidelines or a component flows through to every page, the
docs, and production. The system is built so **most things update themselves**.

## Single sources of truth

| You change… | Edit this one place | What updates automatically |
| --- | --- | --- |
| **Brand tokens** (color, radius, fonts) | `src/app/globals.css` | Every component and every page, the guide, installation page, landing, and product, because they all use the same Tailwind token classes (`bg-green`, `text-ink`, …). |
| **Copy / product data** (prices, reviews, FAQ, ingredients) | `src/lib/content.ts` | The landing page, the product page, and any guide section that reads from it. |
| **A component** (e.g. `Button`, `Card`, `BuyBox`) | `src/components/**` | Every page that imports it, instantly. |
| **Docs site nav/chrome** | `src/components/guide/docs-header.tsx` / `docs-footer.tsx` | Both the guide and the installation page (they share these). |

> Because the design guide and the example pages consume the **same** components
> and tokens, you almost never update things in two places. Change the source,
> and it ripples everywhere.

## The two manual sync points

A couple of things are *documentation about* the system, so they don't auto-derive:

1. **`DESIGN.md`**, if you change a token value in `globals.css` (or add a
   component), mirror it in the `DESIGN.md` front matter so AI tools stay accurate.
2. **The guide's "Components" section** (`src/app/page.tsx`) and the
   **installation snippets**, if you add a brand-new *type* of component, add a
   showcase block for it. (Restyling an existing component needs no doc change.)

If you add a folder or route, also update the structure notes in `CLAUDE.md`.

## Ship it

Autodeploy is **on**, so a plain push deploys to production:

```bash
git add -A && git commit -m "what changed" && git push
```

Or use the one-liner, which builds first (so a broken change never reaches `main`):

```bash
npm run ship "describe what you changed"
```

`scripts/ship.sh` runs `npm run build` → commit → push. The push triggers GitHub
Actions, which deploys to production and points
https://rootlabs-design-system.vercel.app at the new build (~1 min). Watch it in the
repo's **Actions** tab.

### Deploy manually (fallback)

```bash
npm run deploy   # vercel deploy --prod --yes
```

## Continuous integration

`.github/workflows/ci.yml` runs the build on every push and pull request, so a
broken change shows a ❌ on GitHub before it reaches users. No setup required.

## Autodeploy (active)

Every push to `main` auto-deploys to production via
`.github/workflows/deploy.yml` (build → deploy → re-alias the domain). It's enabled
by the `VERCEL_TOKEN` repository secret, already set. To rotate it: create a new
token at https://vercel.com/account/tokens, then
`gh secret set VERCEL_TOKEN --repo rohitmudliyar-mw/rootlabs-design-system`.

A separate CI workflow builds on every push/PR as a safety check.

## Quick reference

- **Repo:** https://github.com/rohitmudliyar-mw/rootlabs-design-system
- **Live:** https://rootlabs-design-system.vercel.app
- **Tokens:** `src/app/globals.css` · **Copy:** `src/lib/content.ts`
- **Design spec for AI:** `DESIGN.md` · **Project guide for AI:** `CLAUDE.md`
