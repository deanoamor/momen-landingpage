/**
 * Smooth scroll (Lenis) + scroll-reveal.
 *
 * Content is visible by default (SEO / no-JS safe). After load, everything below the
 * fold — the `.rv` blocks plus headings, text, images, list items, buttons and FAQ
 * items inside <main> — is hidden and fades/slides in as it enters the viewport,
 * staggered per batch. Respects `prefers-reduced-motion`.
 *
 * Framework-free so the same code runs in the Next.js app and in static previews.
 */

type LenisLike = {
  raf(time: number): void
  destroy(): void
}
type LenisCtor = new (opts: Record<string, unknown>) => LenisLike

const AUTO =
  'main h2, main h3, main p, main img, main li, main details, main a.dk, main a.lime, main figure, footer > div'
const STEP = 0.07 // seconds between items revealed together
const MAX_STEPS = 6

export function initMotion(Lenis?: LenisCtor): () => void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const cleanups: Array<() => void> = []

  // ---- Smooth scroll ----
  if (Lenis && !reduce) {
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, anchors: { offset: -16 } })
    let id = 0
    const loop = (t: number) => {
      lenis.raf(t)
      id = requestAnimationFrame(loop)
    }
    id = requestAnimationFrame(loop)
    cleanups.push(() => {
      cancelAnimationFrame(id)
      lenis.destroy()
    })
  }

  // ---- FAQ accordions ----
  if (!reduce) cleanups.push(initAccordions())

  // ---- Scroll reveal ----
  if (reduce || !('IntersectionObserver' in window)) return () => cleanups.forEach((c) => c())

  const vh = window.innerHeight || 800
  const below = (el: Element) => el.getBoundingClientRect().top > vh * 0.92
  const visible = (el: HTMLElement) => el.getClientRects().length > 0

  const manual = Array.from(document.querySelectorAll<HTMLElement>('.rv'))
  const auto = Array.from(document.querySelectorAll<HTMLElement>(AUTO)).filter((el) => {
    if (el.closest('.rv, .rv-auto, header, .hero, .tabs .tp') || el.querySelector('.rv')) return false
    if (el.style.transform || getComputedStyle(el).transform !== 'none') return false
    if (!visible(el)) return false
    el.classList.add('rv', 'rv-auto')
    if (el.tagName === 'IMG') el.classList.add('rv-img')
    return true
  })

  const pending = [...manual, ...auto].filter((el) => visible(el) && below(el))
  pending.forEach((el) => el.classList.add('rv-pre'))
  // Enable transitions only after the hidden state is painted (no fade-out on load).
  const ready = requestAnimationFrame(() =>
    requestAnimationFrame(() => document.documentElement.classList.add('rv-ready')),
  )

  const show = (els: HTMLElement[]) => {
    els
      .sort((a, b) => {
        const ra = a.getBoundingClientRect()
        const rb = b.getBoundingClientRect()
        return ra.top - rb.top || ra.left - rb.left
      })
      .forEach((el, i) => {
        el.style.setProperty('--d', `${Math.min(i, MAX_STEPS) * STEP}s`)
        el.classList.add('rv-in')
        io.unobserve(el)
        // Drop the reveal classes afterwards so hover transforms keep working.
        const done = (e: TransitionEvent) => {
          if (e.target !== el || e.propertyName !== 'opacity') return
          el.removeEventListener('transitionend', done)
          el.classList.remove('rv-pre', 'rv-in')
          el.style.removeProperty('--d')
        }
        el.addEventListener('transitionend', done)
      })
  }

  const io = new IntersectionObserver(
    (entries) =>
      show(
        entries
          .filter((e) => e.isIntersecting && !e.target.classList.contains('rv-in'))
          .map((e) => e.target as HTMLElement),
      ),
    { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
  )
  pending.forEach((el) => io.observe(el))

  cleanups.push(() => {
    io.disconnect()
    cancelAnimationFrame(ready)
    document.documentElement.classList.remove('rv-ready')
    auto.forEach((el) => el.classList.remove('rv', 'rv-auto', 'rv-img', 'rv-pre', 'rv-in'))
  })
  return () => cleanups.forEach((c) => c())
}

/**
 * Smooth open/close for FAQ <details>. The native `name` grouping (only one open per
 * group) is moved to `data-acc` while JS runs so both items can animate at once;
 * without JS the native behaviour stays.
 */
const EASE = 'cubic-bezier(.22,.7,.2,1)'
const DURATION = 420

function initAccordions(): () => void {
  const items = Array.from(document.querySelectorAll<HTMLDetailsElement>('main details:not(.mm)'))
  const anims = new Map<HTMLDetailsElement, Animation[]>()

  items.forEach((d) => {
    const name = d.getAttribute('name')
    if (name) {
      d.dataset.acc = name
      d.removeAttribute('name')
    }
  })

  const animate = (d: HTMLDetailsElement, open: boolean) => {
    const summary = d.querySelector('summary')
    if (!summary) return
    anims.get(d)?.forEach((a) => a.cancel())
    const start = d.offsetHeight
    let end: number
    if (open) {
      delete d.dataset.closing
      d.open = true
      end = d.offsetHeight
    } else {
      d.dataset.closing = ''
      const border = d.offsetHeight - d.clientHeight
      end = summary.offsetHeight + border
    }
    d.style.overflow = 'hidden'
    const content = Array.from(d.children).filter((el) => el !== summary)
    // Closing: the answer fades out first, then the card shrinks, so no text is
    // ever sliced by the card's bottom edge. Opening: the card grows, then text fades in.
    const height = d.animate(
      { height: [`${start}px`, `${end}px`] },
      { duration: DURATION, easing: EASE, delay: open ? 0 : DURATION * 0.25 },
    )
    const fades = content.map((el) =>
      el.animate(
        open
          ? { opacity: [0, 1], transform: ['translateY(-6px)', 'none'] }
          : { opacity: [1, 0], transform: ['none', 'translateY(-6px)'] },
        open
          ? { duration: DURATION, easing: EASE, delay: DURATION * 0.2, fill: 'backwards' }
          : { duration: DURATION * 0.35, easing: 'ease-out', fill: 'forwards' },
      ),
    )
    const all = [height, ...fades]
    anims.set(d, all)
    height.onfinish = () => {
      anims.delete(d)
      d.style.overflow = ''
      if (!open) {
        d.open = false
        delete d.dataset.closing
        fades.forEach((f) => f.cancel())
      }
    }
    height.oncancel = () => {
      d.style.overflow = ''
    }
  }

  const onClick = (e: Event) => {
    const summary = (e.target as Element).closest('summary')
    const d = summary?.parentElement
    if (!summary || !(d instanceof HTMLDetailsElement) || !items.includes(d)) return
    e.preventDefault()
    const opening = !d.open || d.dataset.closing !== undefined
    if (opening && d.dataset.acc) {
      items
        .filter((o) => o !== d && o.dataset.acc === d.dataset.acc && o.open && o.dataset.closing === undefined)
        .forEach((o) => animate(o, false))
    }
    animate(d, opening)
  }
  document.addEventListener('click', onClick)

  return () => {
    document.removeEventListener('click', onClick)
    anims.forEach((list) => list.forEach((a) => a.cancel()))
    items.forEach((d) => {
      if (d.dataset.acc) d.setAttribute('name', d.dataset.acc)
      delete d.dataset.acc
      delete d.dataset.closing
    })
  }
}
