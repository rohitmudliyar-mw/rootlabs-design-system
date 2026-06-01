import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Reasons } from "@/components/sections/reasons";
import { TheScience } from "@/components/sections/the-science";
import { Comparison } from "@/components/sections/comparison";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { SiteFooter } from "@/components/sections/site-footer";

export default function LandingExample() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SocialProof />
        <Reasons />
        <TheScience />
        <Comparison />
        <Reviews />
        <Faq />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
