import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/business/Footer'
import Konten from '@/components/hubungi/Konten'
import Reveal from '@/components/Reveal'
import { SEO } from '@/lib/seo'

export const metadata: Metadata = SEO.hubungi

export default function Page() {
  return (
    <div style={{ position: 'relative' }}>
      <SiteHeader variant="hubungi" />
      <main id="konten">
        <Konten />
      </main>
      <Footer />
      <Reveal />
    </div>
  )
}
