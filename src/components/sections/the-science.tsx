import {
  Container,
  Section,
  SectionNumber,
  SectionTitle,
  Lede,
  Card,
  Callout,
  Label,
} from "@/components/brand";
import { mechanism, ingredients, evidence } from "@/lib/content";

export function TheScience() {
  return (
    <Section id="science" tone="surface" divider>
      <Container>
        <SectionNumber>The Science</SectionNumber>
        <SectionTitle className="mt-4 max-w-[20ch]">
          The mechanism is the message.
        </SectionTitle>
        <Lede className="mt-4">
          Every claim traces back to a dose and a study. When in doubt, we
          explain the biology before the benefit.
        </Lede>

        {/* The cortisol–magnesium loop */}
        <Callout tone="ink" className="mt-10">
          <Label className="!text-green-hl">The cortisol–magnesium loop</Label>
          <p className="mt-3 text-[16px] leading-[1.6] text-[#eef1ea]">
            Stress keeps cortisol elevated into the night, and it can surge
            around 3&nbsp;a.m. That surge burns through magnesium reserves and
            fragments deep sleep. AshwaMag replenishes magnesium so the loop
            loosens and deep sleep returns.
          </p>
        </Callout>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {/* How liposomal delivery works */}
          <Card>
            <Label>How liposomal delivery works</Label>
            <div className="mt-4">
              {mechanism.map((step) => (
                <div
                  key={step.n}
                  className="grid grid-cols-[34px_1fr] gap-4 border-b border-hair py-4 last:border-b-0"
                >
                  <span className="font-serif text-[20px] leading-tight text-green">
                    {step.n}
                  </span>
                  <div>
                    <div className="text-[15.5px] font-semibold text-ink">
                      {step.title}
                    </div>
                    <p className="mt-0.5 text-[15px] text-ink-2">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Actives & clinical dose */}
          <Card>
            <Label>Actives &amp; clinical dose</Label>
            <table className="mt-4 w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-hair py-3 text-left text-[11px] font-semibold uppercase tracking-[0.13em] text-ink-3">
                    Ingredient
                  </th>
                  <th className="border-b border-hair py-3 text-right text-[11px] font-semibold uppercase tracking-[0.13em] text-ink-3">
                    Dose
                  </th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((ing) => (
                  <tr key={ing.name}>
                    <td className="border-b border-hair-soft py-3.5 text-[15px] font-medium text-ink">
                      {ing.name}
                    </td>
                    <td className="border-b border-hair-soft py-3.5 text-right text-[15px] text-berry">
                      {ing.dose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-[13.5px] text-ink-3">
              Two gummies nightly, ~30 minutes before bed. 30-day supply. No
              melatonin, no added sugar, hormone-free.
            </p>
          </Card>
        </div>

        {/* The evidence we cite */}
        <Card className="mt-4">
          <Label>The evidence we cite</Label>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {evidence.map((e) => (
              <div key={e.source}>
                <p className="text-[13px] text-ink-3">
                  <span className="font-semibold text-ink-2">{e.active}:</span>{" "}
                  <span className="font-semibold text-berry">{e.claim}</span>{" "}
                  {e.source}.
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] text-ink-3">
            Every stat appears with its citation wherever it is used. Strip the
            citation and you strip the claim.
          </p>
        </Card>
      </Container>
    </Section>
  );
}
