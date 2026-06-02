@AGENTS.md

# Root Labs Design System

A clean, mobile-first design system. **Root Labs** is the organization; **AshwaMag**
(a doctor-led sleep gummy, _"Rested, not sedated."_) is the reference brand the
system is demonstrated with.

- **Live:** https://rootlabs-design-system.vercel.app
- **Repo:** https://github.com/rohitmudliyar-mw/rootlabs-design-system
- **Design tokens for AI tools:** see `DESIGN.md` (google-labs `design.md` format)
- **Full brand guide:** `docs/ashwamag-brand-guide.html`

## Stack

- **Next.js 16** (App Router) · **React 19**
- **Tailwind CSS v4** (CSS-first config, theme lives in `src/app/globals.css`, no `tailwind.config`)
- **shadcn/ui** on **Base UI** primitives (`@base-ui/react`) + **lucide-react** icons
- Hosted on **Vercel**

## Commands

```bash
npm run dev      # local dev server (http://localhost:3000)
npm run build    # production build + type check (run before deploying)
npm run lint     # eslint
npx vercel deploy --prod --yes   # deploy to production
```

## Routes

- `/`, the design guide (brand, foundations, components, examples)
- `/components`, API reference with prop tables for every component
- `/installation`, setup & usage docs
- `/landing`, sample landing page
- `/product`, sample product detail page (PDP)
- `/product-skeleton`, lean PDP skeleton (cart sheet, pack slider, scroll reveals); components in `src/components/pdp/skeleton/`

## Project structure

```
src/
├─ app/
│  ├─ page.tsx          design guide        layout.tsx   fonts + metadata
│  ├─ installation/     setup docs          globals.css  ⭐ ALL brand tokens
│  ├─ landing/          sample landing
│  └─ product/          sample PDP
├─ components/
│  ├─ ui/               shadcn primitives (button, accordion, tabs, sheet…)
│  ├─ brand/            brand atoms (Container, typography, Card, Pill, Stars, Logo…)
│  ├─ sections/         landing-page sections (Hero, Reviews, Faq, Comparison…)
│  ├─ pdp/              product-page sections (BuyBox, ProductGallery, StickyBuyBar…)
│  └─ guide/            docs-site chrome (DocsHeader, DocsFooter, PhoneFrame, CodeBlock)
└─ lib/
   ├─ content.ts        ⭐ ALL copy & product data
   └─ utils.ts          cn() helper
```

## Conventions, follow these

- **Mobile-first, always.** Write base styles for small screens; add `sm:`/`lg:` upward.
- **Tokens, not hex.** Use `bg-bone`, `text-ink`, `text-green`, `border-hair`, etc. Edit
  values only in `globals.css`. Brand colors: bone `#F1F3EE`, ink `#181C19`,
  green (lead) `#33513F`, green-mist `#E9EFE6`, green-hl (highlighter) `#CDE3B0`,
  berry (product) `#7C2D43`, hair `#E1E5DB`.
- **Type:** Fraunces (`font-serif`) for display/headlines; Inter (`font-sans`) for everything else.
- **Radius:** buttons are pills (`rounded-full`); cards use 18px (`rounded-xl`). Shadows are near-invisible, premium reads as restraint.
- **Components first.** Reach for `@/components/brand` atoms and `@/components/ui` primitives
  before writing raw markup. Put copy in `lib/content.ts`, not inline.
- **Accessibility:** WCAG AA contrast, 44px min tap targets, respect `prefers-reduced-motion`,
  never rely on color alone.
- **The green highlighter** (`<Highlight>`) marks exactly ONE phrase at a time. Never a fill.
- Run `npm run build` before deploying to catch type errors.

## Brand voice (when writing copy)

Credible, calm, evidence-forward, honest, supportive. **Never** use hype, fear, or
"knock you out"/sedative/miracle language. Lead with the mechanism, then the benefit;
cite the dose and the study. The honest results curve is 18 to 28 days. Filter: _"Would a
thoughtful sleep doctor read this and nod?"_

**Make it humane.** Write like a person, not a brand: warm, plain, short sentences, the
way you'd say it to a friend who reads labels. Two hard rules:

- **No em dashes.** Use commas, periods, or parentheses instead. Rewrite the sentence
  rather than reaching for a dash. (This applies to code and docs too, not just copy.)
- **No AI language.** Avoid filler like "elevate", "unlock", "seamless", "delve",
  "robust", "in today's world", and anything that reads machine-written. If a sentence
  sounds like a press release or an LLM, rewrite it plainly.

## Workflow, update & ship

See `WORKFLOW.md` for the full version. The system is DRY, so changes propagate:

- Change a **token** → `src/app/globals.css` → updates every component & page. **Then mirror
  the value in `DESIGN.md`** (the one manual sync).
- Change **copy** → `src/lib/content.ts` → updates landing + product.
- Change a **component** → `src/components/**` → updates every page that imports it.
- Add a **new component type** → also add a showcase block in `src/app/page.tsx` and, if
  relevant, a snippet on `src/app/installation/page.tsx`.
- Add a **folder/route** → update the structure notes above.

**Ship:** autodeploy is on, so a plain push deploys to prod. Or run:

```bash
npm run ship "what you changed"   # build → commit → push (Actions deploys)
```

If the build fails, nothing is pushed.

## Deploy

Autodeploy: every push to `main` runs `.github/workflows/deploy.yml` (build → deploy to
production → re-alias `rootlabs-design-system.vercel.app`), gated on the `VERCEL_TOKEN`
repo secret (set). `.github/workflows/ci.yml` builds on every push/PR. Manual fallback:
`npm run deploy` (`vercel deploy --prod --yes`). Vercel project: `rootlabs-design-system`
(team `rohits-projects-e06afadc`).
