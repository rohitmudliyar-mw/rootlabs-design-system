import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { Container } from "@/components/brand";
import { ProductGallery } from "@/components/pdp/product-gallery";
import { BuyBox } from "@/components/pdp/buy-box";
import { SupplementFacts } from "@/components/pdp/supplement-facts";
import { Guarantee } from "@/components/pdp/guarantee";
import { StickyBuyBar } from "@/components/pdp/sticky-buy-bar";

export default function ProductPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 md:pb-0">
        {/* Buy section */}
        <section className="bg-bone py-8 sm:py-12">
          <Container className="grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ProductGallery />
            </div>
            <BuyBox />
          </Container>
        </section>

        <Guarantee />
        <SupplementFacts />
        <Reviews />
        <Faq />
      </main>
      <SiteFooter />
      <StickyBuyBar />
    </>
  );
}
