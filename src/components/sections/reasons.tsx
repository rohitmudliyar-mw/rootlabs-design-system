import {
  Container,
  Section,
  Eyebrow,
  SectionTitle,
  Lede,
  Card,
} from "@/components/brand";
import { reasons } from "@/lib/content";

export function Reasons() {
  return (
    <Section tone="bone" divider>
      <Container>
        <Eyebrow tone="green">Why we&apos;re different</Eyebrow>
        <SectionTitle className="mt-4 max-w-[18ch]">
          The mechanism is the message.
        </SectionTitle>
        <Lede className="mt-4">
          We compete on how the body absorbs and uses what&apos;s inside — not on
          a single sedating pill. Four reasons to believe.
        </Lede>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Card key={r.title} className="flex flex-col">
              <span className="font-serif text-[34px] leading-none text-green">
                {i + 1}
              </span>
              <h3 className="mt-4 font-sans text-[17px] font-semibold text-ink">
                {r.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-ink-2">
                {r.body}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
