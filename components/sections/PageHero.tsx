import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface-muted/50">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-32 right-10 -z-10 h-80 w-80 rounded-full bg-brand-500/20 blur-[120px]" />

      <div className="container-x py-16 md:py-20">
        {breadcrumbs && (
          <nav className="mb-5 flex flex-wrap items-center gap-1 text-sm text-ink-muted">
            {breadcrumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-brand-700">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink-soft">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span className="eyebrow mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
