import { revalidateTag } from "next/cache"
import type { CollectionConfig } from "payload"
import { CACHE_TAGS } from "@/lib/cache-tags"

const refreshProducts = () => revalidateTag(CACHE_TAGS.products, "max")

export const Products: CollectionConfig = {
  slug: "products",
  labels: { singular: "Produto", plural: "Produtos" },
  admin: {
    useAsTitle: "name",
    group: "Catálogo",
    defaultColumns: ["name", "category", "available", "featured"],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [refreshProducts],
    afterDelete: [refreshProducts],
  },
  fields: [
    { name: "name", label: "Nome", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { description: "Identificador curto, sem espaços. Ex.: contrafile." },
    },
    {
      name: "category",
      label: "Categoria",
      type: "select",
      required: true,
      options: [
        { label: "Carnes curadas", value: "curadas" },
        { label: "Cortes bovinos", value: "cortes" },
        { label: "Churrasco", value: "churrasco" },
        { label: "Outros", value: "outros" },
      ],
    },
    { name: "description", label: "Descrição", type: "textarea", required: true },
    { name: "cookingSuggestion", label: "Sugestão de preparo", type: "textarea" },
    { name: "image", label: "Imagem", type: "upload", relationTo: "media" },
    {
      type: "row",
      fields: [
        { name: "price", label: "Preço", type: "number", min: 0 },
        {
          name: "unit",
          label: "Unidade",
          type: "text",
          admin: { placeholder: "kg, peça ou unidade" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "featured", label: "Exibir em destaque", type: "checkbox", defaultValue: false },
        {
          name: "bestSeller",
          label: "Marcar como mais vendido",
          type: "checkbox",
          defaultValue: false,
          admin: { description: "Ative somente quando houver dados reais de venda." },
        },
        {
          name: "available",
          label: "Disponível",
          type: "checkbox",
          defaultValue: false,
        },
      ],
    },
  ],
}
