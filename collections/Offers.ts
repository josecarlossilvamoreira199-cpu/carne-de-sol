import { revalidateTag } from "next/cache"
import type { CollectionConfig } from "payload"
import { CACHE_TAGS } from "@/lib/cache-tags"

const refreshOffers = () => revalidateTag(CACHE_TAGS.offers, "max")

export const Offers: CollectionConfig = {
  slug: "offers",
  labels: { singular: "Oferta", plural: "Ofertas" },
  admin: {
    useAsTitle: "title",
    group: "Catálogo",
    defaultColumns: ["title", "active", "validFrom", "validUntil"],
  },
  access: { read: () => true },
  hooks: {
    afterChange: [refreshOffers],
    afterDelete: [refreshOffers],
  },
  fields: [
    { name: "title", label: "Título", type: "text", required: true },
    { name: "description", label: "Descrição", type: "textarea", required: true },
    { name: "terms", label: "Condições", type: "textarea" },
    {
      name: "products",
      label: "Produtos relacionados",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
    { name: "image", label: "Imagem", type: "upload", relationTo: "media" },
    {
      type: "row",
      fields: [
        { name: "originalPrice", label: "Preço anterior", type: "number", min: 0 },
        { name: "offerPrice", label: "Preço da oferta", type: "number", min: 0 },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "validFrom", label: "Válida a partir de", type: "date" },
        { name: "validUntil", label: "Válida até", type: "date" },
      ],
    },
    { name: "active", label: "Oferta ativa", type: "checkbox", defaultValue: false },
  ],
}
