import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/personal/Footer'
import Konten from '@/components/harga/Konten'
import Reveal from '@/components/Reveal'
import { SEO } from '@/lib/seo'

export const metadata: Metadata = SEO.harga

export default function Page() {
  return (
    <div style={{ position: 'relative' }}>
      <SiteHeader variant="harga" />
      <main id="konten">
        <Konten />
      </main>
      <Footer />
      <Reveal />
    </div>
  )
}
