import { SectionHeading } from "@/components/ui/section-heading";

import {
  contributorChecklist,
  contributorWorkflow,
  validationCommands,
} from "../content";

export function ContributePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
      <section className="shell rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
        <SectionHeading
          eyebrow="Contribute"
          title="A clean entry point for developers who want to help ship Lily Protocol."
          description="This frontend is set up for open-source collaboration with issue templates, PR scaffolding, strict TypeScript, tests, and CI coverage for linting, type-checking, unit validation, and production builds."
        />
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <article className="shell rounded-[2rem] p-6 sm:p-8">
          <p className="eyebrow text-[var(--color-accent-strong)]">
            Before you start
          </p>
          <ul className="mt-6 grid gap-4">
            {contributorChecklist.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-[1.5rem] border border-[var(--color-line)] bg-white/60 p-4"
              >
                <span className="eyebrow text-[var(--color-accent-strong)]">
                  0{index + 1}
                </span>
                <span className="text-base leading-7 text-[var(--color-ink)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="shell rounded-[2rem] p-6 sm:p-8">
          <p className="eyebrow text-[var(--color-accent-strong)]">Workflow</p>
          <ul className="mt-6 grid gap-4">
            {contributorWorkflow.map((item) => (
              <li
                key={item}
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card-strong)] p-4 text-base leading-7 text-[var(--color-ink)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="shell rounded-[2rem] p-6 sm:p-8">
        <p className="eyebrow text-[var(--color-emerald)]">Validation</p>
        <div className="mt-4 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ink)] p-5 font-mono text-sm text-white">
          {validationCommands.map((command) => (
            <p key={command}>{command}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
