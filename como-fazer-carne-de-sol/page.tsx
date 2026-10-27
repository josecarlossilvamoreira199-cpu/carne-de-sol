import type { Metadata } from "next"
import Link from "next/link"
import { CtaBand } from "@/components/CtaBand"
import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Como Fazer Carne de Sol com Segurança",
  description: "Guia culinário de carne de sol: cortes, utensílios, preparo refrigerado, dessalga, cocção, acompanhamentos e erros comuns.",
  alternates: { canonical: "/como-fazer-carne-de-sol" },
}

const steps = [
  ["Escolha a carne", "Use peça bovina fresca, inspecionada, refrigerada e de procedência conhecida. Cortes de formato regular facilitam uma salga uniforme."],
  ["Prepare utensílios e bancada", "Higienize mãos, facas, tábua, recipiente e grade. Evite contato entre carne crua e alimentos prontos."],
  ["Aplique o sal com moderação", "Distribua o sal de forma uniforme. A quantidade e o tempo variam conforme corte, espessura, temperatura e objetivo; não trate uma proporção como garantia de segurança."],
  ["Faça a cura sob refrigeração", "Mantenha a carne coberta e refrigerada durante todo o processo doméstico. Uma grade limpa pode permitir circulação de ar sem exposição ambiental."],
  ["Avalie e dessalgue", "Lave a superfície. Cozinhe uma pequena amostra antes de provar. Se necessário, deixe de molho na geladeira e troque a água."],
  ["Cozinhe completamente", "Prepare em frigideira, churrasqueira, forno ou panela, controlando o ponto e evitando contaminação cruzada."],
]

export default function HowToPage() {
  return (
    <>
      <PageHero eyebrow="Como fazer carne de sol" title="Técnica, tempo e segurança em cada etapa" description="Um guia doméstico que respeita a tradição sem abrir mão de higiene, refrigeração e procedência." image="/api/media/file/carne-grelhada-original.jpg" imageAlt="Carne grelhando sobre carvão" />
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Antes de começar</p>
            <h2 className="section-title mt-5">Ingredientes e utensílios</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="content-card p-6"><h3 className="font-display text-2xl text-[var(--brown)]">Ingredientes</h3><ul className="mt-4 space-y-2 text-sm text-[var(--muted)]"><li>Carne bovina fresca e inspecionada</li><li>Sal apropriado para uso culinário</li><li>Água potável para eventual dessalga</li></ul></div>
              <div className="content-card p-6"><h3 className="font-display text-2xl text-[var(--brown)]">Utensílios</h3><ul className="mt-4 space-y-2 text-sm text-[var(--muted)]"><li>Faca e tábua higienizadas</li><li>Recipiente com tampa</li><li>Grade limpa e bandeja</li><li>Geladeira em temperatura segura</li></ul></div>
            </div>
          </div>
          <ol className="space-y-3">
            {steps.map(([title, text], index) => (
              <li className="grid gap-4 rounded-2xl bg-[var(--brown)] p-6 text-white sm:grid-cols-[3.5rem_1fr] sm:p-8" key={title}>
                <span className="font-display text-3xl italic text-[var(--gold-light)]">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-7 text-white/60">{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-[var(--sand)] section-pad">
        <div className="shell">
          <p className="eyebrow">Formas de cocção</p>
          <h2 className="section-title mt-5">Da frigideira à churrasqueira</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Frigideira", "Seque a superfície, use frigideira bem quente e sele porções sem amontoar. Finalize com cebola, se desejar."],
              ["Churrasqueira", "Use brasa estável e ajuste a distância do calor. Cortes com gordura pedem atenção para evitar labaredas."],
              ["Panela", "Cubos e peças mais firmes podem ser cozidos lentamente com cebola, alho e pouca água até atingir maciez."],
            ].map(([title, text]) => <article className="content-card p-7" key={title}><h3 className="font-display text-3xl text-[var(--brown)]">{title}</h3><p className="body-copy mt-4">{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <div><p className="eyebrow">Boas combinações</p><h2 className="section-title mt-5">Acompanhamentos</h2><p className="body-copy mt-6">Mandioca cozida ou frita, arroz, feijão, farofa, abóbora, vinagrete, queijo e cebola dourada equilibram sal, gordura e textura.</p></div>
          <div className="rounded-3xl bg-[var(--red)] p-8 text-white"><h2 className="font-display text-3xl">Erros comuns</h2><ul className="mt-5 space-y-3 text-sm leading-6 text-white/75"><li>Deixar carne crua em temperatura ambiente.</li><li>Acreditar que o sal elimina todos os riscos.</li><li>Provar a carne crua para verificar o sal.</li><li>Usar carne sem inspeção ou refrigeração adequada.</li><li>Cozinhar demais cortes magros e perder suculência.</li></ul></div>
        </div>
        <div className="shell mt-10 rounded-2xl border border-[var(--gold)] bg-[var(--gold)]/10 p-6 text-sm leading-7 text-[var(--muted)]"><strong className="text-[var(--brown)]">Aviso de segurança:</strong> a salga não torna a carne automaticamente segura para armazenamento prolongado fora da geladeira. Para produção comercial, siga legislação sanitária, controle de processo e orientação técnica. Consulte também a <Link className="text-[var(--red)] underline" href="/historia-da-carne-de-sol#fontes">lista de fontes oficiais</Link>.</div>
      </section>
      <CtaBand />
    </>
  )
}
