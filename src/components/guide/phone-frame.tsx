import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * PhoneFrame, shows a live page inside a mobile device mockup so the
 * mobile-first layout is visible right inside the design guide.
 */
export function PhoneFrame({
  src,
  title,
  href,
}: {
  src: string;
  title: string;
  href: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-[2.4rem] border-[10px] border-ink bg-ink shadow-[0_24px_60px_-24px_rgba(24,28,25,0.5)]">
        <div className="h-[600px] w-[290px] overflow-hidden rounded-[1.6rem] bg-bone">
          <iframe
            src={src}
            title={title}
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="mt-5 text-center">
        <p className="font-serif text-[20px] text-ink">{title}</p>
        <Link
          href={href}
          target="_blank"
          className="mt-1 inline-flex items-center gap-1 text-[13px] font-medium text-green hover:underline"
        >
          Open full page <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
