import { Container } from "@/components/brand";
import { hiddenCycle } from "@/lib/content";
import { Reveal } from "./reveal";

/**
 * HiddenCycle, a vertical pointer-timeline of the cortisol-magnesium cascade.
 * Numbered nodes sit on a connecting rail; each pointer reveals progressively
 * on scroll. Deep-green to continue the "right magnesium" story.
 */
export function HiddenCycle() {
  const { heading, steps } = hiddenCycle;

  return (
    <section className="bg-green-deep text-[#eef1ea]">
      <Container className="py-12 sm:py-16 lg:py-20">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] text-center font-serif text-[clamp(26px,7vw,40px)] font-[400] leading-[1.1] tracking-[-0.01em] text-[#f4f6f1]">
            {heading}
          </h2>
        </Reveal>

        <ol className="relative mx-auto mt-12 max-w-[560px]">
          {/* connecting rail */}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-5 left-[18px] top-5 w-px bg-white/15"
          />

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 140}>
              <li className="relative flex gap-5 pb-9 last:pb-0">
                <span className="relative z-10 grid size-9 flex-none place-items-center rounded-full border border-green-hl/50 bg-green-deep font-serif text-[15px] text-green-hl">
                  {s.n}
                </span>
                <div className="pt-1">
                  <h3 className="text-[clamp(18px,4.5vw,21px)] font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.55] text-[#bcc9ba]">
                    {s.body}
                  </p>
                  {s.stat && (
                    <span className="mt-3 inline-block rounded-full bg-green-hl/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-green-hl">
                      {s.stat}
                    </span>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
