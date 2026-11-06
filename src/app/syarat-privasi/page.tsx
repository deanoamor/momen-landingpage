import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/personal/Footer'
import LegalTabs from '@/components/legal/LegalTabs'
import { LegalBody, type LegalData } from '@/components/legal/LegalBody'
import Reveal from '@/components/Reveal'
import { SEO } from '@/lib/seo'
import tnc from '@/lib/legal/tnc.json'
import privasi from '@/lib/legal/privasi.json'

export const metadata: Metadata = SEO.legal

export default function Page() {
  const intro = (
    <>
      <span style={{ display: 'inline-flex', padding: '7px 16px', borderRadius: '999px', border: '1px solid #E5E6E6', background: '#fff', fontSize: '16px', fontWeight: 500, color: '#123C35' }}>
        Dokumen Legal
      </span>
      <h1 id="lx-h" style={{ margin: '24px 0 0', fontSize: 'clamp(36px,4.2vw,60px)', lineHeight: 1.15, fontWeight: 400, letterSpacing: '-0.015em', color: '#242E2C', textWrap: 'balance' }}>
        Syarat &amp; <span style={{ color: '#1E4841', fontWeight: 500 }}>Privasi</span>
      </h1>
      <p style={{ margin: '20px 0 0', maxWidth: '30em', fontSize: '18px', lineHeight: 1.6, color: '#565656' }}>
        Syarat &amp; Ketentuan dan Kebijakan Privasi PT Momen Inovasi Bersama, berlaku sejak <time dateTime="2026-07-25">25 Juli 2026</time>.
      </p>
    </>
  )
  return (
    <div style={{ position: 'relative' }}>
      <SiteHeader variant="legal" />
      <main id="konten">
        <LegalTabs
          intro={intro}
          tabs={[
            { id: 'syarat-ketentuan', label: 'Syarat & Ketentuan', content: <LegalBody data={tnc as unknown as LegalData} prefix="tnc-" /> },
            { id: 'kebijakan-privasi', label: 'Kebijakan Privasi', content: <LegalBody data={privasi as unknown as LegalData} prefix="pri-" /> },
          ]}
        />
      </main>
      <Footer />
      <Reveal />
    </div>
  )
}
