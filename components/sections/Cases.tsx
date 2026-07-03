import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cases } from "@/lib/content";

export function Cases({ limit }: { limit?: number }) {
  const items = limit ? cases.slice(0, limit) : cases;

  return (
    <Section className="bg-surface-muted/40">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Результаты проектов"
          title="Кейсы с измеримым результатом"
          subtitle="Акцент на задаче, а не на нише: показываем, что именно изменилось в цифрах."
        />
        <Button href="/keysy" variant="secondary" className="whitespace-nowrap">
          Смотреть все кейсы
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {items.map((c) => (
          <Link
            key={c.slug}
            href={`/keysy/${c.slug}`}
            className="card card-hover group flex flex-col"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                {c.tag}
              </span>
              <ArrowUpRight className="h-5 w-5 text-ink-muted transition group-hover:text-brand-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-ink-soft">Задача.</span> {c.task}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-ink-soft">Решение.</span>{" "}
              {c.solution}
            </p>
            <div className="mt-5 flex items-baseline gap-3 border-t border-line pt-4">
              <span className="text-2xl font-semibold text-gradient">
                {c.metric}
              </span>
              <span className="text-sm text-ink-muted">{c.result}</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
