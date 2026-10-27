"use server"

import { getPayloadClient } from "@/lib/payload"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
  errors?: Record<string, string>
}

const text = (value: FormDataEntryValue | null) => typeof value === "string" ? value.trim() : ""

export async function submitContact(_: ContactState, formData: FormData): Promise<ContactState> {
  const name = text(formData.get("name"))
  const phone = text(formData.get("phone"))
  const email = text(formData.get("email"))
  const subject = text(formData.get("subject"))
  const message = text(formData.get("message"))
  const honeypot = text(formData.get("company"))
  const consent = formData.get("consent") === "on"
  const errors: Record<string, string> = {}

  if (honeypot) return { status: "success", message: "Mensagem recebida." }
  if (name.length < 2 || name.length > 100) errors.name = "Informe um nome válido."
  if (!/^[0-9()+\-\s]{8,30}$/.test(phone)) errors.phone = "Informe um telefone válido."
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Informe um e-mail válido."
  if (subject.length < 3 || subject.length > 120) errors.subject = "Informe um assunto válido."
  if (message.length < 10 || message.length > 2000) errors.message = "A mensagem deve ter entre 10 e 2.000 caracteres."
  if (!consent) errors.consent = "Você precisa autorizar o uso dos dados para atendimento."
  if (Object.keys(errors).length) return { status: "error", message: "Revise os campos indicados.", errors }

  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: "contact-submissions",
      data: { name, phone, email: email || undefined, subject, message, consent: true },
      overrideAccess: false,
    })
    return { status: "success", message: "Mensagem enviada. A equipe poderá responder pelos contatos informados." }
  } catch {
    return { status: "error", message: "Não foi possível enviar agora. Tente novamente mais tarde." }
  }
}
