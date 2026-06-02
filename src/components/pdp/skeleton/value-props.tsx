import { ShieldCheck, CalendarSync, Truck } from "lucide-react";

import { Container, Section } from "@/components/brand";

/**
 * ValueProps, the 3-up reassurance row that sits right under the buy box
 * (the reference layout places guarantee / delivery / shipping here).
 */
const items = [
  {
    icon: ShieldCheck,
    title: "90-night guarantee",
    body: "Sleep on it for three months. Not better? Full refund.",
  },
  {
    icon: CalendarSync,
    title: "Monthly delivery",
    body: "A fresh 30-day bottle arrives on your schedule.",
  },
  {
    icon: Truck,
    title: "Free shipping",
    body: "On every subscription order, always.",
  },
];

export function ValueProps() {
  return (
    <Section tone="surface" divider className="py-10 sm:py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
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
