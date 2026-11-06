'use client'

import { useEffect, useState, type ReactNode } from 'react'

export type Tab = { id: string; label: string; content: ReactNode }

export default function LegalTabs({ intro, tabs }: { intro: ReactNode; tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id)

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1)
      const hit = tabs.find((t) => t.id === h || h.startsWith(`${t.id}-`))
      if (hit) setActive(hit.id)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [tabs])

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
            {intro}
            <nav className="lx-tabs" aria-label="Dokumen legal">
              {tabs.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  aria-current={active === t.id ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    setActive(t.id)
                    window.history.replaceState(null, '', `#${t.id}`)
                  }}
                >
                  {t.label}
                </a>
              ))}
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
          {tabs.map((t) => (
            <div key={t.id} id={t.id} hidden={active !== t.id}>
              {t.content}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
