import Link from 'next/link'
import { BP } from '@/lib/path'
import { LegalBody, type LegalData } from './LegalBody'

export default function LegalDoc({
  data,
  current,
  heading,
  accent,
}: {
  data: LegalData
  current: 'tnc' | 'privasi'
  heading: string
  accent: string
}) {
  return (
    <>
      <section
        aria-labelledby="lx-h"
        style={{
          position: 'relative',
          overflow: 'clip',
          background: 'linear-gradient(180deg,#F4F6F6 0%,#F7FBDA 38%,#EDF595 100%)',
          padding: 'clamp(136px,14vw,200px) 0 clamp(56px,6vw,88px)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px,5.5vw,80px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <span style={{ display: 'inline-flex', padding: '7px 16px', borderRadius: '999px', border: '1px solid #E5E6E6', background: '#fff', fontSize: '16px', fontWeight: 500, color: '#123C35' }}>
              Dokumen Legal
            </span>
            <h1 id="lx-h" style={{ margin: '24px 0 0', fontSize: 'clamp(36px,4.2vw,60px)', lineHeight: 1.15, fontWeight: 400, letterSpacing: '-0.015em', color: '#242E2C', textWrap: 'balance' }}>
              {heading} <span style={{ color: '#1E4841', fontWeight: 500 }}>{accent}</span>
            </h1>
            <nav className="lx-tabs" aria-label="Dokumen legal">
              <Link href={`${BP}/syarat-ketentuan`} aria-current={current === 'tnc' ? 'page' : undefined}>
                Syarat &amp; Ketentuan
              </Link>
              <Link href={`${BP}/kebijakan-privasi`} aria-current={current === 'privasi' ? 'page' : undefined}>
                Kebijakan Privasi
              </Link>
            </nav>
          </div>
        </div>
      </section>
      <section
        style={{
          background: 'linear-gradient(180deg,#EDF595 0px,#F4F6F6 280px,#F4F6F6 calc(100% - 200px),#EDF595 100%)',
          padding: '0 0 clamp(72px,9vw,128px)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px,5.5vw,80px)' }}>
          <LegalBody data={data} prefix="" />
        </div>
      </section>
    </>
  )
}
