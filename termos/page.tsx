import type { Metadata } from "next"
import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site Carne de Sol em Carlos Chagas, MG.",
  alternates: { canonical: "/termos" },
}

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Termos de uso" title="Informação clara e uso responsável" description="Condições gerais para utilização dos conteúdos e canais deste site." />
      <article className="section-pad"><div className="shell prose-site max-w-3xl">
        <h2>Natureza das informações</h2><p>O conteúdo do site tem finalidade institucional, comercial e educativa. Produtos, pratos, preços, promoções, horários e disponibilidade somente são válidos quando confirmados diretamente pela empresa.</p>
        <h2>Conteúdo culinário</h2><p>Guias e sugestões não substituem orientação sanitária ou técnica profissional. Condições de preparo variam conforme equipamento, corte e ambiente. A carne deve ter procedência conhecida e conservação adequada.</p>
        <h2>Pedidos e contato</h2><p>O formulário envia uma solicitação de contato; ele não confirma compra, reserva ou entrega. Integrações comerciais passam a valer somente após a empresa configurar e divulgar os canais oficiais.</p>
        <h2>Propriedade intelectual</h2><p>Textos autorais, identidade visual e organização do site não devem ser reproduzidos indevidamente. Fotografias de demonstração seguem os termos de seus respectivos fornecedores.</p>
        <h2>Atualizações</h2><p>Estes termos podem ser ajustados quando serviços, dados comerciais ou funcionalidades forem atualizados.</p>
      </div></article>
    </>
  )
}
