import Image from "next/image"
import Link from "next/link"

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description: string
  image?: string
  imageAlt?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--brown)] py-24 text-white sm:py-32">
      {image && (
        <Image
          alt={imageAlt || ""}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
          fill
          priority
          sizes="100vw"
          src={image}
        />
      )}
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="grain absolute inset-0 -z-10 opacity-25" />
      <div className="shell">
        <p className="eyebrow light">{eyebrow}</p>
        <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.95] tracking-[-0.035em] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{description}</p>
        <nav aria-label="Caminho da página" className="mt-8 flex items-center gap-2 text-xs text-white/45">
          <Link className="hover:text-white" href="/">Início</Link>
          <span>/</span>
          <span className="text-white/75">{eyebrow}</span>
        </nav>
      </div>
    </section>
  )
}
