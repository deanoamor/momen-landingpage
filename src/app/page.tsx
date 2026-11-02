import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import JsonLd from '@/components/JsonLd'
import Reveal from '@/components/Reveal'
import Hero from '@/components/front/Hero'
import Mengapa from '@/components/front/Mengapa'
import Personal from '@/components/front/Personal'
import Business from '@/components/front/Business'
import Faq from '@/components/front/Faq'
import Tail from '@/components/front/Tail'
import { SEO, FAQ } from '@/lib/seo'

export const metadata: Metadata = SEO.front

export default function Page() {
  return (
    <div style={{ position: 'relative' }}>
      <SiteHeader variant="front" />
      <main id="konten">
        <Hero />
        <Mengapa />
        <Personal />
        <Business />
        <Faq />
      </main>
      <Tail />
      <JsonLd data={FAQ.front} />
      <Reveal />
    </div>
  )
}
