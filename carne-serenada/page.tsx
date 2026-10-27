import type { Metadata } from "next"
import Image from "next/image"
import { CtaBand } from "@/components/CtaBand"
import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Carne Serenada: Cortes e Preparo Seguro",
  description: "O que é carne serenada, diferenças regionais, melhores cortes e formas seguras de preparo e conservação.",
  alternates: { canonical: "/carne-serenada" },
}

const cuts = [
  ["Alcatra", "Versátil e relativamente macia; funciona em mantas, bifes e grelha."],
  ["Contrafilé", "Saboroso, com gordura que favorece suculência no preparo rápido."],
  ["Coxão mole", "Opção flexível para bifes, acebolados e diferentes cocções."],
  ["Patinho", "Mais magro; pede atenção ao ponto para não ressecar."],
  ["Maminha", "Boa opção para preparações suculentas e peças assadas."],
  ["Picanha", "Alternativa especial, com capa de gordura e sabor marcante."],
]

export default function SerenadedBeefPage() {
  return (
    <>
      <PageHero eyebrow="Carne serenada" title="Cortes, tradição e preparo responsável" description="O termo muda de região para região. Conheça suas características culinárias e uma adaptação segura para a cozinha doméstica." image="/api/media/file/carne-na-brasa-original.jpg" imageAlt="Carne preparada sobre a brasa" />
      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div><p className="eyebrow">Entenda o termo</p><h2 className="section-title mt-5">O que é carne serenada?</h2><p className="body-copy mt-7">Carne serenada é uma denominação regional associada a carnes levemente salgadas e parcialmente desidratadas. Historicamente, o nome remete ao descanso em ambiente ventilado durante a noite. Essa descrição registra uma prática cultural — não uma recomendação para deixar carne crua exposta.</p><p className="body-copy mt-4">Na produção doméstica segura, o efeito de secagem superficial deve ser buscado sob refrigeração, com recipientes limpos, temperatura controlada e proteção contra contaminação. Em estabelecimentos comerciais, o processo deve seguir controles sanitários e técnicos.</p></div>
          <div className="grid grid-cols-2 gap-4"><div className="relative min-h-80 overflow-hidden rounded-3xl"><Image alt="Carne grelhando sobre carvão" className="object-cover" fill sizes="25vw" src="/api/media/file/carne-grelhada-original.jpg" /></div><div className="relative mt-10 min-h-80 overflow-hidden rounded-3xl"><Image alt="Prato com carne preparado para servir" className="object-cover" fill sizes="25vw" src="/api/media/file/prato-carne-original.jpg" /></div></div>
        </div>
      </section>
      <section className="bg-[var(--sand)] section-pad">
        <div className="shell"><p className="eyebrow">Escolha da peça</p><h2 className="section-title mt-5">Seis cortes para resultados diferentes</h2><p className="body-copy mt-6 max-w-2xl">A melhor escolha depende da técnica, da gordura, da espessura, da qualidade da peça e da textura desejada.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{cuts.map(([name, text], index) => <article className="content-card p-7" key={name}><span className="font-display text-3xl italic text-[var(--red)]">0{index + 1}</span><h3 className="font-display mt-6 text-3xl text-[var(--brown)]">{name}</h3><p className="body-copy mt-3">{text}</p></article>)}</div>
        </div>
      </section>
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">Processo didático</p><h2 className="section-title mt-5">Do corte ao prato</h2></div>
          <ol className="space-y-4">{[
            ["Seleção", "Escolha carne inspecionada, refrigerada e com aparência normal."],
            ["Preparo", "Limpe apenas excessos e mantenha espessura regular."],
            ["Salga", "Tempere de forma uniforme, considerando corte e resultado desejado."],
            ["Conservação controlada", "Mantenha sob refrigeração. Não exponha ao sereno nem deixe em temperatura ambiente."],
            ["Cocção", "Grelhe, asse ou sele, ajustando o ponto conforme teor de gordura."],
          ].map(([title,text], index) => <li className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[var(--line)] pb-5" key={title}><span className="font-display text-2xl text-[var(--gold)]">{index + 1}</span><div><h3 className="font-display text-2xl text-[var(--brown)]">{title}</h3><p className="body-copy mt-2">{text}</p></div></li>)}</ol>
        </div>
      </section>
      <section className="bg-[var(--brown)] py-20 text-white"><div className="shell"><p className="eyebrow light">Sugestões de pratos</p><div className="mt-9 grid gap-4 md:grid-cols-3">{["Serenada acebolada com mandioca", "Carne serenada na chapa com legumes", "Arroz cremoso com carne serenada"].map((title) => <div className="rounded-2xl border border-white/10 p-7" key={title}><p className="font-display text-2xl">{title}</p><span className="mt-4 block text-xs text-white/45">Sugestão culinária — consulte disponibilidade no cardápio</span></div>)}</div></div></section>
      <CtaBand />
    </>
  )
}
