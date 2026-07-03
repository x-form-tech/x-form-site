import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { posts, formatDate } from "@/lib/content";

export function BlogPreview({ limit = 3 }: { limit?: number }) {
  const items = posts.slice(0, limit);
  return (
    <Section className="bg-transparent">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Из блога"
          title="Полезные материалы"
          subtitle="Инструкции, сравнения тарифов и разборы кейсов по Битрикс24."
        />
        <Button href="/blog" variant="secondary" className="whitespace-nowrap">
          Все статьи
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((post) => (
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
              <h3 className="text-lg font-semibold leading-snug text-ink transition group-hover:text-brandink">
                {post.title}
              </h3>
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
    </Section>
  );
}
