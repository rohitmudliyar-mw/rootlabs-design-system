import { Container } from "@/components/brand";
import { certifications } from "@/lib/content";

export function SocialProof() {
  return (
    <section className="border-y border-hair bg-surface py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {certifications.map((c) => (
            <span
              key={c}
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-3"
            >
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
