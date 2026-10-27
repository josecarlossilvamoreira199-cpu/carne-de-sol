import { revalidateTag } from "next/cache"
import type { CollectionConfig } from "payload"
import { CACHE_TAGS } from "@/lib/cache-tags"

const refreshMenu = () => revalidateTag(CACHE_TAGS.menuItems, "max")

export const MenuItems: CollectionConfig = {
  slug: "menu-items",
  labels: { singular: "Item do cardápio", plural: "Cardápio" },
  admin: {
    useAsTitle: "name",
    group: "Restaurante",
    defaultColumns: ["name", "category", "available", "price"],
  },
  access: { read: () => true },
  hooks: {
    afterChange: [refreshMenu],
    afterDelete: [refreshMenu],
  },
  fields: [
    { name: "name", label: "Nome do prato", type: "text", required: true },
    {
      name: "category",
      label: "Categoria",
      type: "select",
      required: true,
      options: [
        { label: "Carne de sol", value: "carne-de-sol" },
        { label: "Carne serenada", value: "carne-serenada" },
        { label: "Refeições completas", value: "refeicoes" },
        { label: "Carnes grelhadas", value: "grelhados" },
        { label: "Acompanhamentos", value: "acompanhamentos" },
        { label: "Bebidas", value: "bebidas" },
        { label: "Para compartilhar", value: "compartilhar" },
      ],
    },
    { name: "description", label: "Descrição e ingredientes", type: "textarea", required: true },
    { name: "sides", label: "Acompanhamentos", type: "text" },
    { name: "portion", label: "Tamanho ou porção", type: "text" },
    { name: "price", label: "Preço", type: "number", min: 0 },
    { name: "image", label: "Imagem", type: "upload", relationTo: "media" },
    { name: "featured", label: "Destaque", type: "checkbox", defaultValue: false },
    { name: "available", label: "Disponível", type: "checkbox", defaultValue: false },
  ],
}
