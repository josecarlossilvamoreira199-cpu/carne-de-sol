import type { Media } from "@/payload-types"

export function getMedia(value: string | Media | null | undefined): Media | null {
  return value && typeof value === "object" ? value : null
}
