import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { cases } from "@/lib/content";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = cases.find((c) => c.slug === params.slug);
  if (!item) return {};
  return { title: item.title, description: item.result };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const item = cases.find((c) => c.slug === params.slug);
  if (!item) notFound();

  const rows = [
    { label: "Задача", value: item.task },
    { label: "Решение", value: item.solution },
    { label: "Результат", value: item.result },
  ];

  return (
    <>
      <PageHero
        eyebrow={item.tag}
        title={item.title}
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Кейсы", href: "/keysy" },
          { label: item.title },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <div className="gradient-border mb-10 rounded-3xl border border-white/10 bg-gradient-to-br from-night-soft to-night px-8 py-10 text-center text-white">
            <div className="text-4xl font-semibold md:text-5xl">
              {item.metric}
            </div>
            <p className="mt-2 text-white/70">{item.result}</p>
          </div>

          <dl className="space-y-6">
            {rows.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl border border-line bg-panel/70 p-6 shadow-soft backdrop-blur-sm"
              >
                <dt className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                  {r.label}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>

        </div>
      </section>

      <FinalCta />
    </>
  );
}
