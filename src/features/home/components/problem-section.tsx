import { SectionHeading } from "@/components/ui/section-heading";
import { problemPoints } from "@/content/site";

export function ProblemSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="shell rounded-[2rem] p-6 sm:p-8">
        <SectionHeading
          eyebrow="Why now"
          title="Existing payment rails were not built for autonomous software."
          description="Agent commerce needs programmable wallets, instant settlement, and API-native purchasing paths. Traditional billing systems slow that down."
        />
      </div>
      <div className="shell rounded-[2rem] p-6 sm:p-8">
        <ul className="grid gap-4">
          {problemPoints.map((point, index) => (
            <li
              key={point}
              className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--color-line)] bg-white/60 p-5"
            >
              <span className="eyebrow pt-1 text-[var(--color-accent-strong)]">
                0{index + 1}
              </span>
              <p className="text-base leading-7 text-[var(--color-ink)]">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
