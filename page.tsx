import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowIcon } from "@/components/Icons"
import { ProductCard } from "@/components/ProductCard"
import { getMedia } from "@/lib/media"
import { getProducts, getSiteSettings } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Carne de Sol em Carlos Chagas MG",
  description: "Conheça a Carne de Sol: carnes, carne serenada, conteúdo culinário e restaurante em Carlos Chagas, Minas Gerais.",
  alternates: { canonical: "/" },
}

export default async function HomePage() {
  const [products, settings] = await Promise.all([getProducts(), getSiteSettings()])
  const featured = products.filter((product) => product.featured).slice(0, 3)
  const heroMedia = getMedia(featured[0]?.image)

  return (
    <>
      <section className="relative isolate flex min-h-[82vh] items-end overflow-hidden bg-[var(--brown)] text-white">
        {heroMedia?.url && (
          <Image alt={heroMedia.alt} className="absolute inset-0 -z-20 h-full w-full object-cover" fill priority sizes="100vw" src={heroMedia.url} />
        )}
        <div className="hero-shade absolute inset-0 -z-10" />
        <div className="grain absolute inset-0 -z-10 opacity-25" />
        <div className="shell grid gap-10 py-20 lg:grid-cols-[1fr_20rem] lg:items-end">
          <div className="max-w-5xl">
            <p className="eyebrow light">Sabor regional · Carlos Chagas, MG</p>
            <h1 className="font-display mt-6 text-5xl leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[6.4rem]">
              Carne de Sol:
              <em className="block font-normal text-[var(--gold-light)]">tradição, sabor e qualidade</em>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Seja bem-vindo à {settings.businessName}. Conheça nossa proposta de valorizar a carne, a gastronomia regional e produtos de qualidade em Carlos Chagas e região.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="button-primary" href="/produtos">Conheça nossos produtos <ArrowIcon /></Link>
              <Link className="button-outline" href="/cardapio">Confira o cardápio</Link>
              <Link className="button-outline" href="/contato">Como chegar</Link>
            </div>
          </div>
          <aside className="border-l border-white/20 pl-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-light)]">Nossa essência</p>
            <p className="font-display mt-3 text-2xl leading-snug">Da escolha do corte ao prato servido, cada detalhe importa.</p>
          </aside>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Carnes em destaque</p>
              <h2 className="section-title mt-5">Escolhas para diferentes momentos</h2>
            </div>
            <p className="body-copy max-w-xl lg:justify-self-end">Conheça o catálogo e consulte disponibilidade, preço e opções de corte diretamente com a equipe.</p>
          </div>
          {featured.length ? (
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div>
          ) : (
            <p className="content-card mt-12 p-8 text-[var(--muted)]">Os produtos em destaque serão publicados em breve.</p>
          )}
          <div className="mt-9 text-center"><Link className="button-primary" href="/produtos">Ver todas as carnes <ArrowIcon /></Link></div>
        </div>
      </section>

      <section className="bg-[var(--sand)] section-pad">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[32rem] overflow-hidden rounded-[2rem]">
            <Image alt="Carne de sol grelhando sobre brasas" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src="/api/media/file/carne-grelhada-original.jpg" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[var(--cream)]/95 p-6 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--red)]">Tradição com responsabilidade</p>
              <p className="font-display mt-2 text-2xl text-[var(--brown)]">Sabor regional e segurança alimentar caminham juntos.</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Cultura gastronômica</p>
            <h2 className="section-title mt-5">Uma história conservada pelo sabor</h2>
            <p className="body-copy mt-6">A carne de sol nasceu da necessidade de conservar alimentos e se transformou em referência da cozinha brasileira. Em Minas Gerais, encontra ingredientes e acompanhamentos que expressam a identidade regional.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Carne de sol", "Entenda sua origem e suas diferenças."],
                ["Carne serenada", "Conheça cortes e preparo seguro."],
                ["Como fazer", "Veja o guia culinário completo."],
                ["Nossa empresa", "Conheça missão, visão e valores."],
              ].map(([title, text], index) => (
                <Link className="content-card group p-5 transition hover:border-[var(--red)] hover:bg-white" href={["/historia-da-carne-de-sol","/carne-serenada","/como-fazer-carne-de-sol","/sobre"][index]} key={title}>
                  <strong className="font-display text-xl text-[var(--brown)]">{title}</strong>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brown)] py-20 text-white">
        <div className="shell">
          <p className="eyebrow light">Por que escolher</p>
          <div className="mt-9 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
            {[
              ["Qualidade", "Compromisso com procedência, conservação adequada e cuidado na seleção dos produtos."],
              ["Atendimento", "Uma proposta de atendimento próximo, respeitoso e atento às necessidades de cada cliente."],
              ["Tradição regional", "Valorização dos sabores de Minas Gerais, de Carlos Chagas e do Vale do Mucuri."],
            ].map(([title, text], index) => (
              <article className="bg-[var(--brown)] p-8 sm:p-10" key={title}>
                <span className="font-display text-4xl italic text-[var(--gold)]">0{index + 1}</span>
                <h2 className="font-display mt-8 text-3xl">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
