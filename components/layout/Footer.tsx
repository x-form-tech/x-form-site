import Link from "next/link";
import { Phone, Mail, Send, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { footerNav } from "@/lib/nav";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-night text-white/70">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Внедрение, автоматизация и поддержка Битрикс24 для отделов продаж.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-white/40 hover:text-white"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-white/40 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Контакты</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
              </li>
              <li className="text-white/50">{site.workingHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. {site.legalName}. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link href="/politika" className="transition hover:text-white/80">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
