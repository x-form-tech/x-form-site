import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { posts, formatDate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Инструкции по Битрикс24, сравнения тарифов и CRM, разборы кейсов и новости обновлений.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Блог"
        title="Полезные материалы по Битрикс24"
        subtitle="Инструкции, сравнения и разборы — чтобы принимать решения об автоматизации осознанно."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Блог" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel/70 shadow-soft backdrop-blur-sm transition hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-glow"
            >
              <div className="relative flex h-40 items-end bg-gradient-to-br from-brand-500 to-accent p-5">
                <div className="bg-grid absolute inset-0 opacity-20" />
                <span className="relative rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-700">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-semibold leading-snug text-ink transition group-hover:text-brandink">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
