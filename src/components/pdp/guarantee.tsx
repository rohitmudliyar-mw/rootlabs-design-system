import { ShieldCheck, FlaskConical, Truck, RotateCcw } from "lucide-react";

import { Container, Section } from "@/components/brand";

const items = [
  {
    icon: ShieldCheck,
    title: "90-night guarantee",
    body: "Sleep on it for three months. Not better? Full refund.",
  },
  {
    icon: FlaskConical,
    title: "Third-party tested",
    body: "Batch-tested by Eurofins, with a certificate per lot.",
  },
  {
    icon: Truck,
    title: "Free shipping",
    body: "On every subscription order, always.",
  },
  {
    icon: RotateCcw,
    title: "Cancel anytime",
    body: "Pause or cancel your plan in two taps.",
  },
];

export function Guarantee() {
  return (
    <Section tone="surface" divider className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex gap-3.5">
              <item.icon className="size-6 flex-none text-green" />
              <div>
                <h3 className="text-[15px] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-[14px] leading-[1.5] text-ink-2">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
