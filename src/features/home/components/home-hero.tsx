import { protocolPillars, siteNavigation } from "@/content/site";

export function HomeHero() {
  return (
    <section className="shell overflow-hidden rounded-[2rem]">
      <div className="grid gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-12">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="eyebrow text-[var(--color-emerald)]">
                Lily Protocol
              </p>
              <p className="mt-2 max-w-xl text-sm text-[var(--color-muted)]">
                Autonomous agent finance infrastructure on Stellar
              </p>
            </div>
            <nav aria-label="Primary">
              <ul className="flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
                {siteNavigation.map((item) => (
                  <li key={item.href}>
                    <a
                      className="rounded-full border border-[var(--color-line)] px-4 py-2 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="space-y-6">
            <p className="eyebrow text-[var(--color-accent-strong)]">
              Drip-ready contributor base
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-6xl">
              The financial layer for software agents that need to own value
              and move it in real time.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              Lily Protocol gives AgentLily instances wallets, balances,
              payments, and identity rails so autonomous systems can purchase
              tools, settle with APIs, and transact on Stellar without manual
              workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              href="#contributors"
            >
              Start contributing
            </a>
            <a
              className="rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
              href="#architecture"
            >
              Explore architecture
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {protocolPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-card-strong)] p-6"
            >
              <p className="eyebrow mb-4 text-[var(--color-emerald)]">
                Capability
              </p>
              <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
                {pillar.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
