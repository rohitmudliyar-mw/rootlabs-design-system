import { ArrowRight } from "lucide-react";

import {
  Container,
  Eyebrow,
  Display,
  SectionTitle,
  Lede,
  Label,
  Highlight,
  Card,
  Callout,
  Pill,
  Stars,
  BrandLogo,
  ImageFrame,
} from "@/components/brand";
import { Button } from "@/components/ui/button";
import { DocsHeader } from "@/components/guide/docs-header";
import { DocsFooter } from "@/components/guide/docs-footer";
import { PropTable, type PropRow } from "@/components/guide/prop-table";
import { productImages } from "@/lib/content";

export const metadata = {
  title: "Components — Root Labs Design System",
  description: "API reference for every component, with prop tables.",
};

/* ---------- reference block ---------- */

function Ref({
  id,
  name,
  extendsEl,
  description,
  example,
  rows,
  note,
}: {
  id: string;
  name: string;
  extendsEl?: string;
  description: string;
  example?: React.ReactNode;
  rows?: PropRow[];
  note?: string;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-hair py-10 first:border-t-0"
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <code className="font-mono text-[18px] font-semibold text-ink">
          {name}
        </code>
        {extendsEl && (
          <span className="text-[12px] text-ink-3">
            extends <code className="font-mono">{extendsEl}</code> props
          </span>
        )}
      </div>
      <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.55] text-ink-2">
        {description}
      </p>
      {example && (
        <div className="mt-5 rounded-xl border border-hair bg-surface p-6">
          {example}
        </div>
      )}
      {rows && rows.length > 0 && (
        <div className="mt-4">
          <PropTable rows={rows} />
        </div>
      )}
      {note && <p className="mt-3 text-[13px] text-ink-3">{note}</p>}
    </section>
  );
}

function Group({ title }: { title: string }) {
  return (
    <h2 className="mt-14 border-t border-hair pt-10 font-serif text-[26px] text-ink first:mt-0 first:border-t-0 first:pt-0">
      {title}
    </h2>
  );
}

const nav = [
  { group: "Layout", items: ["Container", "Section"] },
  {
    group: "Typography",
    items: ["Display", "SectionTitle", "Lede", "Eyebrow", "Label", "Highlight"],
  },
  { group: "Surfaces", items: ["Card", "Callout"] },
  { group: "Elements", items: ["Button", "Pill", "Stars"] },
  { group: "Media", items: ["BrandLogo", "ImageFrame"] },
  { group: "Primitives", items: ["shadcn / Base UI"] },
];

const elementProps =
  "All standard element attributes (className, children, id, …) are forwarded.";

export default function ComponentsReference() {
  return (
    <div className="min-h-screen bg-bone">
      <DocsHeader />

      <Container size="wide" className="py-14 lg:py-20">
        <Eyebrow tone="green">Documentation</Eyebrow>
        <Display className="mt-5 max-w-[14ch]">Components</Display>
        <Lede className="mt-5">
          The API for every component in the system — props, types, defaults, and
          a live example. Import brand atoms from{" "}
          <code className="rounded bg-bone-2 px-1.5 py-0.5 text-[13.5px]">
            @/components/brand
          </code>{" "}
          and primitives from{" "}
          <code className="rounded bg-bone-2 px-1.5 py-0.5 text-[13.5px]">
            @/components/ui
          </code>
          .
        </Lede>
      </Container>

      <Container size="wide" className="pb-24">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-14">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-5">
              {nav.map((g) => (
                <div key={g.group}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                    {g.group}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {g.items.map((it) => (
                      <li key={it}>
                        <a
                          href={`#${it.toLowerCase().replace(/[^a-z]/g, "")}`}
                          className="font-mono text-[13.5px] text-ink-2 transition-colors hover:text-green"
                        >
                          {it}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div>
            {/* LAYOUT */}
            <Group title="Layout" />
            <Ref
              id="container"
              name="<Container>"
              extendsEl="<div>"
              description="Centers content and applies the responsive brand gutter. Wrap every section's content in one."
              rows={[
                {
                  prop: "size",
                  type: '"prose" | "default" | "wide"',
                  default: '"default"',
                  desc: "Max reading width: 760px / 1120px / 1280px.",
                },
              ]}
              note={elementProps}
            />
            <Ref
              id="section"
              name="<Section>"
              extendsEl="<section>"
              description="A vertical block with consistent top/bottom rhythm and a background tone."
              rows={[
                {
                  prop: "tone",
                  type: '"bone" | "surface" | "recessed" | "mist" | "ink"',
                  default: '"bone"',
                  desc: "Background surface for the section.",
                },
                {
                  prop: "divider",
                  type: "boolean",
                  default: "false",
                  desc: "Adds a hairline border at the top.",
                },
              ]}
              note={elementProps}
            />

            {/* TYPOGRAPHY */}
            <Group title="Typography" />
            <Ref
              id="display"
              name="<Display>"
              extendsEl="<h1>"
              description="The large Fraunces hero headline. Use once per page, large and sparing."
              example={<Display className="!text-[40px]">Rested, not sedated.</Display>}
              note={`No custom props. ${elementProps}`}
            />
            <Ref
              id="sectiontitle"
              name="<SectionTitle>"
              extendsEl="<h2>"
              description="The standard Fraunces section headline."
              example={<SectionTitle>The mechanism is the message.</SectionTitle>}
              rows={[
                {
                  prop: "as",
                  type: '"h2" | "h3"',
                  default: '"h2"',
                  desc: "Heading level to render (semantics).",
                },
              ]}
            />
            <Ref
              id="lede"
              name="<Lede>"
              extendsEl="<p>"
              description="The supporting paragraph under a headline. Caps its measure at ~56 characters."
              example={
                <Lede>A doctor-led sleep formula, built for women 35+.</Lede>
              }
              note={`No custom props. ${elementProps}`}
            />
            <Ref
              id="eyebrow"
              name="<Eyebrow>"
              extendsEl="<p>"
              description="The small uppercase label above a headline."
              example={
                <div className="space-y-2">
                  <Eyebrow>Why we&apos;re different</Eyebrow>
                  <Eyebrow tone="green">The Science</Eyebrow>
                </div>
              }
              rows={[
                {
                  prop: "tone",
                  type: '"muted" | "green"',
                  default: '"muted"',
                  desc: "Muted grey, or the clinical green marker.",
                },
              ]}
            />
            <Ref
              id="label"
              name="<Label>"
              extendsEl="<span>"
              description="Uppercase micro-label used inside cards and callouts."
              example={<Label>Reason to believe</Label>}
              note={`No custom props. ${elementProps}`}
            />
            <Ref
              id="highlight"
              name="<Highlight>"
              extendsEl="<span>"
              description="The green marker stroke. Wrap exactly one phrase at a time — it is a highlighter, never a fill."
              example={
                <p className="text-[18px] text-ink">
                  We restore <Highlight>deep sleep</Highlight>.
                </p>
              }
              note={`No custom props. ${elementProps}`}
            />

            {/* SURFACES */}
            <Group title="Surfaces" />
            <Ref
              id="card"
              name="<Card>"
              extendsEl="<div>"
              description="The workhorse surface: 18px radius, single hairline border, near-invisible shadow."
              example={
                <div className="grid gap-4 sm:grid-cols-3">
                  <Card>
                    <Label>Surface</Label>
                    <p className="mt-2 text-[14px] text-ink-2">Default card.</p>
                  </Card>
                  <Card tone="mist">
                    <Label>Mist</Label>
                    <p className="mt-2 text-[14px] text-ink-2">Soft tint.</p>
                  </Card>
                  <Card tone="ink">
                    <Label className="!text-green-hl">Ink</Label>
                    <p className="mt-2 text-[14px] text-[#eef1ea]">Dark.</p>
                  </Card>
                </div>
              }
              rows={[
                {
                  prop: "tone",
                  type: '"surface" | "mist" | "ink" | "berry"',
                  default: '"surface"',
                  desc: "Background and border treatment.",
                },
              ]}
              note={elementProps}
            />
            <Ref
              id="callout"
              name="<Callout>"
              extendsEl="<div>"
              description="A soft tinted panel for quotes and key statements; the ink tone spotlights a single idea."
              example={
                <Callout>
                  <Label>Core narrative</Label>
                  <p className="mt-2 font-serif text-[19px] italic text-ink">
                    We restore deep sleep. We never sedate.
                  </p>
                </Callout>
              }
              rows={[
                {
                  prop: "tone",
                  type: '"mist" | "ink"',
                  default: '"mist"',
                  desc: "Soft green tint, or dark ink spotlight.",
                },
              ]}
              note={elementProps}
            />

            {/* ELEMENTS */}
            <Group title="Elements" />
            <Ref
              id="button"
              name="<Button>"
              extendsEl="Base UI Button"
              description="Pill-shaped action. Green is the primary CTA; ghost is the secondary action. Every size meets the 44px tap target."
              example={
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button>
                      Primary <ArrowRight />
                    </Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="soft">Soft</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
              }
              rows={[
                {
                  prop: "variant",
                  type: '"default" | "ghost" | "soft" | "secondary" | "link"',
                  default: '"default"',
                  desc: "Visual style of the button.",
                },
                {
                  prop: "size",
                  type: '"sm" | "default" | "lg" | "icon"',
                  default: '"default"',
                  desc: "Height and padding. icon is square.",
                },
                {
                  prop: "render",
                  type: "ReactElement",
                  desc: "Render as another element, e.g. render={<Link href />} for navigation.",
                },
              ]}
              note="Also accepts disabled, onClick, and other Base UI Button props."
            />
            <Ref
              id="pill"
              name="<Pill>"
              extendsEl="<span>"
              description="Small uppercase tag where color carries meaning — never decoration."
              example={
                <div className="flex flex-wrap gap-2">
                  <Pill tone="green">#1 doctor-recommended</Pill>
                  <Pill tone="yes">Yes</Pill>
                  <Pill tone="no">Never</Pill>
                  <Pill tone="neutral">Third-party tested</Pill>
                  <Pill tone="berry">Product</Pill>
                </div>
              }
              rows={[
                {
                  prop: "tone",
                  type: '"green" | "yes" | "neutral" | "no" | "berry"',
                  default: '"neutral"',
                  desc: "Color meaning: affirm, neutral, anti-pattern, or product.",
                },
              ]}
              note={elementProps}
            />
            <Ref
              id="stars"
              name="<Stars>"
              description="A rating display in brand green, with partial-fill support."
              example={
                <div className="flex items-center gap-5">
                  <Stars rating={5} size={20} />
                  <Stars rating={4.5} size={20} />
                  <Stars rating={3} size={20} />
                </div>
              }
              rows={[
                {
                  prop: "rating",
                  type: "number",
                  default: "5",
                  desc: "Value from 0–5; supports fractions (e.g. 4.5).",
                },
                {
                  prop: "size",
                  type: "number",
                  default: "16",
                  desc: "Star size in pixels.",
                },
                {
                  prop: "className",
                  type: "string",
                  desc: "Extra classes on the wrapper.",
                },
              ]}
            />

            {/* MEDIA */}
            <Group title="Media" />
            <Ref
              id="brandlogo"
              name="<BrandLogo>"
              description="The Root Labs mark. Picks the green or cream artwork based on the surface it sits on."
              example={
                <div className="flex flex-wrap items-center gap-4">
                  <div className="rounded-xl border border-hair bg-surface p-6">
                    <BrandLogo surface="light" height={44} />
                  </div>
                  <div className="rounded-xl border border-ink bg-ink p-6">
                    <BrandLogo surface="dark" height={44} />
                  </div>
                </div>
              }
              rows={[
                {
                  prop: "surface",
                  type: '"light" | "dark"',
                  default: '"light"',
                  desc: "light → green mark (bone/white bg); dark → cream mark (ink bg).",
                },
                {
                  prop: "height",
                  type: "number",
                  default: "32",
                  desc: "Rendered height in px; width scales automatically.",
                },
                {
                  prop: "priority",
                  type: "boolean",
                  default: "false",
                  desc: "Preload (use only for above-the-fold marks).",
                },
                {
                  prop: "className",
                  type: "string",
                  desc: "Extra classes on the image.",
                },
              ]}
            />
            <Ref
              id="imageframe"
              name="<ImageFrame>"
              description="A fixed-ratio, cover-cropped image in the brand card frame. The shared wrapper for product photography."
              example={
                <div className="grid gap-4 sm:grid-cols-3">
                  {productImages.map((img) => (
                    <ImageFrame
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      ratio="portrait"
                      sizes="(min-width: 640px) 30vw, 100vw"
                    />
                  ))}
                </div>
              }
              rows={[
                {
                  prop: "src",
                  type: "string",
                  desc: "Image path (required).",
                },
                {
                  prop: "alt",
                  type: "string",
                  desc: "Alt text (required).",
                },
                {
                  prop: "ratio",
                  type: '"square" | "portrait" | "wide"',
                  default: '"square"',
                  desc: "Aspect ratio of the frame: 1:1 / 4:5 / 16:10.",
                },
                {
                  prop: "priority",
                  type: "boolean",
                  default: "false",
                  desc: "Preload (use for the LCP image only).",
                },
                {
                  prop: "sizes",
                  type: "string",
                  default: '"100vw"',
                  desc: "Responsive sizes hint for next/image.",
                },
                {
                  prop: "className",
                  type: "string",
                  desc: "Extra classes on the frame.",
                },
              ]}
            />

            {/* PRIMITIVES */}
            <Group title="Primitives" />
            <Ref
              id="shadcnbaseui"
              name="shadcn / Base UI"
              description="Accessible primitives you own, in @/components/ui. They follow the Base UI API (e.g. value / defaultValue / onValueChange) and are styled to the brand. Compose their parts as documented below."
              rows={[
                {
                  prop: "Accordion",
                  type: "Accordion · AccordionItem · AccordionTrigger · AccordionContent",
                  desc: "FAQ / disclosure. Item takes value.",
                },
                {
                  prop: "Tabs",
                  type: "Tabs · TabsList · TabsTrigger · TabsContent",
                  desc: "View switching. Use defaultValue + matching value on each part.",
                },
                {
                  prop: "Sheet",
                  type: "Sheet · SheetTrigger · SheetContent · SheetClose · SheetTitle",
                  desc: "Slide-out panel (mobile nav). side controls the edge.",
                },
                {
                  prop: "RadioGroup",
                  type: "RadioGroup · RadioGroupItem",
                  desc: "Single-choice selection (e.g. plan picker). value / onValueChange.",
                },
                {
                  prop: "Input",
                  type: "Input",
                  desc: "Text field. Standard <input> props.",
                },
                {
                  prop: "Label",
                  type: "Label",
                  desc: "Form label. Pair with htmlFor.",
                },
              ]}
              note="Add more with: npx shadcn@latest add <name>"
            />
          </div>
        </div>
      </Container>

      <DocsFooter />
    </div>
  );
}
