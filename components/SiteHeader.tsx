import Link from "next/link"
import { BrandMark } from "@/components/Icons"

const links = [
  ["Início", "/"],
  ["Sobre", "/sobre"],
  ["Produtos", "/produtos"],
  ["Cardápio", "/cardapio"],
  ["Economize", "/economize"],
  ["Receitas", "/como-fazer-carne-de-sol"],
  ["Contato", "/contato"],
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--brown)]/95 text-[var(--cream)] backdrop-blur-md">
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link className="flex items-center gap-3" href="/">
          <BrandMark className="h-10 w-10 text-[var(--gold)]" />
          <span className="leading-none">
            <strong className="font-display block text-2xl font-normal">Carne de Sol</strong>
            <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.22em] text-white/50">
              Carlos Chagas · MG
            </span>
          </span>
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 xl:flex">
          {links.map(([label, href]) => (
            <Link className="nav-link text-sm font-semibold text-white/70 hover:text-white" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button-primary hidden lg:inline-flex xl:hidden" href="/contato">
          Fale conosco
        </Link>
        <details className="mobile-menu relative xl:hidden">
          <summary
            aria-label="Abrir menu"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/20"
          >
            <span className="space-y-1.5">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          </summary>
          <nav
            aria-label="Navegação móvel"
            className="absolute right-0 top-14 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[var(--brown)] p-3 shadow-2xl"
          >
            {links.map(([label, href]) => (
              <Link className="block rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/10 hover:text-white" href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}
