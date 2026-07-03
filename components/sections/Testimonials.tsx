import { Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section className="bg-surface-muted/40">
      <SectionHeader
        eyebrow="Отзывы"
        title="Что говорят клиенты"
        subtitle="Живые отзывы руководителей и собственников бизнеса."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="flex h-full flex-col rounded-2xl border border-line bg-panel/70 p-6 shadow-soft backdrop-blur-sm"
          >
            <Quote className="h-8 w-8 text-brand-200" />
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
                {t.author.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">
                  {t.author}
                </span>
                <span className="block text-xs text-ink-muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
