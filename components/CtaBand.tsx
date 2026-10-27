import Link from "next/link"
import { ArrowIcon } from "@/components/Icons"

export function CtaBand({
  title = "Quer conhecer nossos produtos?",
  text = "Consulte disponibilidade, tire dúvidas e fale com a equipe.",
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="bg-[var(--red)] text-white">
      <div className="shell flex flex-col gap-7 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-2 text-sm text-white/70">{text}</p>
        </div>
        <Link className="button-light shrink-0" href="/contato">
          Fale conosco <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}
