import Link from "next/link"
import { BrandMark } from "@/components/Icons"

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-[var(--sand)] py-20">
      <div className="shell text-center">
        <BrandMark className="mx-auto h-16 w-16 text-[var(--red)]" />
        <p className="eyebrow mt-8 justify-center">Erro 404</p>
        <h1 className="font-display mt-5 text-5xl text-[var(--brown)] sm:text-7xl">Esta página saiu do cardápio</h1>
        <p className="body-copy mx-auto mt-6 max-w-xl">O endereço pode ter mudado ou a página não existe. Volte ao início para encontrar produtos, cardápio e conteúdos.</p>
        <Link className="button-primary mt-8" href="/">Voltar ao início</Link>
      </div>
    </section>
  )
}
