import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/personal/Footer'
import Konten from '@/components/hapus/Konten'
import Reveal from '@/components/Reveal'
import { SEO } from '@/lib/seo'

export const metadata: Metadata = SEO.hapus

export default function Page() {
  return (
    <div style={{ position: 'relative' }}>
      <SiteHeader variant="hapus" />
      <main id="konten">
        <Konten />
      </main>
      <Footer plain />
      <Reveal />
    </div>
  )
}
