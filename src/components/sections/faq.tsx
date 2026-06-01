import { Container, Section, Eyebrow, SectionTitle } from "@/components/brand";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <Section id="faq" tone="bone" divider>
      <Container size="prose">
        <Eyebrow tone="green">Questions</Eyebrow>
        <SectionTitle className="mt-4">Honest answers.</SectionTitle>

        <Accordion className="mt-8">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={i}
              className="border-b border-hair"
            >
              <AccordionTrigger className="py-5 font-serif text-[19px] text-ink hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] leading-[1.6] text-ink-2">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
