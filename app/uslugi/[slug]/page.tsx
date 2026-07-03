import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { services, getService } from "@/lib/services";
import { PageHero } from "@/components/sections/PageHero";
import { Cases } from "@/components/sections/Cases";
import { FinalCta } from "@/components/sections/FinalCta";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Услуга"
        title={service.title}
        subtitle={service.short}
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/uslugi" },
          { label: service.title },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-ink">
              Что входит в услугу
            </h2>
            {/* TODO: заменить перечень на развёрнутые тексты по каждому блоку */}
            <ul className="mt-6 space-y-3">
              {service.blocks.map((block) => (
                <li
                  key={block}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-surface-muted/50 p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-[15px] text-ink-soft">{block}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-dashed border-line bg-panel/50 p-5 text-sm text-ink-muted">
              Раздел в наполнении: здесь будут развёрнутые описания, сроки,
              стоимость и FAQ по услуге «{service.title}».
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="gradient-border rounded-3xl border border-line bg-panel/70 p-6 shadow-soft backdrop-blur-md">
              <p className="text-sm text-ink-muted">Стоимость</p>
              <p className="mt-1 text-2xl font-semibold text-ink">
                рассчитывается индивидуально
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Зависит от объёма задач и текущего состояния Битрикс24. Оценим
                бесплатно после короткого созвона.
              </p>
              <Button href="/kontakty" size="lg" className="mt-6 w-full">
                Обсудить задачу
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 rounded-3xl border border-line bg-surface-muted/50 p-6">
              <p className="text-sm font-semibold text-ink">Другие услуги</p>
              <ul className="mt-3 space-y-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/uslugi/${o.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-ink-soft transition hover:text-brandink"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Cases limit={2} />
      <FinalCta />
    </>
  );
}
