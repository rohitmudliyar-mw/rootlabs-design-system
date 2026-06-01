import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/brand";
import { RootLabsWordmark } from "./root-labs-wordmark";

const REPO = "https://github.com/rohitmudliyar-mw/rootlabs-design-system";

export function DocsFooter() {
  return (
    <footer className="border-t border-hair bg-bone">
      <Container
        size="wide"
        className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between"
      >
        <RootLabsWordmark />
        <div className="flex flex-wrap items-center gap-5 text-[13px] text-ink-3">
          <a
            href={REPO}
            target="_blank"
            className="inline-flex items-center gap-1 hover:text-green"
          >
            GitHub repo <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href="/ashwamag-brand-guide.html"
            target="_blank"
            className="inline-flex items-center gap-1 hover:text-green"
          >
            Full brand guide <ArrowUpRight className="size-3.5" />
          </a>
          <span>Root Labs · Design System v1.0</span>
        </div>
      </Container>
    </footer>
  );
}
