import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/payload-types"
import { ArrowIcon } from "@/components/Icons"
import { getMedia } from "@/lib/media"

export function ProductCard({ product }: { product: Product }) {
  const media = getMedia(product.image)
  return (
    <article className="group overflow-hidden rounded-3xl border border-[var(--line)] bg-white/45 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#2c1c1710]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--sand)]">
        {media?.url ? (
          <Image
            alt={media.alt}
            className="object-cover transition duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            src={media.url}
          />
        ) : (
          <div className="flex h-full items-center justify-center font-display text-2xl text-[var(--brown)]/35">Carne de Sol</div>
        )}
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider ${product.available ? "bg-green-800 text-white" : "bg-[var(--cream)] text-[var(--brown)]"}`}>
          {product.available ? "Disponível" : "Consulte disponibilidade"}
        </span>
      </div>
      <div className="p-6">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--red)]">{product.category}</p>
        <h3 className="font-display mt-3 text-3xl text-[var(--brown)]">{product.name}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-[var(--muted)]">{product.description}</p>
        <div className="mt-5 flex items-end justify-between gap-4 border-t border-[var(--line)] pt-5">
          <span>
            <small className="block text-[0.62rem] uppercase tracking-wider text-[var(--muted)]">Preço</small>
            <strong className="mt-1 block text-sm text-[var(--brown)]">
              {typeof product.price === "number"
                ? product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                : "Sob consulta"}
            </strong>
          </span>
          <Link aria-label={`Consultar ${product.name}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sand)] text-[var(--red)] transition group-hover:bg-[var(--red)] group-hover:text-white" href={`/contato?assunto=${encodeURIComponent(product.name)}`}>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}
