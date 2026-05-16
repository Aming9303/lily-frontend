import { SectionHeading } from "@/components/ui/section-heading";
import { repositories } from "@/content/site";

export function RepositoriesSection() {
  return (
    <section id="repositories" className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
      <div className="shell rounded-[2rem] p-6 sm:p-8">
        <SectionHeading
          eyebrow="Repositories"
          title="Each repo has a clear role in the Lily ecosystem."
          description="This frontend should feel like the operational window into the wider protocol, not an isolated marketing page."
        />
      </div>
      <div className="grid gap-4">
        {repositories.map((repo) => (
          <article
            key={repo.name}
            className="shell rounded-[1.75rem] p-6 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">
                  {repo.name}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                  {repo.description}
                </p>
              </div>
              <span className="rounded-full bg-[rgba(31,122,107,0.12)] px-3 py-2 text-xs font-medium text-[var(--color-emerald)]">
                {repo.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
