import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { process } from "@/lib/content";

export function Process() {
  return (
    <Section className="bg-transparent">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Как проходит проект"
          title="Прозрачный процесс от заявки до поддержки"
          subtitle="Вы всегда знаете, на каком этапе проект и что будет дальше."
        />
        <Link
          href="/o-kompanii"
          className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          Подробнее об этапах
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {process.map((p) => (
          <li
            key={p.step}
            className="relative rounded-2xl border border-line bg-surface-muted/50 p-5"
          >
            <span className="text-2xl font-semibold text-brand-500/50">
              {p.step}
            </span>
            <h3 className="mt-2 text-base font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {p.text}
            </p>
            <span className="mt-4 inline-block rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
              {p.duration}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
