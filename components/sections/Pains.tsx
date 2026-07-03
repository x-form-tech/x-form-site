import { AlertCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { pains } from "@/lib/content";

export function Pains() {
  return (
    <Section className="bg-transparent">
      <SectionHeader
        eyebrow="Знакомая ситуация?"
        title="Узнаёте своё?"
        subtitle="Так выглядит бизнес без выстроенной CRM. Каждый пункт — потерянные деньги и время."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((pain) => (
          <div
            key={pain}
            className="flex items-start gap-3 rounded-2xl border border-line bg-surface-muted/60 p-5"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
            <p className="text-[15px] leading-relaxed text-ink-soft">{pain}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
