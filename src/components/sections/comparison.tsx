import { Check, X } from "lucide-react";

import {
  Container,
  Section,
  Eyebrow,
  SectionTitle,
  Pill,
} from "@/components/brand";
import { comparison } from "@/lib/content";

export function Comparison() {
  return (
    <Section tone="bone" divider>
      <Container>
        <Eyebrow tone="green">The honest comparison</Eyebrow>
        <SectionTitle className="mt-4 max-w-[16ch]">
          Not another melatonin gummy.
        </SectionTitle>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* Us */}
          <div className="rounded-xl border border-green bg-green-mist p-7">
            <Pill tone="yes">AshwaMag</Pill>
            <ul className="mt-5 space-y-0">
              {comparison.us.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-black/[0.06] py-3 text-[15.5px] text-ink-2 last:border-b-0"
                >
                  <Check className="mt-0.5 size-4 flex-none text-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Them */}
          <div className="rounded-xl border border-[#dce0d5] bg-[#f4f6f1] p-7">
            <Pill tone="no">Typical sleep aids</Pill>
            <ul className="mt-5 space-y-0">
              {comparison.them.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-black/[0.05] py-3 text-[15.5px] text-ink-2 last:border-b-0"
                >
                  <X className="mt-0.5 size-4 flex-none text-warn" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
