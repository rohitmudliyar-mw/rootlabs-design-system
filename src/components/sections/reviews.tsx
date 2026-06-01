import {
  Container,
  Section,
  Eyebrow,
  SectionTitle,
  Card,
  Stars,
} from "@/components/brand";
import { reviews, product } from "@/lib/content";

export function Reviews() {
  return (
    <Section id="reviews" tone="surface" divider>
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow tone="green">Real reviews</Eyebrow>
            <SectionTitle className="mt-4 max-w-[18ch]">
              A real, science-led fix.
            </SectionTitle>
          </div>
          <div className="flex items-center gap-3">
            <Stars rating={product.rating} size={20} />
            <span className="text-[15px] text-ink-2">
              <span className="font-semibold text-ink">{product.rating}</span> ·{" "}
              {product.reviewCount.toLocaleString()} reviews
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name} className="flex flex-col">
              <Stars rating={r.rating} />
              <p className="mt-4 flex-1 font-serif text-[19px] italic leading-[1.4] text-ink">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-5">
                <div className="text-[14px] font-semibold text-ink">
                  {r.name}
                </div>
                <div className="text-[13px] text-ink-3">{r.meta}</div>
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-[12.5px] text-ink-3">
          Reviews are from verified buyers. Compensated for time, not opinion.
          Results vary; meaningful shifts typically land between days 18–28.
        </p>
      </Container>
    </Section>
  );
}
