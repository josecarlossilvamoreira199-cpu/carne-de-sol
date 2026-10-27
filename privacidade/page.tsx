import type { Metadata } from "next"
import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade e proteção de dados do site Carne de Sol.",
  alternates: { canonical: "/privacidade" },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacidade" title="Seus dados merecem cuidado" description="Entenda quais informações são coletadas pelo site e como são utilizadas." />
      <article className="section-pad"><div className="shell prose-site max-w-3xl">
        <p>Esta política descreve o tratamento de dados realizado pelo site Carne de Sol, em conformidade com os princípios da Lei Geral de Proteção de Dados Pessoais (LGPD).</p>
        <h2>Dados coletados</h2><p>O formulário de contato pode coletar nome, telefone, e-mail, assunto e mensagem. O envio depende de consentimento expresso. Não solicitamos documentos, informações bancárias ou outros dados sensíveis.</p>
        <h2>Finalidade</h2><p>Os dados são usados exclusivamente para responder ao contato, fornecer informações solicitadas e acompanhar o atendimento. Eles não devem ser vendidos ou usados para finalidades incompatíveis.</p>
        <h2>Armazenamento e acesso</h2><p>As mensagens são armazenadas no sistema administrativo protegido do site e acessíveis apenas a pessoas autorizadas pela empresa. A retenção deve se limitar ao período necessário para o atendimento e obrigações aplicáveis.</p>
        <h2>Direitos do titular</h2><p>Você pode solicitar confirmação do tratamento, acesso, correção ou exclusão dos dados, observadas as bases legais e obrigações de conservação. O canal de contato para essas solicitações será o contato comercial configurado pela empresa.</p>
        <h2>Analytics e cookies</h2><p>O site está preparado para Google Analytics, mas o recurso somente é ativado após a configuração de um identificador válido. Quando utilizado, a empresa deve informar cookies aplicáveis e avaliar a necessidade de consentimento.</p>
        <h2>Atualizações</h2><p>Esta política poderá ser atualizada quando novos serviços forem conectados ou quando os dados comerciais definitivos forem preenchidos.</p>
      </div></article>
    </>
  )
}
