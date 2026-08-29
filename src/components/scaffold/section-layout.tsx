import { SectionNav } from "@/components/scaffold/section-nav";
import { SiteHeader } from "@/components/scaffold/site-header";

import type { RouteScaffold } from "@/types/site";

type SectionLayoutProps = {
  readonly title: string;
  readonly description: string;
  readonly routes: readonly RouteScaffold[];
  readonly children: React.ReactNode;
};

export function SectionLayout({
  title,
  description,
  routes,
  children,
}: SectionLayoutProps) {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-[var(--layout-container-max)] flex-col gap-[var(--spacing-section)] px-[var(--layout-gutter)] py-[var(--spacing-section)] lg:flex-row">
        <aside className="lg:w-80 lg:flex-none">
          <div className="surface rounded-[var(--radius-md)] p-6">
            <p className="eyebrow text-[var(--color-accent)]">{title}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              {description}
            </p>
            <div className="mt-6">
              <SectionNav routes={routes} />
            </div>
          </div>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </>
  );
}
