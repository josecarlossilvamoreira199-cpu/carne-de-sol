import type { CollectionConfig } from "payload"

const isAdmin = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  labels: { singular: "Mensagem", plural: "Mensagens de contato" },
  admin: {
    useAsTitle: "name",
    group: "Atendimento",
    defaultColumns: ["name", "phone", "subject", "status", "createdAt"],
  },
  access: {
    create: () => true,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: "name", label: "Nome", type: "text", required: true, maxLength: 100 },
    { name: "phone", label: "Telefone", type: "text", required: true, maxLength: 30 },
    {
      name: "email",
      label: "E-mail",
      type: "email",
    },
    { name: "subject", label: "Assunto", type: "text", required: true, maxLength: 120 },
    { name: "message", label: "Mensagem", type: "textarea", required: true, maxLength: 2000 },
    {
      name: "consent",
      label: "Consentimento LGPD",
      type: "checkbox",
      required: true,
      admin: { readOnly: true },
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      defaultValue: "new",
      access: {
        create: isAdmin,
        update: isAdmin,
      },
      options: [
        { label: "Nova", value: "new" },
        { label: "Em atendimento", value: "in-progress" },
        { label: "Concluída", value: "resolved" },
      ],
    },
  ],
}
