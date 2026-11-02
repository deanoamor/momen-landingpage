import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/personal', '/business'].map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.8,
  }))
}
