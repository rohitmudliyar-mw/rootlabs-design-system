"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { BrandLogo } from "@/components/brand";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const nav = [
  { label: "The Science", href: "#science" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-bone/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Root Labs home">
          <BrandLogo surface="light" height={30} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-ink-2 transition-colors hover:text-green"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button render={<Link href="/product" />} className="hidden sm:inline-flex">
            Shop
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" />
              }
            >
              <Menu />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-bone p-6">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <BrandLogo surface="light" height={32} className="mt-1" />
              <nav className="mt-10 flex flex-col gap-1">
                {nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={
                      <a
                        href={item.href}
                        className="rounded-lg px-3 py-3 font-serif text-2xl text-ink hover:bg-green-mist"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <SheetClose
                render={<Button render={<Link href="/product" />} size="lg" />}
                className="mt-8 w-full"
              >
                Shop AshwaMag
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
