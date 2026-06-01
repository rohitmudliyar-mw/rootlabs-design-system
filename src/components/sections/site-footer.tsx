import Link from "next/link";

import { Container, BrandLogo } from "@/components/brand";

const groups = [
  {
    title: "Product",
    links: ["Shop AshwaMag", "How it works", "The science", "Reviews"],
  },
  {
    title: "Company",
    links: ["About Root Labs", "Our standards", "Contact", "Careers"],
  },
  {
    title: "Support",
    links: ["FAQ", "Shipping", "Returns", "Subscription help"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hair bg-bone">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo surface="light" height={34} />
            <p className="mt-4 max-w-[32ch] text-[14px] leading-[1.55] text-ink-2">
              Doctor-led sleep science. We restore the deep sleep stress takes
              away. We never sedate.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                {g.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-[14px] text-ink-2 transition-colors hover:text-green"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-hair pt-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-ink-3">
            AshwaMag · By Root Labs · © 2026
          </p>
          <p className="mt-3 max-w-[70ch] text-[12px] leading-[1.5] text-ink-3">
            These statements have not been evaluated by the FDA. This product is
            not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </Container>
    </footer>
  );
}
