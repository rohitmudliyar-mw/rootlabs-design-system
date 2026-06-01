"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container, BrandLogo } from "@/components/brand";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Overview", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Installation", href: "/installation" },
];

export function DocsHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-bone/85 backdrop-blur-md backdrop-saturate-150">
      <Container size="wide" className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <Link href="/" aria-label="Root Labs design system">
            <BrandLogo surface="light" height={34} />
          </Link>
          <span className="hidden text-[11px] uppercase tracking-[0.16em] text-ink-3 lg:inline">
            Design System · v1.0
          </span>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2">
          {tabs.map((t) => {
            const active = t.href === pathname;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[14px] font-medium transition-colors",
                  active
                    ? "bg-green-mist text-green"
                    : "text-ink-2 hover:text-green"
                )}
              >
                {t.label}
              </Link>
            );
          })}
          <a
            href="/ashwamag-brand-guide.html"
            target="_blank"
            className="hidden px-3 py-1.5 text-[14px] font-medium text-ink-2 hover:text-green sm:inline"
          >
            Brand guide
          </a>
        </nav>
      </Container>
    </header>
  );
}
