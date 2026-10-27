import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowIcon } from "@/components/Icons"
import { PageHero } from "@/components/PageHero"
import { getMedia } from "@/lib/media"
import { getMenuItems } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Restaurante e Cardápio",
  description: "Consulte o cardápio do restaurante Carne de Sol em Carlos Chagas, com pratos, acompanhamentos, porções e disponibilidade.",
  alternates: { canonical: "/cardapio" },
}

const labels: Record<string, string> = {
  "carne-de-sol": "Pratos com carne de sol",
  "carne-serenada": "Pratos com carne serenada",
  refeicoes: "Refeições completas",
  grelhados: "Carnes grelhadas",
  acompanhamentos: "Acompanhamentos",
  bebidas: "Bebidas",
  compartilhar: "Para compartilhar",
}

export default async function MenuPage() {
  const items = await getMenuItems()
  const grouped = Object.entries(labels)
    .map(([key, label]) => ({ key, label, items: items.filter((item) => item.category === key) }))
    .filter((group) => group.items.length)

  return (
    <>
      <PageHero eyebrow="Restaurante e cardápio" title="Sabores regionais para compartilhar" description="Conheça os pratos cadastrados pela empresa e consulte preços, porções e disponibilidade antes de fazer seu pedido." image="/api/media/file/prato-carne-original.jpg" imageAlt="Prato de carne preparado para servir" />
      <section className="section-pad">
        <div className="shell">
          {grouped.length ? grouped.map((group) => (
            <section className="mb-16" key={group.key}>
              <h2 className="font-display text-4xl text-[var(--brown)]">{group.label}</h2>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {group.items.map((item) => {
                  const media = getMedia(item.image)
                  return (
                    <article className="content-card grid overflow-hidden sm:grid-cols-[11rem_1fr]" key={item.id}>
                      <div className="relative min-h-48 bg-[var(--sand)]">{media?.url && <Image alt={media.alt} className="object-cover" fill sizes="176px" src={media.url} />}</div>
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4"><h3 className="font-display text-2xl text-[var(--brown)]">{item.name}</h3><strong className="text-sm text-[var(--red)]">{typeof item.price === "number" ? item.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}) : "Sob consulta"}</strong></div>
                        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                        {item.sides && <p className="mt-2 text-xs text-[var(--muted)]"><strong>Acompanha:</strong> {item.sides}</p>}
                        <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--red)]" href="/contato">Consultar disponibilidade <ArrowIcon /></Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          )) : (
            <div className="content-card mx-auto max-w-3xl p-10 text-center sm:p-14">
              <p className="eyebrow justify-center">Cardápio em preparação</p>
              <h2 className="font-display mt-5 text-4xl text-[var(--brown)]">Os pratos serão publicados em breve</h2>
              <p className="body-copy mt-5">A empresa ainda não confirmou pratos, preços, horários ou modalidades de atendimento. Essas informações podem ser cadastradas no painel administrativo.</p>
              <Link className="button-primary mt-7" href="/contato">Solicitar informações <ArrowIcon /></Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
