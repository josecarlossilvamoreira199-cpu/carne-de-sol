import type { Metadata } from "next"
import Image from "next/image"
import { CtaBand } from "@/components/CtaBand"
import { PageHero } from "@/components/PageHero"
import { getSiteSettings } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Sobre a Empresa",
  description: "Conheça a proposta, missão, visão e valores da Carne de Sol em Carlos Chagas, MG.",
  alternates: { canonical: "/sobre" },
}

export default async function AboutPage() {
  const settings = await getSiteSettings()
  return (
    <>
      <PageHero eyebrow="Sobre a empresa" title="Raízes locais, cuidado em cada escolha" description="Uma empresa voltada para carnes e gastronomia regional, com uma proposta de qualidade, confiança e proximidade." image="/api/media/file/ambiente-restaurante-original.jpg" imageAlt="Ambiente acolhedor com madeira" />
      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem]"><Image alt="Prato de carne preparado para servir" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src="/api/media/file/prato-carne-original.jpg" /></div>
          <div>
            <p className="eyebrow">Nossa proposta</p>
            <h2 className="section-title mt-5">Carne de qualidade e sabores que aproximam</h2>
            <p className="body-copy mt-7">{settings.about}</p>
            {!settings.foundingYear && (
              <div className="mt-7 rounded-2xl border border-dashed border-[var(--gold)] bg-[var(--gold)]/10 p-5 text-sm leading-6 text-[var(--muted)]">
                <strong className="text-[var(--brown)]">Conteúdo a personalizar:</strong> ano de fundação, história dos proprietários e endereço podem ser preenchidos no painel administrativo.
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="bg-[var(--sand)] section-pad">
        <div className="shell grid gap-5 md:grid-cols-3">
          {[
            ["Missão", "Oferecer produtos e experiências gastronômicas com qualidade, atendimento atencioso e respeito à cultura regional."],
            ["Visão", "Ser reconhecida em Carlos Chagas e região pela confiança, pelo cuidado com os alimentos e pela valorização dos sabores locais."],
            ["Valores", "Qualidade, respeito, transparência, higiene, segurança alimentar, responsabilidade e valorização das relações locais."],
          ].map(([title, text], index) => (
            <article className="content-card p-8" key={title}>
              <span className="font-display text-4xl italic text-[var(--red)]">0{index + 1}</span>
              <h2 className="font-display mt-7 text-3xl text-[var(--brown)]">{title}</h2>
              <p className="body-copy mt-4">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Compromissos</p>
            <h2 className="section-title mt-5">Qualidade também é cuidado diário</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Procedência e conservação adequadas", "Higiene em todas as etapas", "Respeito a clientes e fornecedores", "Valorização dos sabores regionais"].map((item) => (
              <div className="rounded-2xl bg-[var(--brown)] p-6 text-white" key={item}><span className="text-[var(--gold)]">◆</span><p className="mt-5 font-display text-xl">{item}</p></div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
