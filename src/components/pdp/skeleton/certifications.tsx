import {
  FlaskConical,
  Ban,
  HeartPulse,
  MoonStar,
  Leaf,
  BadgeCheck,
  Sprout,
  type LucideIcon,
} from "lucide-react";

import { Container, Section, Eyebrow, SectionTitle } from "@/components/brand";
import { certifications } from "@/lib/content";

/**
 * Certifications, a dedicated section presenting each certification as a tile
 * with an icon. Reuses the shared certifications list and the same icon map as
 * the original attribute row.
 */
const iconFor: Record<string, LucideIcon> = {
  "Third-party tested": FlaskConical,
  "No added sugar": Ban,
  "Hormone-free": HeartPulse,
  "No melatonin": MoonStar,
  Vegan: Leaf,
  GMP: BadgeCheck,
  "Non-GMO": Sprout,
};

export function Certifications() {
  return (
    <Section tone="bone" divider className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-[42ch] text-center">
          <Eyebrow tone="green">Quality you can verify</Eyebrow>
          <SectionTitle className="mt-4">Tested, certified, traceable.</SectionTitle>
        </div>

        <ul className="-mr-5 mt-10 flex snap-x gap-4 overflow-x-auto pb-2 pr-5 sm:-mr-8 sm:pr-8 lg:-mr-12 lg:pr-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {certifications.map((c) => {
            const Icon = iconFor[c] ?? BadgeCheck;
            return (
              <li
                key={c}
                className="flex w-[150px] flex-none snap-start flex-col items-center gap-3 rounded-xl border border-hair bg-surface p-6 text-center"
              >
                <span className="grid size-12 place-items-center rounded-full bg-green-mist">
                  <Icon className="size-6 text-green" />
                </span>
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-ink-2">
                  {c}
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
