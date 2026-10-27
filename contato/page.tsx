import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/PageHero"
import { getSiteSettings } from "@/lib/site-data"
import { ContactForm } from "./ContactForm"

export const metadata: Metadata = {
  title: "Contato e Localização",
  description: "Entre em contato com a Carne de Sol em Carlos Chagas, MG. Consulte produtos, cardápio, localização e horários.",
  alternates: { canonical: "/contato" },
}

export default async function ContactPage() {
  const settings = await getSiteSettings()
  const whatsapp = settings.contact?.whatsapp?.replace(/\D/g, "")
  const address = [settings.location?.street, settings.location?.district, settings.location?.city, settings.location?.state, settings.location?.postalCode].filter(Boolean).join(", ")
  const whatsappHref = whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent("Olá! Gostaria de conhecer os produtos e o cardápio da Carne de Sol.")}` : null
  return (
    <>
      <PageHero eyebrow="Contato e localização" title="Vamos conversar?" description="Use os canais confirmados abaixo ou envie uma mensagem para consultar produtos, cardápio e atendimento." image="/api/media/file/ambiente-restaurante-original.jpg" imageAlt="Ambiente acolhedor com madeira" />
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Informações comerciais</p><h2 className="font-display mt-5 text-4xl text-[var(--brown)]">Carne de Sol</h2>
            <dl className="mt-8 space-y-6">
              <Info label="Endereço" value={address || "A confirmar pela empresa"} />
              <Info label="Telefone" value={settings.contact?.phone || "A confirmar pela empresa"} />
              <Info label="E-mail" value={settings.contact?.email || "A confirmar pela empresa"} />
              <Info label="Horários" value={settings.openingHours?.length ? settings.openingHours.map((item) => `${item.days}: ${item.hours}`).join(" · ") : "A confirmar pela empresa"} />
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              {whatsappHref ? <a className="button-primary" href={whatsappHref} rel="noreferrer" target="_blank">Abrir WhatsApp</a> : <span className="rounded-full bg-[var(--sand)] px-5 py-3 text-sm text-[var(--muted)]">WhatsApp ainda não configurado</span>}
              {settings.location?.mapUrl ? <a className="button-outline text-[var(--brown)]" href={settings.location.mapUrl} rel="noreferrer" target="_blank">Como chegar</a> : null}
            </div>
            <p className="body-copy mt-8">{settings.location?.directions || "As instruções de chegada serão exibidas aqui quando o endereço comercial for confirmado."}</p>
          </div>
          <div><p className="eyebrow">Envie uma mensagem</p><h2 className="font-display mt-5 text-4xl text-[var(--brown)]">Como podemos ajudar?</h2><div className="mt-7"><ContactForm /></div><p className="mt-4 text-xs leading-5 text-[var(--muted)]">Não envie dados sensíveis. Ao enviar, você concorda com nossa <Link className="underline" href="/privacidade">Política de Privacidade</Link>.</p></div>
        </div>
      </section>
      <section className="bg-[var(--sand)] py-16"><div className="shell"><h2 className="font-display text-3xl text-[var(--brown)]">Mapa e localização</h2>{settings.location?.mapUrl ? <div className="mt-6 rounded-3xl bg-white p-8"><p className="body-copy">A localização foi configurada pela empresa.</p><a className="button-primary mt-5" href={settings.location.mapUrl} rel="noreferrer" target="_blank">Abrir mapa</a></div> : <div className="content-card mt-6 p-8"><p className="body-copy">O mapa interativo será disponibilizado após a empresa informar endereço e link corretos. Nenhuma coordenada foi inventada.</p></div>}</div></section>
    </>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="border-b border-[var(--line)] pb-5"><dt className="text-xs font-bold uppercase tracking-widest text-[var(--red)]">{label}</dt><dd className="mt-2 text-sm leading-6 text-[var(--muted)]">{value}</dd></div>
}
