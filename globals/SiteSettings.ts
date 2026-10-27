import { revalidateTag } from "next/cache"
import type { GlobalConfig } from "payload"
import { CACHE_TAGS } from "@/lib/cache-tags"

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Dados da empresa",
  admin: { group: "Configurações" },
  access: { read: () => true },
  hooks: {
    afterChange: [() => revalidateTag(CACHE_TAGS.siteSettings, "max")],
  },
  fields: [
    {
      name: "businessName",
      label: "Nome da empresa",
      type: "text",
      required: true,
      defaultValue: "Carne de Sol",
    },
    {
      name: "tagline",
      label: "Slogan",
      type: "text",
      defaultValue: "Tradição, sabor e qualidade em Carlos Chagas",
    },
    { name: "about", label: "Apresentação institucional", type: "textarea" },
    { name: "foundingYear", label: "Ano de fundação", type: "number" },
    { name: "ownerStory", label: "História dos proprietários", type: "textarea" },
    {
      name: "contact",
      label: "Contato",
      type: "group",
      fields: [
        { name: "phone", label: "Telefone", type: "text" },
        {
          name: "whatsapp",
          label: "WhatsApp",
          type: "text",
          admin: { description: "Somente números, com DDI e DDD. Ex.: 5533..." },
        },
        { name: "email", label: "E-mail comercial", type: "email" },
      ],
    },
    {
      name: "location",
      label: "Localização",
      type: "group",
      fields: [
        { name: "street", label: "Endereço", type: "text" },
        { name: "district", label: "Bairro", type: "text" },
        { name: "city", label: "Cidade", type: "text", defaultValue: "Carlos Chagas" },
        { name: "state", label: "Estado", type: "text", defaultValue: "MG" },
        { name: "postalCode", label: "CEP", type: "text" },
        { name: "mapUrl", label: "Link do mapa", type: "text" },
        { name: "directions", label: "Como chegar", type: "textarea" },
      ],
    },
    {
      name: "openingHours",
      label: "Horários de funcionamento",
      type: "array",
      fields: [
        { name: "days", label: "Dias", type: "text", required: true },
        { name: "hours", label: "Horário", type: "text", required: true },
      ],
    },
    {
      name: "socials",
      label: "Redes sociais",
      type: "group",
      fields: [
        { name: "instagram", type: "text" },
        { name: "facebook", type: "text" },
      ],
    },
  ],
}
