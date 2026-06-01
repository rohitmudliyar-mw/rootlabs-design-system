import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";

import {
  Container,
  Eyebrow,
  Display,
  SectionTitle,
  Lede,
  Label,
  Card,
} from "@/components/brand";
import { DocsHeader } from "@/components/guide/docs-header";
import { DocsFooter } from "@/components/guide/docs-footer";
import { CodeBlock } from "@/components/guide/code-block";

export const metadata = {
  title: "Installation — Root Labs Design System",
  description:
    "How to clone, run, and build with the Root Labs design system.",
};

const REPO = "https://github.com/rohitmudliyar-mw/rootlabs-design-system";

function Step({
  no,
  title,
  children,
}: {
  no: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24 border-t border-hair py-10 first:border-t-0">
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-[22px] leading-none text-green">
          {no}
        </span>
        <SectionTitle as="h2" className="text-[clamp(22px,4vw,30px)]">
          {title}
        </SectionTitle>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-bone">
      <DocsHeader />

      {/* Hero */}
      <Container size="wide" className="py-14 lg:py-20">
        <Eyebrow tone="green">Documentation</Eyebrow>
        <Display className="mt-5 max-w-[16ch]">Installation</Display>
        <Lede className="mt-5">
          Get the Root Labs design system running locally in a few minutes, then
          build with the components and tokens. Everything lives in one Next.js
          project you own.
        </Lede>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={REPO}
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-full bg-green px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-green-deep"
          >
            View the GitHub repo <ArrowUpRight className="size-4" />
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/85 px-5 py-2.5 text-[14px] font-semibold text-ink hover:bg-ink hover:text-white"
          >
            Browse components
          </Link>
        </div>
      </Container>

      {/* Steps */}
      <Container size="wide" className="pb-24">
        <div className="lg:grid lg:grid-cols-[210px_1fr] lg:gap-14">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                On this page
              </p>
              {[
                "Requirements",
                "Get the code",
                "Install",
                "Run it",
                "Project structure",
                "Use a component",
                "Use brand tokens",
                "Add components",
                "Deploy",
                "Files for AI tools",
                "Update & ship",
              ].map((t) => (
                <p key={t} className="text-[14.5px] text-ink-2">
                  {t}
                </p>
              ))}
            </nav>
          </aside>

          <div className="max-w-[760px]">
            <Step no="01" title="Requirements">
              <Lede className="text-[16px]">
                You need <strong className="text-ink">Node.js 20 or newer</strong>{" "}
                and npm (npm ships with Node). Check what you have:
              </Lede>
              <CodeBlock label="Terminal" className="mt-4">
                node -v{"\n"}npm -v
              </CodeBlock>
              <p className="mt-3 text-[14px] text-ink-3">
                No Node yet? Install it from nodejs.org (pick the LTS version).
              </p>
            </Step>

            <Step no="02" title="Get the code">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                Clone the repository and move into the folder.
              </p>
              <CodeBlock label="Terminal" className="mt-4">
                git clone {REPO}.git{"\n"}cd rootlabs-design-system
              </CodeBlock>
            </Step>

            <Step no="03" title="Install dependencies">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                This downloads Next.js, Tailwind, and the component libraries
                into a local <code className="rounded bg-bone-2 px-1.5 py-0.5 text-[13px]">node_modules</code> folder.
              </p>
              <CodeBlock label="Terminal" className="mt-4">
                npm install
              </CodeBlock>
            </Step>

            <Step no="04" title="Run it">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                Start the dev server, then open the URL it prints (usually{" "}
                <code className="rounded bg-bone-2 px-1.5 py-0.5 text-[13px]">
                  http://localhost:3000
                </code>
                ).
              </p>
              <CodeBlock label="Terminal" className="mt-4">
                npm run dev
              </CodeBlock>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["/", "This design guide"],
                  ["/landing", "Sample landing page"],
                  ["/product", "Sample product page"],
                ].map(([path, desc]) => (
                  <Card key={path} className="p-4">
                    <code className="text-[13px] font-semibold text-green">
                      {path}
                    </code>
                    <p className="mt-1 text-[13.5px] text-ink-2">{desc}</p>
                  </Card>
                ))}
              </div>
            </Step>

            <Step no="05" title="Project structure">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                Two files do most of the work: brand tokens live in{" "}
                <code className="rounded bg-bone-2 px-1.5 py-0.5 text-[13px]">
                  globals.css
                </code>
                , and all copy lives in{" "}
                <code className="rounded bg-bone-2 px-1.5 py-0.5 text-[13px]">
                  content.ts
                </code>
                .
              </p>
              <CodeBlock className="mt-4">
                {`src/
├─ app/
│  ├─ page.tsx            this design guide
│  ├─ installation/       this page
│  ├─ landing/            sample landing page
│  ├─ product/            sample product page (PDP)
│  └─ globals.css         ⭐ all brand tokens (the brand layer)
├─ components/
│  ├─ ui/                 shadcn primitives you own
│  ├─ brand/              brand atoms (Card, Pill, Stars, type…)
│  ├─ sections/           landing-page sections
│  └─ pdp/                product-page sections
└─ lib/
   └─ content.ts          ⭐ all copy & product data`}
              </CodeBlock>
            </Step>

            <Step no="06" title="Use a component">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                Import from the brand atoms or UI primitives and compose. Every
                component is mobile-first by default.
              </p>
              <CodeBlock label="example.tsx" className="mt-4">
                {`import { Card, Pill } from "@/components/brand";
import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <Card>
      <Pill tone="green">#1 doctor-recommended</Pill>
      <h3 className="mt-3 font-semibold">Best-absorbed magnesium</h3>
      <Button className="mt-4">Find your sleep plan</Button>
    </Card>
  );
}`}
              </CodeBlock>
            </Step>

            <Step no="07" title="Use brand tokens">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                Tokens are Tailwind classes. Change a value once in{" "}
                <code className="rounded bg-bone-2 px-1.5 py-0.5 text-[13px]">
                  globals.css
                </code>{" "}
                and it updates everywhere.
              </p>
              <CodeBlock label="Available classes" className="mt-4">
                {`bg-bone   bg-surface   text-ink   text-ink-2   text-ink-3
bg-green  text-green   bg-green-mist   bg-green-hl
text-berry   border-hair   font-serif   font-sans`}
              </CodeBlock>
            </Step>

            <Step no="08" title="Add more components">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                Pull any shadcn/ui primitive into the project — it lands in{" "}
                <code className="rounded bg-bone-2 px-1.5 py-0.5 text-[13px]">
                  src/components/ui/
                </code>{" "}
                and is yours to restyle.
              </p>
              <CodeBlock label="Terminal" className="mt-4">
                npx shadcn@latest add tooltip
              </CodeBlock>
            </Step>

            <Step no="09" title="Deploy">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                The site is hosted on Vercel with autodeploy on. Just push to
                GitHub — a GitHub Action builds and deploys to production
                automatically (~1 min):
              </p>
              <CodeBlock label="Terminal" className="mt-4">
                {`git add -A && git commit -m "your change"
git push`}
              </CodeBlock>
              <Card tone="mist" className="mt-4">
                <Label>Live</Label>
                <p className="mt-2 text-[15px] text-ink-2">
                  <a
                    href="https://rootlabs-design-system.vercel.app"
                    target="_blank"
                    className="font-medium text-green hover:underline"
                  >
                    rootlabs-design-system.vercel.app
                  </a>
                </p>
              </Card>
            </Step>

            <Step no="10" title="Files for AI tools">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                The repo ships two machine-readable docs so AI coding tools build
                on-brand:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Card>
                  <div className="flex items-center gap-2">
                    <Terminal className="size-4 text-green" />
                    <code className="text-[14px] font-semibold text-ink">
                      DESIGN.md
                    </code>
                  </div>
                  <p className="mt-2 text-[14px] text-ink-2">
                    Tokens + rationale in the{" "}
                    <a
                      href="https://github.com/google-labs-code/design.md"
                      target="_blank"
                      className="text-green hover:underline"
                    >
                      design.md
                    </a>{" "}
                    format, so agents know the colors, type, and components.
                  </p>
                </Card>
                <Card>
                  <div className="flex items-center gap-2">
                    <Terminal className="size-4 text-green" />
                    <code className="text-[14px] font-semibold text-ink">
                      CLAUDE.md
                    </code>
                  </div>
                  <p className="mt-2 text-[14px] text-ink-2">
                    Project guide for Claude Code — stack, structure, commands,
                    and the rules to follow when editing this repo.
                  </p>
                </Card>
              </div>
              <p className="mt-5 text-[14px] text-ink-3">
                Source:{" "}
                <a
                  href={REPO}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-green hover:underline"
                >
                  {REPO.replace("https://", "")} <ArrowUpRight className="size-3.5" />
                </a>
              </p>
            </Step>

            <Step no="11" title="Update & ship">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                The system is DRY, so most changes propagate on their own — edit
                the source once and every page follows.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["Tokens", "src/app/globals.css", "updates every page"],
                  ["Copy", "src/lib/content.ts", "updates landing + product"],
                  ["Components", "src/components/**", "updates every importer"],
                ].map(([k, file, note]) => (
                  <Card key={k} className="p-4">
                    <Label>{k}</Label>
                    <code className="mt-2 block text-[12.5px] text-green">
                      {file}
                    </code>
                    <p className="mt-1 text-[13px] text-ink-2">{note}</p>
                  </Card>
                ))}
              </div>
              <p className="mt-5 text-[16px] leading-[1.6] text-ink-2">
                When you change a token, also mirror it in{" "}
                <code className="rounded bg-bone-2 px-1.5 py-0.5 text-[13px]">
                  DESIGN.md
                </code>
                . Then build, commit, and push in one command — autodeploy takes
                it to production:
              </p>
              <CodeBlock label="Terminal" className="mt-4">
                npm run ship &quot;describe what you changed&quot;
              </CodeBlock>
              <p className="mt-3 text-[14px] text-ink-3">
                If the build fails, nothing is pushed. CI also builds on every
                push. Full details in{" "}
                <code className="rounded bg-bone-2 px-1.5 py-0.5 text-[13px]">
                  WORKFLOW.md
                </code>
                .
              </p>
            </Step>
          </div>
        </div>
      </Container>

      <DocsFooter />
    </div>
  );
}
