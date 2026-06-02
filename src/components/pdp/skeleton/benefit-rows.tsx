import Image from "next/image";

import { Container, Section, Eyebrow, SectionTitle } from "@/components/brand";
import { storyBlocks } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * BenefitRows, the "designed to be different" section as a horizontal scroll
 * of image cards. Each card: a photo with a callout chip, then a stat-led
 * blurb. Swipe through on mobile, no page overflow.
 */
const statTone = {
  mist: "text-green",
  ink: "text-green",
  berry: "text-berry",
};

export function BenefitRows() {
  return (
    <Section tone="bone" divider className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-[26ch]">
          <Eyebrow tone="green">Designed to be different</Eyebrow>
          <SectionTitle className="mt-4">
            Made for the way sleep actually works.
          </SectionTitle>
        </div>

        <div className="-mr-5 mt-10 flex snap-x gap-4 overflow-x-auto pb-4 pr-5 sm:-mr-8 sm:pr-8 lg:-mr-12 lg:pr-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {storyBlocks.map((b) => (
          <article
            key={b.title}
            className="w-[280px] flex-none snap-start overflow-hidden rounded-xl border border-hair bg-surface sm:w-[330px]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={b.image}
                alt=""
                fill
                sizes="330px"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-surface/95 px-3 py-1.5 text-[12px] font-semibold text-ink shadow-sm backdrop-blur">
                {b.callout}
              </span>
            </div>
            <div className="p-6">
              <Eyebrow tone="green">{b.eyebrow}</Eyebrow>
              <h3 className="mt-2 font-serif text-[22px] leading-tight text-ink">
                {b.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.5] text-ink-2">
                {b.body}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span
                  className={cn(
                    "font-serif text-[30px] leading-none",
                    statTone[b.tone]
                  )}
                >
                  {b.stat.value}
                </span>
                <span className="text-[12px] uppercase tracking-[0.12em] text-ink-3">
                  {b.stat.label}
                </span>
              </div>
            </div>
          </article>
        ))}
        </div>
      </Container>
    </Section>
  );
}
