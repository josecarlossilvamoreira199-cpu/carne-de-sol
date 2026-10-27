"use client"

import { useMemo, useState } from "react"
import type { Product } from "@/payload-types"
import { ProductCard } from "@/components/ProductCard"

const categories = [
  ["todos", "Todos"],
  ["curadas", "Carnes curadas"],
  ["cortes", "Cortes bovinos"],
  ["churrasco", "Churrasco"],
  ["outros", "Outros"],
] as const

export function ProductExplorer({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("todos")
  const [sort, setSort] = useState("featured")

  const visible = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR")
    return products
      .filter((product) => category === "todos" || product.category === category)
      .filter((product) => !normalized || `${product.name} ${product.description}`.toLocaleLowerCase("pt-BR").includes(normalized))
      .sort((a, b) => {
        if (sort === "name") return a.name.localeCompare(b.name, "pt-BR")
        if (sort === "available") return Number(b.available) - Number(a.available)
        return Number(b.featured) - Number(a.featured)
      })
  }, [category, products, query, sort])

  return (
    <>
      <div className="content-card grid gap-4 p-5 md:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--brown)]">Buscar produto</span>
          <input
            className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--red)]"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex.: alcatra, carne de sol..."
            type="search"
            value={query}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--brown)]">Organizar</span>
          <select className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--red)]" onChange={(event) => setSort(event.target.value)} value={sort}>
            <option value="featured">Destaques primeiro</option>
            <option value="name">Ordem alfabética</option>
            <option value="available">Disponíveis primeiro</option>
          </select>
        </label>
      </div>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
        {categories.map(([value, label]) => (
          <button
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${category === value ? "bg-[var(--brown)] text-white" : "border border-[var(--line)] text-[var(--muted)] hover:border-[var(--brown)]"}`}
            key={value}
            onClick={() => setCategory(value)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-7 text-sm text-[var(--muted)]">{visible.length} produto(s) encontrado(s)</p>
      {visible.length ? (
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <div className="content-card mt-5 p-10 text-center">
          <h2 className="font-display text-3xl text-[var(--brown)]">Nenhum produto encontrado</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">Tente outro termo ou selecione uma categoria diferente.</p>
        </div>
      )}
    </>
  )
}
