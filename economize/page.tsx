import type { Metadata } from "next"
import Link from "next/link"
import { ArrowIcon } from "@/components/Icons"
import { PageHero } from "@/components/PageHero"
import { getOffers } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Economize na Hora de Comprar",
  description: "Ofertas cadastradas, dicas para escolher cortes, planejar compras e aproveitar melhor as carnes sem desperdício.",
  alternates: { canonical: "/economize" },
}

export default async function SavingsPage() {
  const offers = await getOffers()
  return (
    <>
      <PageHero eyebrow="Economize na hora de comprar" title="Boa escolha também cabe no orçamento" description="Acompanhe ofertas confirmadas e veja dicas práticas para planejar compras, aproveitar cortes e reduzir desperdícios." image="/api/media/file/carne-na-brasa-original.jpg" imageAlt="Carne preparada na brasa" />
      <section className="section-pad">
        <div className="shell">
          <p className="eyebrow">Ofertas da semana</p><h2 className="section-title mt-5">Promoções cadastradas pela empresa</h2>
          {offers.length ? <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{offers.map((offer) => <article className="content-card p-7" key={offer.id}><p className="text-xs font-bold uppercase tracking-wider text-[var(--red)]">Oferta ativa</p><h3 className="font-display mt-4 text-3xl text-[var(--brown)]">{offer.title}</h3><p className="body-copy mt-4">{offer.description}</p>{offer.validUntil && <p className="mt-5 text-xs text-[var(--muted)]">Válida até {new Date(offer.validUntil).toLocaleDateString("pt-BR")}</p>}</article>)}</div> : <div className="content-card mt-10 p-8"><h3 className="font-display text-3xl text-[var(--brown)]">Nenhuma oferta publicada no momento</h3><p className="body-copy mt-3">Preços, descontos e validade só aparecem aqui depois de cadastrados pela empresa. Não publicamos promoções fictícias.</p></div>}
        </div>
      </section>
      <section className="bg-[var(--sand)] section-pad">
        <div className="shell"><p className="eyebrow">Compre melhor</p><h2 className="section-title mt-5">Quatro formas de evitar desperdício</h2><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Planeje por porções", "Considere quantas pessoas serão servidas e quais acompanhamentos completam a refeição."],
            ["Escolha pela técnica", "Cortes firmes funcionam bem em cozimentos lentos; cortes macios favorecem preparos rápidos."],
            ["Divida e congele", "Separe em porções, identifique a data e mantenha embalagem adequada para o congelamento."],
            ["Aproveite por inteiro", "Sobras cozidas podem virar recheios, arroz, farofa ou escondidinho, quando conservadas corretamente."],
          ].map(([title,text], index) => <article className="rounded-2xl bg-[var(--brown)] p-7 text-white" key={title}><span className="font-display text-3xl italic text-[var(--gold)]">0{index+1}</span><h3 className="font-display mt-6 text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{text}</p></article>)}
        </div></div>
      </section>
      <section className="section-pad"><div className="shell grid gap-8 lg:grid-cols-2"><div><p className="eyebrow">Cortes e ocasiões</p><h2 className="section-title mt-5">Compare pelo uso, não apenas pelo nome</h2></div><div className="space-y-4">{[["Refeição rápida","Bifes de coxão mole, alcatra ou contrafilé."],["Cozimento lento","Costela e cortes de fibras mais firmes."],["Churrasco","Contrafilé, maminha, picanha e cortes com gordura."],["Receita econômica","Patinho moído, cubos ou cortes escolhidos conforme a oferta real."]].map(([title,text]) => <div className="border-b border-[var(--line)] pb-4" key={title}><h3 className="font-display text-2xl text-[var(--brown)]">{title}</h3><p className="body-copy mt-2">{text}</p></div>)}</div></div><div className="shell mt-10"><Link className="button-primary" href="/produtos">Ver catálogo <ArrowIcon /></Link></div></section>
    </>
  )
}
