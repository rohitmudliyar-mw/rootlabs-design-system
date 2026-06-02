import { Container, Section, Eyebrow, SectionTitle, Pill } from "@/components/brand";
import { reasons } from "@/lib/content";

/**
 * BenefitsGrid, the 4-up benefit columns with attribute badges underneath
 * (the reference layout's benefits section). Headline + short text + two tags each.
 */
const tags = [
  ["Liposomal", "~17% absorbed"],
  ["KSM-66", "Clinical dose"],
  ["No sugar", "Added fibre"],
  ["7× certified", "Batch tested"],
];

export function BenefitsGrid() {
  return (
    <Section tone="surface" divider className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-[34ch]">
          <Eyebrow tone="green">Why it works</Eyebrow>
          <SectionTitle className="mt-4">
            Four reasons it earns a place on your nightstand.
          </SectionTitle>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div key={r.title} className="border-t-2 border-ink pt-5">
              <h3 className="font-serif text-[20px] leading-tight text-ink">
                {r.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.55] text-ink-2">
                {r.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags[i].map((t) => (
                  <Pill key={t} tone="neutral" className="text-[10.5px]">
                    {t}
                  </Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
