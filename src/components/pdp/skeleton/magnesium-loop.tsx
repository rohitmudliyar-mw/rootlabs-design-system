import Image from "next/image";

import { Container } from "@/components/brand";
import { magnesiumLoop } from "@/lib/content";
import { Reveal } from "./reveal";

/**
 * MagnesiumLoop, the "you need the right magnesium" section. Deep-green
 * editorial block: eyebrow, a Fraunces headline with one italic word, a short
 * line, then a moody night-scene card with an overlaid timestamp. Each element
 * reveals progressively on scroll.
 */
export function MagnesiumLoop() {
  const { eyebrow, headline, body, scene } = magnesiumLoop;

  return (
    <section className="bg-green-deep text-[#eef1ea]">
      <Container className="py-12 text-center sm:py-16 lg:py-20">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-green-hl">
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="mx-auto mt-5 max-w-[16ch] font-serif text-[clamp(34px,9vw,56px)] font-[400] leading-[1.02] tracking-[-0.015em] text-[#f4f6f1]">
            {headline.lead} <em className="italic">{headline.emph}</em>{" "}
            {headline.tail}
          </h2>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-5 max-w-[34ch] text-[clamp(16px,4vw,20px)] leading-[1.55] text-[#c4d0c2]">
            {body}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="relative mx-auto mt-10 max-w-[640px] overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src={scene.image}
                alt="Awake in a dark bedroom in the early hours"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-5 left-5 text-left">
              <div className="font-serif text-[clamp(34px,9vw,44px)] leading-none text-white">
                {scene.time}
                <span className="ml-1 text-[0.5em] align-baseline tracking-[0.1em]">
                  {scene.meridiem}
                </span>
              </div>
              <div className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#cdd6cb]">
                {scene.caption}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
