import { Container, Section, Eyebrow, SectionTitle } from "@/components/brand";
import { advisoryBoard } from "@/lib/content";

/**
 * AdvisoryBoard, the doctors row as a horizontal scroll of cards. Initials
 * avatars, name, credential. Left edge aligns with the heading; bleeds right.
 */
function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function AdvisoryBoard() {
  return (
    <Section tone="bone" divider className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-[40ch]">
          <Eyebrow tone="green">Reviewed by experts</Eyebrow>
          <SectionTitle className="mt-4">
            Backed by a scientific advisory board.
          </SectionTitle>
        </div>

        <ul className="-mr-5 mt-10 flex snap-x gap-4 overflow-x-auto pb-2 pr-5 sm:-mr-8 sm:pr-8 lg:-mr-12 lg:pr-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {advisoryBoard.map((person) => (
            <li
              key={person.name}
              className="flex w-[180px] flex-none snap-start flex-col items-center rounded-xl border border-hair bg-surface p-6 text-center"
            >
              <span className="grid size-16 place-items-center rounded-full bg-green-mist font-serif text-[20px] text-green">
                {initials(person.name)}
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-ink">
                {person.name}
              </h3>
              <p className="mt-1 text-[13px] leading-[1.4] text-ink-3">
                {person.credential}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
