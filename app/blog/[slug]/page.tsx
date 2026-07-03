import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts, formatDate } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Блог", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-16 md:py-20">
        <div className="container-x max-w-2xl">
          <div className="mb-8 flex items-center gap-2 text-sm text-ink-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft">
            <p className="text-xl text-ink">{post.excerpt}</p>
            {/* TODO: заменить на реальное тело статьи (позже — из CMS/MDX). */}
            <p>
              Текст статьи в наполнении. Здесь будет развёрнутый материал по теме
              «{post.title}» — с примерами, скриншотами Битрикс24 и практическими
              рекомендациями.
            </p>
            <p>
              Пока это черновик-заглушка. Замените его на реальный контент — блог
              решает задачи SEO и прогрева аудитории.
            </p>
          </div>

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-brandink transition hover:opacity-80"
          >
            <ArrowLeft className="h-4 w-4" />
            Все статьи
          </Link>
        </div>
      </article>

      <CtaBanner title="Нужна помощь с Битрикс24?" />
    </>
  );
}
