import { Section, SectionHeader } from "@/components/ui/Section";
import { advantages } from "@/lib/content";

export function WhyUs() {
  return (
    <Section className="bg-transparent">
      <SectionHeader
        eyebrow="Почему клиенты выбирают нас"
        title="Доверие, подтверждённое делом"
        subtitle="Мы не апеллируем к бейджам — говорим цифрами, гарантиями и прозрачностью процесса."
        align="center"
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map(({ icon: Icon, title, text }) => (
          <div key={title} className="card">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
