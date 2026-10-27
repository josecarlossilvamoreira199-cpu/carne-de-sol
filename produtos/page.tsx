import type { Metadata } from "next"
import { CtaBand } from "@/components/CtaBand"
import { PageHero } from "@/components/PageHero"
import { ProductExplorer } from "@/components/ProductExplorer"
import { getProducts } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Produtos e Carnes",
  description: "Conheça carnes bovinas, carne de sol, carne serenada e cortes para churrasco em Carlos Chagas. Consulte preço e disponibilidade.",
  alternates: { canonical: "/produtos" },
}

export default async function ProductsPage() {
  const products = await getProducts()
  const bestSellers = products.filter((product) => product.bestSeller)
  return (
    <>
      <PageHero eyebrow="Nossos produtos" title="Carnes para cada receita e ocasião" description="Explore o catálogo, filtre por categoria e consulte disponibilidade e preço com a equipe." image="/api/media/file/carne-grelhada-original.jpg" imageAlt="Carne grelhando sobre carvão" />
      <section className="section-pad"><div className="shell"><ProductExplorer products={products} /></div></section>
      <section className="bg-[var(--sand)] py-16">
        <div className="shell">
          <p className="eyebrow">Mais vendidos</p>
          <h2 className="font-display mt-4 text-4xl text-[var(--brown)]">Seleção baseada em dados reais</h2>
          {bestSellers.length ? <p className="body-copy mt-4">Os produtos marcados pela empresa aparecem aqui automaticamente.</p> : <p className="body-copy mt-4 max-w-2xl">Nenhum produto foi marcado como mais vendido. A empresa poderá ativar esta seleção no painel quando possuir dados reais de saída.</p>}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
