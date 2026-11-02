import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import JsonLd from '@/components/JsonLd'
import Reveal from '@/components/Reveal'
import Hero from '@/components/business/Hero'
import Fitur from '@/components/business/Fitur'
import Solusi from '@/components/business/Solusi'
import Faq from '@/components/business/Faq'
import Cta from '@/components/business/Cta'
import Footer from '@/components/business/Footer'
import { SEO, FAQ } from '@/lib/seo'

export const metadata: Metadata = SEO.business

export default function Page() {
  return (
    <div style={{ position: 'relative' }}>
      <SiteHeader variant="business" />
      <main id="konten">
        <Hero />
        <Fitur />
        <Solusi />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <JsonLd data={FAQ.business} />
      <Reveal />
    </div>
  )
}
