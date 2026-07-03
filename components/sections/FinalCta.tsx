import { Send, MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="lead"
      className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-night-soft to-night py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-[420px] w-[420px] rounded-full bg-brand-600/30 blur-[130px]" />
      <div className="pointer-events-none absolute -top-24 left-0 h-[320px] w-[320px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="text-white">
          <span className="eyebrow mb-4 text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Оставить заявку
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            Обсудим вашу задачу и предложим решение
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
            Расскажите, что нужно автоматизировать — проведём бесплатный аудит и
            дадим смету с фиксированной ценой.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-2 text-white/80 transition hover:text-white"
            >
              <Phone className="h-5 w-5 text-brand-300" />
              {site.phone}
            </a>
            <div className="flex gap-3">
              <a
                href={site.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
              >
                <Send className="h-4 w-4" /> Telegram
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="gradient-border rounded-3xl border border-line bg-panel/70 p-6 shadow-lift backdrop-blur-md md:p-8">
          <LeadForm withTask />
        </div>
      </div>
    </section>
  );
}
