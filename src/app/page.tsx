import { ArrowRight, Check, X } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Label as FieldLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { PhoneFrame } from "@/components/guide/phone-frame";
import { DocsHeader } from "@/components/guide/docs-header";
import { DocsFooter } from "@/components/guide/docs-footer";
import { productImages } from "@/lib/content";

/* ---------- data ---------- */

const colors = [
  { name: "Bone", hex: "#F1F3EE", use: "Primary canvas", cls: "bg-bone" },
  { name: "Bone 2", hex: "#E8ECE4", use: "Recessed", cls: "bg-bone-2" },
  { name: "Surface", hex: "#FFFFFF", use: "Cards", cls: "bg-surface border border-hair" },
  { name: "Ink", hex: "#181C19", use: "Headlines", cls: "bg-ink" },
  { name: "Ink 2", hex: "#4E564D", use: "Body", cls: "bg-ink-2" },
  { name: "Ink 3", hex: "#828A7D", use: "Muted", cls: "bg-ink-3" },
  { name: "Green", hex: "#33513F", use: "The lead · CTAs", cls: "bg-green" },
  { name: "Green deep", hex: "#243B2D", use: "Hover", cls: "bg-green-deep" },
  { name: "Green mist", hex: "#E9EFE6", use: "Soft tint", cls: "bg-green-mist" },
  { name: "Green hl", hex: "#CDE3B0", use: "Highlighter", cls: "bg-green-hl" },
  { name: "Berry", hex: "#7C2D43", use: "Product accent", cls: "bg-berry" },
  { name: "Hair", hex: "#E1E5DB", use: "Borders", cls: "bg-hair" },
];

const voiceAlways = ["Credible", "Calm", "Evidence-forward", "Honest", "Supportive"];
const voiceNever = [
  "Hype-driven",
  "Fear-mongering",
  "Sedative language",
  "Overclaiming",
  "Condescending",
];

const nav = [
  {
    group: "Brand",
    items: [
      { label: "Strategy", href: "#strategy" },
      { label: "Voice", href: "#voice" },
    ],
  },
  {
    group: "Foundations",
    items: [
      { label: "Color", href: "#color" },
      { label: "Typography", href: "#type" },
      { label: "Radius & spacing", href: "#radius" },
    ],
  },
  {
    group: "Components",
    items: [
      { label: "Buttons", href: "#buttons" },
      { label: "Pills & ratings", href: "#pills" },
      { label: "Cards", href: "#cards" },
      { label: "Forms", href: "#forms" },
      { label: "Accordion", href: "#accordion" },
      { label: "Tabs", href: "#tabs" },
      { label: "Logo", href: "#logo" },
    ],
  },
  {
    group: "Examples",
    items: [{ label: "Landing & product", href: "#examples" }],
  },
];

/* ---------- helpers ---------- */

function GuideSection({
  id,
  no,
  title,
  intro,
  children,
}: {
  id: string;
  no: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-hair py-12 first:border-t-0">
      <h2 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-green">
        {no} · {title}
      </h2>
      {intro && <Lede className="mt-3">{intro}</Lede>}
      <div className="mt-7">{children}</div>
    </section>
  );
}

/* ---------- page ---------- */

export default function DesignGuide() {
  return (
    <div className="min-h-screen bg-bone">
      <DocsHeader />

      {/* Hero */}
      <Container size="wide" className="py-16 lg:py-24">
        <Eyebrow tone="green">Documentation</Eyebrow>
        <Display className="mt-6 max-w-[18ch]">
          Root Labs Design System
        </Display>
        <Lede className="mt-6">
          One place for the brand, the foundations, every component, and two
          example layouts. Mobile-first, accessible, and built to keep
          extending.
        </Lede>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button render={<a href="#color" />} size="lg">
            Explore foundations <ArrowRight />
          </Button>
          <Button render={<a href="#examples" />} variant="ghost" size="lg">
            See example layouts
          </Button>
        </div>

        {/* meta strip */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-hair bg-hair sm:grid-cols-3">
          {[
            ["Stack", "Next.js · Tailwind · shadcn/ui"],
            ["Approach", "Mobile-first, always"],
            ["Standards", "WCAG AA · keyboard-first"],
          ].map(([k, v]) => (
            <div key={k} className="bg-surface p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                {k}
              </div>
              <div className="mt-1.5 text-[15px] font-medium text-ink">{v}</div>
            </div>
          ))}
        </div>
      </Container>

      {/* Body: sidebar + content */}
      <Container size="wide" className="pb-24">
        <div className="lg:grid lg:grid-cols-[210px_1fr] lg:gap-14">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-6">
              {nav.map((g) => (
                <div key={g.group}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                    {g.group}
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <a
                          href={it.href}
                          className="text-[14.5px] text-ink-2 transition-colors hover:text-green"
                        >
                          {it.label}
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
            {/* BRAND, STRATEGY */}
            <GuideSection
              id="strategy"
              no="01"
              title="Strategy"
              intro="The one idea every page protects. Restoration over sedation. Evidence over hype."
            >
              <Callout>
                <Label>Core narrative</Label>
                <p className="mt-3 font-serif text-[clamp(20px,3.4vw,28px)] italic leading-[1.3] text-ink">
                  Most magnesium barely absorbs. Most sleep aids just sedate.
                  AshwaMag is the best-absorbed magnesium, built for one thing:{" "}
                  <Highlight>deep sleep</Highlight>. We restore it. We never
                  sedate.
                </p>
              </Callout>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Card>
                  <Label>Mission</Label>
                  <p className="mt-2.5 text-[15px] text-ink-2">
                    Help women 35+ get deep, continuous sleep by fixing the
                    chemistry behind 3 a.m. wakeups, not by sedating them.
                  </p>
                </Card>
                <Card>
                  <Label>Archetype</Label>
                  <p className="mt-2.5 text-[15px] text-ink-2">
                    The Sage with a Caregiver heart, a trusted clinician who has
                    read every study but will not lecture you.
                  </p>
                </Card>
              </div>
            </GuideSection>

            {/* BRAND, VOICE */}
            <GuideSection
              id="voice"
              no="02"
              title="Voice"
              intro="Voice is constant; tone flexes by context. We sound like a smart sleep doctor who won't lecture you."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green bg-green-mist p-6">
                  <Pill tone="yes">Always</Pill>
                  <ul className="mt-4">
                    {voiceAlways.map((v) => (
                      <li
                        key={v}
                        className="flex gap-2.5 border-b border-black/[0.06] py-2.5 text-[15px] text-ink-2 last:border-b-0"
                      >
                        <Check className="mt-0.5 size-4 flex-none text-green" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-[#dce0d5] bg-[#f4f6f1] p-6">
                  <Pill tone="no">Never</Pill>
                  <ul className="mt-4">
                    {voiceNever.map((v) => (
                      <li
                        key={v}
                        className="flex gap-2.5 border-b border-black/[0.05] py-2.5 text-[15px] text-ink-2 last:border-b-0"
                      >
                        <X className="mt-0.5 size-4 flex-none text-warn" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Callout className="mt-4">
                <Label>Tone of voice</Label>
                <p className="mt-3 text-[16px] leading-[1.6] text-ink">
                  Write like a person, not a brand. Warm, plain, and human. Short
                  sentences. Say it the way you&apos;d say it to a friend who
                  reads labels.
                </p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <Pill tone="yes">Do</Pill>
                    <ul className="mt-3 space-y-2 text-[15px] text-ink-2">
                      <li>Use commas, periods, and parentheses for pauses.</li>
                      <li>Plain words a tired reader takes in at a glance.</li>
                      <li>
                        Be specific and honest: name the dose, the study, the
                        timeline.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Pill tone="no">Don&apos;t</Pill>
                    <ul className="mt-3 space-y-2 text-[15px] text-ink-2">
                      <li>No em dashes. Rewrite the sentence instead.</li>
                      <li>
                        No AI filler: &ldquo;elevate&rdquo;, &ldquo;unlock&rdquo;,
                        &ldquo;seamless&rdquo;, &ldquo;delve&rdquo;.
                      </li>
                      <li>No hype, buzzwords, or copy that sounds machine-written.</li>
                    </ul>
                  </div>
                </div>
              </Callout>
            </GuideSection>

            {/* FOUNDATIONS, COLOR */}
            <GuideSection
              id="color"
              no="03"
              title="Color"
              intro="A restrained palette led by one clinical green. Berry belongs to the product and appears only with intent."
            >
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {colors.map((c) => (
                  <div
                    key={c.name}
                    className="overflow-hidden rounded-xl border border-hair bg-surface"
                  >
                    <div className={`h-16 ${c.cls}`} />
                    <div className="p-3">
                      <div className="text-[14px] font-semibold text-ink">
                        {c.name}
                      </div>
                      <div className="text-[12px] tracking-[0.04em] text-ink-3">
                        {c.hex}
                      </div>
                      <div className="mt-1 text-[12px] text-ink-2">{c.use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </GuideSection>

            {/* FOUNDATIONS, TYPE */}
            <GuideSection
              id="type"
              no="04"
              title="Typography"
              intro="Fraunces for display, Inter for everything functional. Hierarchy comes from size and spacing, not decoration."
            >
              <div className="space-y-6">
                <div className="rounded-xl border border-hair bg-surface p-6">
                  <Label>Display · Fraunces</Label>
                  <Display className="mt-3">Rested, not sedated.</Display>
                </div>
                <div className="rounded-xl border border-hair bg-surface p-6">
                  <Label>Section title · Fraunces</Label>
                  <SectionTitle className="mt-3">
                    The mechanism is the message.
                  </SectionTitle>
                </div>
                <div className="rounded-xl border border-hair bg-surface p-6">
                  <Label>Lede & body · Inter</Label>
                  <Lede className="mt-3">
                    A doctor-led sleep formula, built for women 35+.
                  </Lede>
                </div>
              </div>
            </GuideSection>

            {/* FOUNDATIONS, RADIUS */}
            <GuideSection
              id="radius"
              no="05"
              title="Radius & spacing"
              intro="Soft but clinical. Buttons are full pills; cards use an 18px radius and a single hairline border."
            >
              <div className="flex flex-wrap items-end gap-5">
                {[
                  ["Small", "rounded-md", "h-16 w-16"],
                  ["Card · 18px", "rounded-xl", "h-20 w-20"],
                  ["Pill", "rounded-full", "h-16 w-28"],
                ].map(([label, r, size]) => (
                  <div key={label as string} className="text-center">
                    <div
                      className={`${size} ${r} border border-hair bg-surface`}
                    />
                    <div className="mt-2 text-[12px] text-ink-3">{label}</div>
                  </div>
                ))}
              </div>
            </GuideSection>

            {/* COMPONENTS, BUTTONS */}
            <GuideSection
              id="buttons"
              no="06"
              title="Buttons"
              intro="Green pill is the primary CTA; ghost is the secondary action. Every size meets the 44px tap target."
            >
              <div className="space-y-5 rounded-xl border border-hair bg-surface p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Button>
                    Find your sleep plan <ArrowRight />
                  </Button>
                  <Button variant="ghost">See the science</Button>
                  <Button variant="soft">Learn more</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="link">Text link</Button>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </GuideSection>

            {/* COMPONENTS, PILLS */}
            <GuideSection id="pills" no="07" title="Pills & ratings">
              <div className="space-y-5 rounded-xl border border-hair bg-surface p-6">
                <div className="flex flex-wrap gap-2">
                  <Pill tone="green">#1 doctor-recommended</Pill>
                  <Pill tone="yes">Yes</Pill>
                  <Pill tone="no">Never</Pill>
                  <Pill tone="neutral">Third-party tested</Pill>
                  <Pill tone="berry">Product</Pill>
                </div>
                <div className="flex items-center gap-5">
                  <Stars rating={5} />
                  <Stars rating={4.5} />
                  <Stars rating={3} />
                </div>
              </div>
            </GuideSection>

            {/* COMPONENTS, CARDS */}
            <GuideSection id="cards" no="08" title="Cards & callouts">
              <div className="grid gap-4 lg:grid-cols-3">
                <Card>
                  <Label>Reason to believe</Label>
                  <h3 className="mt-3 text-[17px] font-semibold text-ink">
                    Best-absorbed magnesium
                  </h3>
                  <p className="mt-2 text-[15px] text-ink-2">
                    A liposomal lipid layer carries magnesium glycinate past
                    stomach acid for ~17% better absorption.
                  </p>
                </Card>
                <Callout>
                  <Label>Soft callout</Label>
                  <p className="mt-3 font-serif text-[19px] italic leading-[1.3] text-ink">
                    We restore deep sleep. We never sedate.
                  </p>
                </Callout>
                <Callout tone="ink">
                  <Label className="!text-green-hl">Dark callout</Label>
                  <p className="mt-3 text-[15px] text-[#eef1ea]">
                    Stress burns through magnesium and fragments deep sleep.
                    AshwaMag loosens the loop.
                  </p>
                </Callout>
              </div>
            </GuideSection>

            {/* COMPONENTS, FORMS */}
            <GuideSection id="forms" no="09" title="Form controls">
              <div className="grid max-w-md gap-6 rounded-xl border border-hair bg-surface p-6">
                <div className="grid gap-2">
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="grid gap-3">
                  <Label>Choose a plan</Label>
                  <RadioGroup defaultValue="sub" className="gap-3">
                    <label className="flex items-center gap-3 rounded-xl border border-hair bg-bone p-4">
                      <RadioGroupItem value="sub" />
                      <span className="text-[15px] text-ink">
                        Subscribe &amp; save
                      </span>
                    </label>
                    <label className="flex items-center gap-3 rounded-xl border border-hair bg-bone p-4">
                      <RadioGroupItem value="once" />
                      <span className="text-[15px] text-ink">One-time</span>
                    </label>
                  </RadioGroup>
                </div>
              </div>
            </GuideSection>

            {/* COMPONENTS, ACCORDION */}
            <GuideSection id="accordion" no="10" title="Accordion">
              <div className="max-w-2xl rounded-xl border border-hair bg-surface px-6">
                <Accordion>
                  {[
                    [
                      "When will I feel a difference?",
                      "Meaningful shifts in deep sleep land between days 18 and 28.",
                    ],
                    [
                      "Will it make me groggy?",
                      "No melatonin, no sedatives, you wake rested, not knocked out.",
                    ],
                  ].map(([q, a], i) => (
                    <AccordionItem
                      key={q}
                      value={i}
                      className="border-b border-hair last:border-b-0"
                    >
                      <AccordionTrigger className="py-4 font-serif text-[18px] text-ink hover:no-underline">
                        {q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[15px] text-ink-2">
                        {a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </GuideSection>

            {/* COMPONENTS, TABS */}
            <GuideSection id="tabs" no="11" title="Tabs">
              <div className="max-w-2xl rounded-xl border border-hair bg-surface p-6">
                <Tabs defaultValue="a">
                  <TabsList
                    variant="line"
                    className="h-auto gap-3 border-b border-hair"
                  >
                    <TabsTrigger
                      value="a"
                      className="h-auto px-1 pb-3 text-[15px] data-active:text-green"
                    >
                      Supplement Facts
                    </TabsTrigger>
                    <TabsTrigger
                      value="b"
                      className="h-auto px-1 pb-3 text-[15px] data-active:text-green"
                    >
                      How to use
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="a" className="pt-5 text-[15px] text-ink-2">
                    675mg magnesium glycinate · 200mg KSM-66 · 26mg L-theanine.
                  </TabsContent>
                  <TabsContent value="b" className="pt-5 text-[15px] text-ink-2">
                    Two gummies nightly, ~30 minutes before bed.
                  </TabsContent>
                </Tabs>
              </div>
            </GuideSection>

            {/* COMPONENTS, LOGO & IMAGERY */}
            <GuideSection id="logo" no="12" title="Logo & imagery">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid place-items-center rounded-xl border border-hair bg-surface p-12">
                  <BrandLogo surface="light" height={72} />
                </div>
                <div className="grid place-items-center rounded-xl border border-ink bg-ink p-12">
                  <BrandLogo surface="dark" height={72} />
                </div>
              </div>
              <Label className="mt-7 block">Imagery, real, clinical, calm</Label>
              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                {productImages.map((img) => (
                  <ImageFrame
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    ratio="portrait"
                    sizes="(min-width:640px) 33vw, 100vw"
                  />
                ))}
              </div>
            </GuideSection>

            {/* EXAMPLES */}
            <GuideSection
              id="examples"
              no="13"
              title="Example layouts"
              intro="The components composed into real, mobile-first pages. Shown live below, tap to open the full page."
            >
              <div className="grid justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <PhoneFrame
                  src="/landing"
                  title="Landing page"
                  href="/landing"
                />
                <PhoneFrame
                  src="/product"
                  title="Product detail page"
                  href="/product"
                />
                <PhoneFrame
                  src="/product-skeleton"
                  title="Product skeleton"
                  href="/product-skeleton"
                />
              </div>
            </GuideSection>
          </div>
        </div>
      </Container>

      <DocsFooter />
    </div>
  );
}
