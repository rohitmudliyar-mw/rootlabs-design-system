import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, SectionTitle, Highlight } from "@/components/brand";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-ink py-20 text-center sm:py-28">
      <Container size="prose">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-green-hl">
          The AshwaMag promise
        </p>
        <SectionTitle className="mx-auto mt-5 max-w-[20ch] !text-white">
          We replenish what stress takes.{" "}
          <Highlight className="!text-ink">Rested, not sedated.</Highlight>
        </SectionTitle>
        <p className="mx-auto mt-5 max-w-[48ch] text-[17px] leading-[1.6] text-[#cfd6cc]">
          No melatonin. No grogginess. No dependency. Just the deep sleep your
          chemistry was missing.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button render={<Link href="/product" />} size="lg">
            Start your 90 nights
            <ArrowRight />
          </Button>
          <Button
            render={<a href="#science" />}
            variant="ghost"
            size="lg"
            className="border-white/40 text-white hover:bg-white hover:text-ink"
          >
            See the science
          </Button>
        </div>
      </Container>
    </section>
  );
}
