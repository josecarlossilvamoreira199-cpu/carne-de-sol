import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"
import Script from "next/script"
import { Suspense } from "react"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import { getSiteSettings } from "@/lib/site-data"
import { BodyCustomCode, renderHeadCustomCode } from "@/lib/make-custom-code"
import { makeSiteSettings, sanitizeHtmlAttribute } from "@/lib/make-site-settings"
import "./styles.css"

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
})

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
const socialImage = makeSiteSettings.openGraph?.image

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: {
    default: "Carne de Sol em Carlos Chagas MG | Carnes e Restaurante",
    template: "%s | Carne de Sol Carlos Chagas",
  },
  description:
    "Carnes, carne de sol, carne serenada e gastronomia regional em Carlos Chagas, Minas Gerais. Consulte produtos, cardápio e informações.",
  applicationName: "Carne de Sol",
  authors: [{ name: "José Carlos" }],
  creator: "José Carlos",
  keywords: [
    "carne de sol em Carlos Chagas MG",
    "restaurante em Carlos Chagas",
    "casa de carnes em Carlos Chagas",
    "carne serenada em Minas Gerais",
    "Vale do Mucuri",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Carne de Sol",
    title: "Carne de Sol em Carlos Chagas MG",
    description: "Tradição, sabor e qualidade em carnes e gastronomia regional.",
    images: socialImage ? [socialImage] : undefined,
  },
  twitter: { card: "summary_large_image", images: socialImage ? [socialImage] : undefined },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const googleAnalyticsId = sanitizeHtmlAttribute(makeSiteSettings.analytics?.googleAnalyticsId)
  const customScripts = makeSiteSettings.customScripts
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Carne de Sol",
    description: "Carnes e gastronomia regional em Carlos Chagas, Minas Gerais.",
    areaServed: { "@type": "City", name: "Carlos Chagas", addressRegion: "MG" },
    url: siteURL,
  }

  return (
    <html className={`${sans.variable} ${serif.variable}`} lang="pt-BR">
      <head>
        {renderHeadCustomCode(customScripts?.headStart, "head-start")}
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} type="application/ld+json" />
        {renderHeadCustomCode(customScripts?.headEnd, "head-end")}
      </head>
      <body>
        <BodyCustomCode html={customScripts?.bodyStart} />
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <SiteHeader />
        <main id="conteudo" tabIndex={-1}>{children}</main>
        <Suspense fallback={<div className="h-64 bg-[var(--ink)]" />}>
          <FooterWithSettings />
        </Suspense>
        {googleAnalyticsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config',${JSON.stringify(googleAnalyticsId)});`}
            </Script>
          </>
        )}
        <BodyCustomCode html={customScripts?.bodyEnd} />
      </body>
    </html>
  )
}

async function FooterWithSettings() {
  const settings = await getSiteSettings()
  return <SiteFooter settings={settings} />
}
