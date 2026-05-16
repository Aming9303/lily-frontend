import Link from "next/link";

import { routes } from "@/config/site";
import { contributionTracks } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContributorsSection() {
  return (
    <section
      id="contributors"
      className="shell rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10"
    >
      <SectionHeading
        eyebrow="Contributors"
        title="Set up like a real open-source base, ready for Drip-style contribution flow."
        description="This repo now has a stronger landing page, typed content structure, contributor docs, issue templates, PR scaffolding, and CI checks so developers can land focused work with less friction."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {contributionTracks.map((track) => (
          <article
            key={track.title}
            className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card-strong)] p-6"
          >
            <h3 className="text-xl font-semibold text-[var(--color-ink)]">
              {track.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
              {track.description}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-strong)]"
          href={routes.contribute}
        >
          Open contributor guide
        </Link>
        <a
          className="rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
          href="#repositories"
        >
          Explore repository map
        </a>
      </div>
    </section>
  );
}
