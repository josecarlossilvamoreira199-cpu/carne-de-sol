import Link from "next/link"
import type { SiteSetting } from "@/payload-types"
import { BrandMark } from "@/components/Icons"

const footerLinks = [
  ["Início", "/"],
  ["Sobre", "/sobre"],
  ["Produtos", "/produtos"],
  ["Cardápio", "/cardapio"],
  ["Economias e ofertas", "/economize"],
  ["Receitas", "/como-fazer-carne-de-sol"],
  ["Contato", "/contato"],
] as const

export function SiteFooter({ settings }: { settings: SiteSetting }) {
  const address = [
    settings.location?.street,
    settings.location?.district,
    settings.location?.city,
    settings.location?.state,
  ]
    .filter(Boolean)
    .join(" · ")

  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className="shell py-14">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <BrandMark className="h-12 w-12 text-[var(--gold)]" />
              <strong className="font-display text-3xl font-normal">{settings.businessName}</strong>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              Carnes, sabores regionais e informação de qualidade para Carlos Chagas e o Vale do Mucuri.
            </p>
          </div>
          <div>
            <p className="footer-label">Navegue</p>
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-white/60">
              {footerLinks.map(([label, href]) => (
                <Link className="hover:text-white" href={href} key={href}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-label">Contato</p>
            <div className="mt-5 space-y-2 text-sm leading-6 text-white/60">
              <p>{address || "Endereço comercial a confirmar"}</p>
              <p>{settings.contact?.phone || "Telefone a confirmar"}</p>
              <p>{settings.contact?.email || "E-mail comercial a confirmar"}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-7 border-b border-white/10 py-8 text-sm sm:grid-cols-3">
          <div><span className="footer-label">Professor</span><strong className="mt-2 block font-medium">André Gomes</strong></div>
          <div><span className="footer-label">Aluno</span><strong className="mt-2 block font-medium">José Carlos</strong></div>
          <div><span className="footer-label">Escola</span><strong className="mt-2 block font-medium">Escola Estadual Dr. João Beraldo</strong></div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Carne de Sol. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacidade">Política de Privacidade</Link>
            <Link href="/termos">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
