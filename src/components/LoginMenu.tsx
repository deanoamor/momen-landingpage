'use client'
import { useEffect, useRef } from 'react'

export default function LoginMenu() {
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
    <details className="lg" ref={ref}>
      <summary>
        Login
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
      </summary>
      <div className="lg-panel"><a className="lg-opt k" href="#top"><span><b>Login Kasbon</b><small>Untuk karyawan</small></span><span className="lg-go"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg></span></a><a className="lg-opt b" href="#top"><span><b>Login Business</b><small>Untuk perusahaan</small></span><span className="lg-go"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg></span></a></div>
    </details>
  )
}
