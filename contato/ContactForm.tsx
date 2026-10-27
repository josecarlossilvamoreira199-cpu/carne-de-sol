"use client"

import { useActionState } from "react"
import { submitContact, type ContactState } from "./actions"

const initialState: ContactState = { status: "idle", message: "" }

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState)
  return (
    <form action={action} className="content-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field error={state.errors?.name} label="Nome" name="name" required />
        <Field error={state.errors?.phone} label="Telefone" name="phone" required type="tel" />
        <Field error={state.errors?.email} label="E-mail" name="email" type="email" />
        <Field error={state.errors?.subject} label="Assunto" name="subject" required />
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-bold text-[var(--brown)]">Mensagem *</span>
        <textarea className="mt-2 min-h-36 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none focus:border-[var(--red)]" maxLength={2000} name="message" required />
        {state.errors?.message && <span className="mt-1 block text-xs text-[var(--red)]">{state.errors.message}</span>}
      </label>
      <label aria-hidden="true" className="absolute -left-[9999px]"><span>Empresa</span><input autoComplete="off" name="company" tabIndex={-1} /></label>
      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
        <input className="mt-1 h-4 w-4 accent-[var(--red)]" name="consent" required type="checkbox" />
        <span>Autorizo o uso dos dados informados exclusivamente para resposta a este contato, conforme a Política de Privacidade.</span>
      </label>
      {state.errors?.consent && <span className="mt-1 block text-xs text-[var(--red)]">{state.errors.consent}</span>}
      {state.message && <p aria-live="polite" className={`mt-5 rounded-xl p-4 text-sm ${state.status === "success" ? "bg-green-100 text-green-900" : "bg-red-100 text-red-900"}`}>{state.message}</p>}
      <button className="button-primary mt-6 disabled:cursor-wait disabled:opacity-60" disabled={pending} type="submit">{pending ? "Enviando..." : "Enviar mensagem"}</button>
    </form>
  )
}

function Field({ label, name, type = "text", required = false, error }: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
  return <label className="block"><span className="text-sm font-bold text-[var(--brown)]">{label}{required ? " *" : ""}</span><input className="mt-2 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none focus:border-[var(--red)]" maxLength={150} name={name} required={required} type={type} />{error && <span className="mt-1 block text-xs text-[var(--red)]">{error}</span>}</label>
}
