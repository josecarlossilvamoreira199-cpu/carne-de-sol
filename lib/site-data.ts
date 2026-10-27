import { unstable_cache } from "next/cache"
import type { MenuItem, Offer, Product, SiteSetting } from "@/payload-types"
import { CACHE_TAGS } from "@/lib/cache-tags"
import { getPayloadClient } from "@/lib/payload"

const queryProducts = async (): Promise<Product[]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: "products",
    depth: 1,
    limit: 100,
    overrideAccess: false,
    sort: "name",
  })
  return result.docs
}

const queryMenuItems = async (): Promise<MenuItem[]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: "menu-items",
    depth: 1,
    limit: 100,
    overrideAccess: false,
    sort: "category",
  })
  return result.docs
}

const queryOffers = async (): Promise<Offer[]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: "offers",
    depth: 1,
    limit: 100,
    overrideAccess: false,
    where: { active: { equals: true } },
    sort: "validUntil",
  })
  return result.docs
}

const querySiteSettings = async (): Promise<SiteSetting> => {
  const payload = await getPayloadClient()
  return payload.findGlobal({
    slug: "site-settings",
    depth: 1,
    overrideAccess: false,
  })
}

export const getProducts = unstable_cache(queryProducts, ["products"], {
  tags: [CACHE_TAGS.products],
})
export const getMenuItems = unstable_cache(queryMenuItems, ["menu-items"], {
  tags: [CACHE_TAGS.menuItems],
})
export const getOffers = unstable_cache(queryOffers, ["offers"], {
  tags: [CACHE_TAGS.offers],
})
export const getSiteSettings = unstable_cache(querySiteSettings, ["site-settings"], {
  tags: [CACHE_TAGS.siteSettings],
})
