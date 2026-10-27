import path from 'path'
import { buildFigmaConfig } from '@payloadcms/figma'
import { mcpPlugin } from '@payloadcms/plugin-mcp'
import { pt as adminLanguage } from '@payloadcms/translations/languages/pt'
import { fileURLToPath } from 'url'
import { Admins } from './collections/Admins'
import { Media } from './collections/Media'
import { Folders } from './collections/Folders'
import { Tags } from './collections/Tags'
import { Products } from './collections/Products'
import { MenuItems } from './collections/MenuItems'
import { Offers } from './collections/Offers'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildFigmaConfig({
  admin: {
    user: Admins.slug,
    constrainWidth: true,
    dashboard: {
      widgets: [],
      defaultLayout: [
        { widgetSlug: 'activity', width: 'full' },
        { widgetSlug: 'collections', width: 'full' },
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  i18n: {
    fallbackLanguage: 'pt',
    supportedLanguages: { 'pt': adminLanguage },
  },
  collections: [
    Admins,
    Media,
    Folders,
    Tags,
    Products,
    MenuItems,
    Offers,
    ContactSubmissions,
  ],
  globals: [SiteSettings],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  localization: {
    locales: [{ code: 'en', label: 'English' }],
    fallback: true,
    defaultLocale: 'en',
  },
  plugins: [mcpPlugin({})],
  figma: {},
})
