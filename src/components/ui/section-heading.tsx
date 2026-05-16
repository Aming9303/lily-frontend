type SectionHeadingProps = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="eyebrow text-[var(--color-emerald)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      <p className="text-lg leading-8 text-[var(--color-muted)]">
        {description}
      </p>
    </div>
  );
}
