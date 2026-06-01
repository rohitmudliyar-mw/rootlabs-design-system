import {
  Container,
  Section,
  Eyebrow,
  SectionTitle,
  Card,
} from "@/components/brand";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { ingredients, mechanism } from "@/lib/content";

export function SupplementFacts() {
  return (
    <Section tone="bone" divider>
      <Container size="default">
        <Eyebrow tone="green">What&apos;s inside</Eyebrow>
        <SectionTitle className="mt-4 max-w-[18ch]">
          Dosed for deep sleep. Nothing hidden.
        </SectionTitle>

        <Tabs defaultValue="facts" className="mt-8">
          <TabsList
            variant="line"
            className="h-auto gap-2 border-b border-hair pb-0"
          >
            <TabsTrigger
              value="facts"
              className="h-auto px-1 pb-3 text-[16px] data-active:text-green"
            >
              Supplement Facts
            </TabsTrigger>
            <TabsTrigger
              value="how"
              className="h-auto px-1 pb-3 text-[16px] data-active:text-green"
            >
              How to use
            </TabsTrigger>
            <TabsTrigger
              value="why"
              className="h-auto px-1 pb-3 text-[16px] data-active:text-green"
            >
              Why it works
            </TabsTrigger>
          </TabsList>

          {/* Facts */}
          <TabsContent value="facts" className="pt-6">
            <Card className="max-w-[520px]">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                Serving size: 2 gummies · 30 servings
              </p>
              <table className="mt-4 w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 border-ink py-2 text-left text-[12px] font-semibold uppercase tracking-[0.1em] text-ink">
                      Active
                    </th>
                    <th className="border-b-2 border-ink py-2 text-right text-[12px] font-semibold uppercase tracking-[0.1em] text-ink">
                      Per serving
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ingredients.map((ing) => (
                    <tr key={ing.name}>
                      <td className="border-b border-hair py-3 text-[16px] text-ink">
                        {ing.name}
                      </td>
                      <td className="border-b border-hair py-3 text-right text-[16px] font-medium text-ink">
                        {ing.dose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[13px] text-ink-3">
                Other ingredients: chicory root fibre, pectin, natural berry
                flavor. No added sugar, no melatonin, hormone-free.
              </p>
            </Card>
          </TabsContent>

          {/* How */}
          <TabsContent value="how" className="pt-6">
            <Card className="max-w-[640px]">
              <p className="text-[16px] leading-[1.6] text-ink-2">
                Take <span className="font-semibold text-ink">two gummies</span>{" "}
                nightly, about 30 minutes before bed. Each bottle is a 30-day
                supply. Be patient with the curve. Meaningful shifts in deep
                sleep typically land between days 18 and 28 as your magnesium
                reserves replenish.
              </p>
            </Card>
          </TabsContent>

          {/* Why */}
          <TabsContent value="why" className="pt-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {mechanism.map((step) => (
                <Card key={step.n}>
                  <span className="font-serif text-[28px] leading-none text-green">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-[16px] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.5] text-ink-2">
                    {step.body}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </Section>
  );
}
