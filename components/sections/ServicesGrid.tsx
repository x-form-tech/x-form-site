import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { services } from "@/lib/services";

export function ServicesGrid({
  standalone = false,
}: {
  // standalone=true — версия для хаб-страницы (без обёртки-заголовка «Что мы делаем»)
  standalone?: boolean;
}) {
  const grid = (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ slug, title, short, icon: Icon }) => (
        <Link
          key={slug}
          href={`/uslugi/${slug}`}
          className="card card-hover group flex flex-col"
        >
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
            <Icon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
            {short}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
            Подробнее
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );

  if (standalone) return <div className="container-x pb-4">{grid}</div>;

  return (
    <Section id="services" className="bg-surface-muted/40">
      <SectionHeader
        eyebrow="Что мы делаем"
        title="Услуги по Битрикс24"
        subtitle="От разовой настройки до полного внедрения под ключ и постоянного сопровождения."
      />
      {grid}
    </Section>
  );
}
