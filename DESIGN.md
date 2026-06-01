---
name: Root Labs — AshwaMag
repo: https://github.com/rohitmudliyar-mw/rootlabs-design-system
live: https://rootlabs-design-system.vercel.app
colors:
  bone: "#f1f3ee"
  bone-2: "#e8ece4"
  surface: "#ffffff"
  white: "#ffffff"
  ink: "#181c19"
  ink-2: "#4e564d"
  ink-3: "#828a7d"
  on-ink: "#eef1ea"
  green: "#33513f"
  green-deep: "#243b2d"
  green-mist: "#e9efe6"
  green-hl: "#cde3b0"
  berry: "#7c2d43"
  berry-mist: "#f4e6e3"
  hair: "#e1e5db"
  hair-soft: "#eaeee3"
  warn: "#b0746c"
typography:
  display:
    fontFamily: Fraunces
    fontSize: 76px
    fontWeight: "380"
    lineHeight: 74px
    letterSpacing: -0.015em
  section-title:
    fontFamily: Fraunces
    fontSize: 44px
    fontWeight: "400"
    lineHeight: 46px
    letterSpacing: -0.01em
  lede:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: "450"
    lineHeight: 32px
  body:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: "450"
    lineHeight: 28px
  card-title:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: "600"
    lineHeight: 24px
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.16em
  eyebrow:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.18em
rounded:
  sm: 0.5rem
  DEFAULT: 0.75rem
  md: 0.625rem
  card: 1.125rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  section: 96px
  gutter: 20px
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "14px 24px"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hair}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  callout:
    backgroundColor: "{colors.green-mist}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  callout-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  pill:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  pill-no:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.warn}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hair}"
    typography: "{typography.body}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
  highlight:
    backgroundColor: "{colors.green-hl}"
---

## Brand & Style

Root Labs is a doctor-led nutrition house. This design system is demonstrated with
its lead brand, **AshwaMag** — a liposomal magnesium + ashwagandha sleep gummy whose
promise is _"Rested, not sedated."_

The style is **clinical, calm, and editorial**. It reads like a trusted clinician who
has read every study but won't lecture you: restrained, evidence-forward, premium
through restraint rather than decoration. Cool "bone" canvases, a single deep clinical
green, generous whitespace, and a warm optical serif do the heavy lifting. Avoid hype,
fear, and sedative tropes in both copy and imagery.

> Source repo: https://github.com/rohitmudliyar-mw/rootlabs-design-system ·
> Live: https://rootlabs-design-system.vercel.app

## Colors

The palette is led by one deep clinical **green** (`#33513f`) — the lead color for CTAs,
marks, numerals, and proof. A cool **bone** canvas (`#f1f3ee`) and **ink** charcoal text
(`#181c19`) carry most surfaces.

- **Green** — the lead. Primary actions, active states, key numerals, and proof points.
- **Green mist / green highlighter** — soft tints for callouts; the highlighter (`#cde3b0`)
  marks exactly one phrase at a time and is never a background fill.
- **Berry** (`#7c2d43`) — the *product* color. Reserved for the gummy, the science, and the
  "Mag" in the wordmark. Keep it rare so it stays meaningful.
- **Ink / Ink-2 / Ink-3** — primary, secondary, and muted text on light surfaces.
- **Hair** (`#e1e5db`) — hairline borders and dividers. Borders are thin and quiet.

White-on-green and ink-on-bone both pass WCAG AA. Never put green-highlighter text on bone.

## Typography

Two families. **Fraunces** (an optical serif with warmth and authority) is used large,
light, and sparingly for display and section headlines. **Inter** handles all body, UI,
and labels — clean, neutral, clinical.

- **Display / Section titles:** Fraunces, light weights (~380–400), tight tracking. Hierarchy
  comes from size, not heavy weight.
- **Body / Lede:** Inter at 450 with generous line height (~1.6) for the premium, readable feel.
- **Labels / Eyebrows:** Inter 600, uppercase, wide tracking (0.16–0.18em), 11–12px.

Body text never drops below 16px on web.

## Layout & Spacing

**Mobile-first, always** — design for the small screen first, then enhance upward. Spacing
follows a 4px rhythm; sections breathe with large vertical separation (`section` = 96px).

- **Containers:** centered with a max width (~1120px for content, ~760px for prose), with a
  fluid gutter (`clamp(20px, 5vw, 48px)`).
- **Grids:** stack to a single column on mobile; expand to 2–4 columns at `sm`/`lg`.
- **Tap targets:** interactive elements are at least 44×44px.

## Elevation & Depth

Depth is expressed through **tonal layers and hairlines**, not heavy shadow. Premium reads
as restraint.

- **Surfaces:** the bone canvas sits lowest; cards sit one step up on pure white with a single
  hairline border.
- **Shadows:** almost invisible. Use only the faintest ambient shadow, if any.
- **Dark callouts:** the ink surface is used sparingly to spotlight a single key statement
  (e.g. the cortisol–magnesium mechanism).

## Shapes

The shape language is **soft but clinical**.

- **Buttons:** full pills (`rounded-full`) — friendly and unmistakably tappable.
- **Cards & callouts:** an 18px radius (`rounded.card`) with one hairline border.
- **Inputs:** a smaller `DEFAULT` (12px) radius to stay precise.
- **Icons:** quiet line icons (lucide) at 16–20px; rounded caps to harmonize.

## Components

### Buttons

`button-primary` is the green pill with white text — the clinical lead CTA; it darkens to
`green-deep` on hover. `button-ghost` is the outlined secondary action. Motion is calm:
~150–250ms ease, no bounce.

### Cards & Callouts

`card` is the workhorse surface (white, hairline, 18px). `callout` is a soft green-mist
panel for quotes and key statements; `callout-dark` (ink) spotlights a single mechanism or
promise. Never nest cards inside cards.

### Pills & Inputs

`pill` is an uppercase tag where color carries meaning — green for proof/affirmation,
`pill-no` (clay `warn`) for the anti-pattern column. `input-field` uses the quiet surface
with a hairline border and `DEFAULT` radius.

### Highlight

The `highlight` token is a green marker stroke that sits on the baseline of **one** phrase
that carries a headline's meaning. It is a highlighter, never a fill, and the underlying
text must read fine in plain black.

## Do's and Don'ts

**Do**
- Lead with the green; let it carry actions and proof.
- Use the serif large, light, and sparingly.
- Keep berry rare and tied to the product.
- Cite the dose and the study next to any claim.
- Design mobile-first and meet WCAG AA.

**Don't**
- Don't use hype, fear, or "knock-you-out"/sedative/miracle language.
- Don't use the highlighter as a background or on more than one phrase.
- Don't spread berry across the UI — it stops meaning anything.
- Don't add heavy shadows, gradients, or glow; restraint is the brand.
- Don't rely on color alone to convey meaning.
