import type { Metadata } from "next"
import { CtaBand } from "@/components/CtaBand"
import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "História da Carne de Sol no Brasil",
  description: "Conheça a origem da carne de sol, sua função histórica, diferenças para carne-seca e charque e presença na culinária regional.",
  alternates: { canonical: "/historia-da-carne-de-sol" },
}

export default function HistoryPage() {
  return (
    <>
      <PageHero eyebrow="História da carne de sol" title="Do método de conservação ao patrimônio da mesa" description="Um percurso pela técnica, pela cultura alimentar brasileira e pela presença da carne de sol em Minas Gerais." image="/api/media/file/carne-na-brasa-original.jpg" imageAlt="Carne sendo preparada na brasa" />
      <article className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[15rem_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--red)]">Neste artigo</p>
            <nav className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              <a className="block hover:text-[var(--red)]" href="#o-que-e">O que é</a>
              <a className="block hover:text-[var(--red)]" href="#origem">Origem e conservação</a>
              <a className="block hover:text-[var(--red)]" href="#diferencas">Diferenças</a>
              <a className="block hover:text-[var(--red)]" href="#minas">Minas e Vale do Mucuri</a>
              <a className="block hover:text-[var(--red)]" href="#fontes">Fontes consultadas</a>
            </nav>
          </aside>
          <div className="prose-site max-w-3xl">
            <p className="font-display text-2xl leading-relaxed text-[var(--brown)]">A carne de sol é uma preparação de carne bovina submetida a salga e desidratação parcial. Diferente de produtos muito secos e estáveis, ela preserva umidade, textura e sabor característicos — por isso exige refrigeração.</p>
            <h2 id="o-que-e">O que é carne de sol?</h2>
            <p>É um produto cárneo tradicional feito com salga moderada e uma etapa curta de cura. O nome não significa, necessariamente, exposição direta ao sol. A ventilação, a temperatura, o sal e o tempo participam do processo. As formas de fazer variam entre regiões, famílias e estabelecimentos.</p>
            <h2 id="origem">Origem e conservação</h2>
            <p>Salgar e secar carnes são técnicas antigas, anteriores à refrigeração moderna. No interior do Brasil, esses métodos ajudaram a transportar e conservar alimentos em contextos de longas distâncias e clima quente. Com o tempo, deixaram de ser apenas uma necessidade e passaram a integrar repertórios culinários próprios.</p>
            <p>Não há uma única receita histórica capaz de representar todas as tradições. A carne de sol se desenvolveu como prática regional, com diferenças de corte, quantidade de sal, tempo e ventilação. Hoje, a produção precisa conciliar saber tradicional e controle sanitário.</p>
            <h2 id="diferencas">Carne de sol, carne-seca e charque</h2>
            <div className="not-prose mt-7 grid gap-4 md:grid-cols-3">
              {[
                ["Carne de sol", "Salga mais leve, cura curta, maior umidade e conservação refrigerada."],
                ["Carne-seca", "Termo usado para carnes mais salgadas e desidratadas, com variações regionais."],
                ["Charque", "Produto padronizado, com salga intensa e desidratação mais pronunciada."],
              ].map(([title, text]) => <div className="content-card p-6" key={title}><h3 className="font-display !mt-0 text-2xl text-[var(--brown)]">{title}</h3><p className="!mt-3 text-sm">{text}</p></div>)}
            </div>
            <h2>Presença na gastronomia brasileira</h2>
            <p>A carne de sol aparece em pratos com mandioca, arroz, feijão, farofa, queijo, abóbora e cebola. Pode ser grelhada, assada, cozida, desfiada ou usada em recheios. Esses encontros mostram como uma técnica de conservação foi incorporada a diferentes cozinhas regionais.</p>
            <h2 id="minas">Minas Gerais, Vale do Mucuri e Carlos Chagas</h2>
            <p>A cozinha mineira valoriza ingredientes locais, preparos lentos e refeições compartilhadas. No Vale do Mucuri, a proximidade cultural com outros territórios do leste brasileiro favorece trocas culinárias. A carne de sol pode integrar essa gastronomia ao lado de mandioca, feijão e farinhas, mas tradições específicas de Carlos Chagas devem ser documentadas com moradores, cozinheiros e produtores locais antes de serem afirmadas como fatos.</p>
            <h2 id="fontes">Fontes e referências</h2>
            <ul>
              <li><a href="https://www.embrapa.br/gado-de-corte" rel="noreferrer" target="_blank">Embrapa Gado de Corte</a> — pesquisa sobre produção e qualidade da carne bovina.</li>
              <li><a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos" rel="noreferrer" target="_blank">Anvisa — Alimentos</a> — orientações e normas de segurança alimentar.</li>
              <li><a href="https://www.gov.br/agricultura/pt-br/assuntos/inspecao/produtos-animal" rel="noreferrer" target="_blank">MAPA — Produtos de origem animal</a> — inspeção e regulamentação.</li>
              <li><a href="https://www.gov.br/iphan/pt-br" rel="noreferrer" target="_blank">IPHAN</a> — patrimônio cultural e referências sobre saberes tradicionais.</li>
              <li><a href="https://www.scielo.br/" rel="noreferrer" target="_blank">SciELO Brasil</a> — base de periódicos científicos para pesquisa complementar.</li>
            </ul>
            <p><small>Conteúdo original de caráter educativo. As fontes institucionais foram indicadas para aprofundamento; práticas regionais podem variar.</small></p>
          </div>
        </div>
      </article>
      <CtaBand title="Da história para a cozinha" text="Veja o guia de preparo doméstico com orientações de segurança." />
    </>
  )
}
