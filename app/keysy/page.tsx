import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { cases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Кейсы и портфолио",
  description:
    "Проекты внедрения и автоматизации Битрикс24 с измеримым результатом: задача → решение → результат в цифрах.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Кейсы"
        title="Проекты с измеримым результатом"
        subtitle="Показываем не отрасль, а задачу и цифры. Так понятнее, что именно мы меняем в бизнесе."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Кейсы" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-5 md:grid-cols-2">
          {cases.map((c) => (
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
              <h2 className="mt-4 text-xl font-semibold text-ink">{c.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {c.task} {c.solution}
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
      </section>

      <CtaBanner title="Хотите такой же результат?" />
    </>
  );
}
