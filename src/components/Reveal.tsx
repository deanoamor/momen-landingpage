'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scroll-reveal for elements with the `.rv` class.
 * Content is visible by default (SEO / no-JS safe); below-the-fold items are hidden
 * only after hydration and revealed as they enter the viewport.
 */
export default function Reveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const vh = window.innerHeight || 800
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rv'))
    const pending = els.filter((el) => el.getBoundingClientRect().top > vh * 0.92)
    pending.forEach((el) => el.classList.add('rv-pre'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('rv-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -4% 0px' },
    )
    pending.forEach((el) => io.observe(el))

    const sweep = () => {
      const h = window.innerHeight || 800
      pending.forEach((el) => {
        if (!el.classList.contains('rv-in') && el.getBoundingClientRect().top < h * 0.96) {
          el.classList.add('rv-in')
          io.unobserve(el)
        }
      })
    }
    window.addEventListener('scroll', sweep, { passive: true })
    window.addEventListener('resize', sweep)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', sweep)
      window.removeEventListener('resize', sweep)
    }
  }, [pathname])

  return null
}
