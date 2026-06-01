import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Container,
  Display,
  Lede,
  Stars,
  Pill,
  ProductVisual,
} from "@/components/brand";
import { Button } from "@/components/ui/button";
import { product } from "@/lib/content";

export function Hero() {
  return (
    <section className="bg-bone">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="flex flex-wrap items-center gap-3">
            <Pill tone="green">#1 doctor-recommended</Pill>
            <div className="flex items-center gap-2">
              <Stars rating={product.rating} />
              <span className="text-[13px] text-ink-2">
                {product.rating} · {product.reviewCount.toLocaleString()} reviews
              </span>
            </div>
          </div>

          <Display className="mt-6">
            Rested.
            <br />
            <em className="font-[360] italic">
              Not <span className="brand-highlight">sedated</span>.
            </em>
          </Display>

          <Lede className="mt-6">
            A doctor-led sleep formula built for women 35+. We restore the deep
            sleep stress takes away — with the best-absorbed magnesium, KSM-66
            ashwagandha, and no melatonin.
          </Lede>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button render={<Link href="/product" />} size="lg">
              Find your sleep plan
              <ArrowRight />
            </Button>
            <Button render={<a href="#science" />} variant="ghost" size="lg">
              See the science
            </Button>
          </div>

          <p className="mt-5 text-[13px] text-ink-3">
            No melatonin · No added sugar · Third-party tested
          </p>
        </div>

        {/* Visual */}
        <div className="order-1 lg:order-2">
          <ProductVisual
            ratio="square"
            tone="mist"
            label="Hero product photo"
            className="mx-auto max-w-[440px]"
          />
        </div>
      </Container>
    </section>
  );
}
