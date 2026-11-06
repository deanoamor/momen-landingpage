'use client'
import { useEffect, useRef } from 'react'
import { BP } from '@/lib/path'

export default function LoginMenu({ tone = 'lime' }: { tone?: 'lime' | 'dark' }) {
  const ref = useRef<HTMLDetailsElement>(null)
  useEffect(() => {
    const close = (e: Event) => {
      const el = ref.current
      if (el && el.open && !el.contains(e.target as Node)) el.open = false
    }
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape' && ref.current) ref.current.open = false }
    document.addEventListener('click', close)
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('click', close); document.removeEventListener('keydown', esc) }
  }, [])
  return (
    <details className={tone === 'dark' ? 'lg lg-dark' : 'lg'} ref={ref}>
      <summary>
        Login
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
      </summary>
      <div className="lg-panel"><div className="lg-top"><img src={`${BP}/img/logo-momen.png`} alt="momen." width={118} height={16} /><button type="button" className="lg-close" aria-label="Tutup menu login"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg></button></div><a className="lg-opt k" href="https://app.momen.co" target="_blank" rel="noopener noreferrer"><span className="lg-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 21C15.7668 18.0685 13.3422 15.7477 10.3085 15.5521L9.49999 15.5C9.21121 15.5076 8.94209 15.5178 8.68816 15.5298C5.68124 15.6723 3.23089 18.0974 3 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M12.75 9.75C12.75 11.5449 11.2949 13 9.5 13C7.70508 13 6.25 11.5449 6.25 9.75C6.25 7.95507 7.70508 6.5 9.5 6.5C11.2949 6.5 12.75 7.95507 12.75 9.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M21 17.501C20.7709 14.6314 18.4541 12.2748 15.5 11.9961" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M15.9877 9C16.8965 8.42434 17.5001 7.40788 17.5001 6.25C17.5001 4.45507 16.0496 3 14.2602 3C13.3811 3 12.5838 3.35121 12.0001 3.92139" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg></span><span className="lg-tx"><b>Login Kasbon</b><small>Untuk karyawan</small></span><span className="lg-go"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg></span></a><a className="lg-opt b" href="https://business.momen.co/login" target="_blank" rel="noopener noreferrer"><span className="lg-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 10L18.1494 10.6448C19.5226 11.0568 20.2092 11.2628 20.6046 11.7942C21 12.3256 21 13.0425 21 14.4761V22" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"/><path d="M8 9L11 9M8 13L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M12 22V19C12 18.0572 12 17.5858 11.7071 17.2929C11.4142 17 10.9428 17 10 17H9C8.05719 17 7.58579 17 7.29289 17.2929C7 17.5858 7 18.0572 7 19V22" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"/><path d="M2 22L22 22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/><path d="M3 22V6.71724C3 4.20649 3 2.95111 3.79118 2.32824C4.58237 1.70537 5.74742 2.04355 8.07752 2.7199L13.0775 4.17122C14.4836 4.57937 15.1867 4.78344 15.5933 5.33965C16 5.89587 16 6.65344 16 8.16857V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg></span><span className="lg-tx"><b>Login Business</b><small>Untuk perusahaan</small></span><span className="lg-go"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg></span></a><div aria-hidden="true" className="mm-ring lg-ring"></div></div>
    </details>
  )
}
