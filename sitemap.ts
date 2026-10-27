import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const routes = [
    "",
    "/sobre",
    "/historia-da-carne-de-sol",
    "/como-fazer-carne-de-sol",
    "/carne-serenada",
    "/produtos",
    "/cardapio",
    "/economize",
    "/contato",
    "/privacidade",
    "/termos",
  ]
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/produtos" || route === "/cardapio" ? 0.9 : 0.7,
  }))
}
