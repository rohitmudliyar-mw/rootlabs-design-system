# Root Labs Design System

A clean, mobile-first design system for the AshwaMag brand (doctor-led sleep
science). Built so you can keep adding and modifying components yourself.

> **Brand:** _Rested, not sedated._ Clinical green is the lead color, berry is
> the product accent. Full brand rules live in `docs/ashwamag-brand-guide.html`.

## The stack (and why)

| Tool | What it is | Why |
| --- | --- | --- |
| **Next.js** | The framework (pages, routing) | Your recommended stack; deploys to Vercel in one click |
| **Tailwind CSS** | Styling via utility classes | Fast, consistent, no separate CSS files to manage |
| **shadcn/ui** | Component source you _own_ | Components are copied into your code, open any layer and edit it, like an unlocked Figma library |

## Run it

```bash
npm run dev
```

Then open the URL it prints (usually http://localhost:3000). Three pages:

- **`/`**, the landing page (all marketing sections assembled)
- **`/product`**, the product detail page (PDP)
- **`/system`**, the component showcase (every building block in one scroll) ← **start here**

## How it's organized

Think of it in three layers, smallest to largest:

```
src/
├─ app/                      ← the actual pages
│  ├─ page.tsx               landing page
│  ├─ product/page.tsx       product detail page
│  ├─ system/page.tsx        component showcase
│  ├─ layout.tsx             fonts (Fraunces + Inter) + global setup
│  └─ globals.css            ⭐ ALL brand tokens live here (colors, radius)
│
├─ components/
│  ├─ ui/                    shadcn primitives you own (button, accordion…)
│  ├─ brand/                 ← brand atoms (Card, Pill, Stars, Logo, type…)
│  ├─ sections/              landing-page sections (Hero, Reviews, FAQ…)
│  └─ pdp/                   product-page sections (BuyBox, Gallery…)
│
└─ lib/
   └─ content.ts             ⭐ ALL copy & product data (edit text here)
```

**Two files you'll touch most:**

1. **`src/app/globals.css`**, change a brand color in one place and it updates
   everywhere. (This is your "brand layer", reskin here later.)
2. **`src/lib/content.ts`**, change headlines, prices, reviews, FAQ, ingredients.

## Brand colors (use as Tailwind classes)

`bg-bone` `bg-surface` `text-ink` `text-ink-2` `text-ink-3` `bg-green`
`text-green` `bg-green-mist` `bg-green-hl` `text-berry` `border-hair`

## Add another shadcn component later

```bash
npx shadcn@latest add tooltip   # e.g. add a tooltip; it lands in src/components/ui/
```

## Deploy (when ready)

Push to GitHub, then import the repo on [vercel.com](https://vercel.com). Free.
