'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { initMotion } from '@/lib/motion'

/** Smooth scrolling + scroll-reveal animation (see `src/lib/motion.ts`). */
export default function Reveal() {
  const pathname = usePathname()
  useEffect(() => initMotion(Lenis), [pathname])
  return null
}
