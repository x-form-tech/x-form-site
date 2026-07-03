import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cases, posts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/uslugi",
    "/keysy",
    "/ceny",
    "/o-kompanii",
    "/blog",
    "/kontakty",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/uslugi/${s.slug}`,
    lastModified: now,
  }));

  const caseRoutes = cases.map((c) => ({
    url: `${base}/keysy/${c.slug}`,
    lastModified: now,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...postRoutes];
}
