import Image from "next/image";
import { Play } from "lucide-react";

import { Container, Section, Eyebrow, SectionTitle } from "@/components/brand";
import { videoReviews } from "@/lib/content";

/**
 * VideoReviews, a simple swipeable row of video review cards. Each is a
 * portrait poster with a play button and the reviewer's name. Posters are
 * placeholders; wire to real video on click later.
 */
export function VideoReviews() {
  return (
    <Section tone="surface" divider className="py-12 sm:py-16 lg:py-20">
      <Container>
        <Eyebrow tone="green">Real nights</Eyebrow>
        <SectionTitle className="mt-4">Hear it from sleepers.</SectionTitle>

        <div className="-mr-5 mt-10 flex snap-x gap-4 overflow-x-auto pb-4 pr-5 sm:-mr-8 sm:pr-8 lg:-mr-12 lg:pr-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {videoReviews.map((v) => (
          <button
            key={v.name}
            type="button"
            aria-label={`Play video review from ${v.name}`}
            className="group relative aspect-[9/14] w-[220px] flex-none snap-start overflow-hidden rounded-xl bg-bone-2 sm:w-[240px]"
          >
            <Image
              src={v.poster}
              alt=""
              fill
              sizes="240px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

            {/* play button */}
            <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-surface/90 shadow-md backdrop-blur transition-transform duration-200 group-hover:scale-110">
              <Play className="size-5 translate-x-px fill-green text-green" />
            </span>

            <span className="absolute inset-x-4 bottom-4 text-left">
              <span className="block text-[15px] font-semibold text-white">
                {v.name}
              </span>
              <span className="block text-[12.5px] leading-snug text-white/85">
                {v.note}
              </span>
            </span>
          </button>
        ))}
        </div>
      </Container>
    </Section>
  );
}
