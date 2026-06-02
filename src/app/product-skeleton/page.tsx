import type { Metadata } from "next";

import { SiteFooter } from "@/components/sections/site-footer";
import { Faq } from "@/components/sections/faq";
import { Container } from "@/components/brand";
import { WhatsInside } from "@/components/pdp/skeleton/whats-inside";
import { StickyBar } from "@/components/pdp/skeleton/sticky-bar";
import { CartSheet } from "@/components/pdp/skeleton/cart-sheet";
import { Header } from "@/components/pdp/skeleton/header";
import { EditorialGallery } from "@/components/pdp/skeleton/editorial-gallery";
import { BuyPanel } from "@/components/pdp/skeleton/buy-panel";
import { ValueProps } from "@/components/pdp/skeleton/value-props";
import { MagnesiumLoop } from "@/components/pdp/skeleton/magnesium-loop";
import { HiddenCycle } from "@/components/pdp/skeleton/hidden-cycle";
import { Certifications } from "@/components/pdp/skeleton/certifications";
import { BenefitsGrid } from "@/components/pdp/skeleton/benefits-grid";
import { BenefitRows } from "@/components/pdp/skeleton/benefit-rows";
import { VideoReviews } from "@/components/pdp/skeleton/video-reviews";
import { AdvisoryBoard } from "@/components/pdp/skeleton/advisory-board";

export const metadata: Metadata = {
  title: "Product skeleton",
  description:
    "A product page skeleton wearing the AshwaMag brand, built with the design system.",
};

/**
 * Product page skeleton. Lean flow: hero → value props → the science story →
 * facts → certifications → benefits → image cards → video reviews → doctors →
 * FAQ.
 */
export default function ProductSkeletonPage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        {/* Hero: gallery left + sticky buy panel right */}
        <section className="bg-surface py-8 sm:py-12">
          <Container className="grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
              <EditorialGallery />
            </div>
            <BuyPanel />
          </Container>
        </section>

        <ValueProps />
        <MagnesiumLoop />
        <HiddenCycle />
        <WhatsInside />
        <Certifications />
        <BenefitsGrid />
        <BenefitRows />
        <VideoReviews />
        <AdvisoryBoard />
        <Faq />
      </main>
      <SiteFooter />
      <StickyBar />
      <CartSheet />
    </>
  );
}
