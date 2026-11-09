import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/personal/Footer'
import LegalDoc from '@/components/legal/LegalDoc'
import type { LegalData } from '@/components/legal/LegalBody'
import Reveal from '@/components/Reveal'
import { SEO } from '@/lib/seo'
import data from '@/lib/legal/tnc.json'

export const metadata: Metadata = SEO.tnc

export default function Page() {
  return (
    <div style={{ position: 'relative' }}>
      <SiteHeader variant="legal" />
      <main id="konten">
        <LegalDoc data={data as unknown as LegalData} current="tnc" heading="Syarat &amp;" accent="Ketentuan" />
      </main>
      <Footer />
      <Reveal />
    </div>
  )
}
