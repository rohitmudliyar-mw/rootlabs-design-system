"use client";

import { useRef } from "react";
import {
  Atom,
  Sprout,
  Leaf,
  Clock,
  Pill as PillIcon,
  CalendarDays,
  Package,
  type LucideIcon,
} from "lucide-react";

import {
  Container,
  Section,
  Eyebrow,
  SectionTitle,
  Label,
  Card,
  ImageFrame,
} from "@/components/brand";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { ingredients, howToUse } from "@/lib/content";

/**
 * WhatsInside, the visual "Supplement facts" section. Two tabs (Facts / How to
 * use), kept on one line with a sticky bar; each panel is icon-led.
 */
const activeIcons: LucideIcon[] = [Atom, Sprout, Leaf];
const useIcons: LucideIcon[] = [PillIcon, Clock, CalendarDays, Package];

const triggerCls =
  "h-auto whitespace-nowrap px-1 pb-3 text-[15px] data-active:text-green";

export function WhatsInside() {
  const wrapRef = useRef<HTMLDivElement>(null);

  // On tab change, scroll the tab bar to its pinned spot under the header so
  // the chosen panel starts at the top.
  const scrollToTabs = () => {
    requestAnimationFrame(() => {
      const el = wrapRef.current;
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  };

  return (
    <Section tone="bone" divider className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-[42ch]">
          <Eyebrow tone="green">What&apos;s inside</Eyebrow>
          <SectionTitle className="mt-4">Supplement facts.</SectionTitle>
        </div>

        <div ref={wrapRef} className="mt-8">
          <Tabs defaultValue="facts" onValueChange={scrollToTabs}>
            <TabsList
              variant="line"
              className="sticky top-16 z-20 h-auto w-full justify-start gap-8 border-b border-hair bg-bone pb-0 pt-3"
            >
              <TabsTrigger value="facts" className={triggerCls}>
                Facts
              </TabsTrigger>
              <TabsTrigger value="how" className={triggerCls}>
                How to use
              </TabsTrigger>
            </TabsList>

            {/* Facts */}
            <TabsContent value="facts" className="pt-8">
              <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
                <ImageFrame
                  src="/product/gummies-bowl.jpg"
                  alt="AshwaMag berry gummies"
                  ratio="square"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <Card>
                  <Label>Serving size: 2 gummies · 30 servings</Label>
                  <ul className="mt-5 divide-y divide-hair">
                    {ingredients.map((ing, i) => {
                      const Icon = activeIcons[i] ?? Atom;
                      return (
                        <li
                          key={ing.name}
                          className="flex items-center gap-4 py-4"
                        >
                          <span className="grid size-11 flex-none place-items-center rounded-full bg-green-mist">
                            <Icon className="size-5 text-green" />
                          </span>
                          <span className="flex-1 text-[16px] text-ink">
                            {ing.name}
                          </span>
                          <span className="text-[16px] font-semibold tabular-nums text-ink">
                            {ing.dose}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-5 text-[13px] leading-[1.5] text-ink-3">
                    Other ingredients: chicory root fibre, pectin, natural berry
                    flavor. No added sugar, no melatonin, hormone-free.
                  </p>
                </Card>
              </div>
            </TabsContent>

            {/* How to use */}
            <TabsContent value="how" className="pt-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {howToUse.map((step, i) => {
                  const Icon = useIcons[i] ?? PillIcon;
                  return (
                    <div
                      key={step.title}
                      className="flex gap-4 sm:flex-col sm:gap-3"
                    >
                      <span className="grid size-11 flex-none place-items-center rounded-full bg-green-mist">
                        <Icon className="size-5 text-green" />
                      </span>
                      <div>
                        <h4 className="text-[16px] font-semibold text-ink">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-[14.5px] leading-[1.5] text-ink-2">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </Section>
  );
}
