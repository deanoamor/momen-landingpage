import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import JsonLd from '@/components/JsonLd'
import Reveal from '@/components/Reveal'
import Hero from '@/components/personal/Hero'
import Pernyataan from '@/components/personal/Pernyataan'
import Kenapa from '@/components/personal/Kenapa'
import Proses from '@/components/personal/Proses'
import Aplikasi from '@/components/personal/Aplikasi'
import Faq from '@/components/personal/Faq'
import Cta from '@/components/personal/Cta'
import Footer from '@/components/personal/Footer'
import { SEO, FAQ } from '@/lib/seo'

export const metadata: Metadata = SEO.personal

export default function Page() {
  return (
    <div style={{ position: 'relative' }}>
      <SiteHeader variant="personal" />
      <main id="konten">
        <Hero />
        <Pernyataan />
        <Kenapa />
        <Proses />
        <Aplikasi />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <JsonLd data={FAQ.personal} />
      <Reveal />
    </div>
  )
}
