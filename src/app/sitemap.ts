export const dynamic = 'force-static'

import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/personal', '/business', '/hubungi', '/syarat-ketentuan', '/kebijakan-privasi', '/delete-account'].map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.8,
  }))
}
