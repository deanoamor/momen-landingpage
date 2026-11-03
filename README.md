# momen. — Next.js (App Router)

Konversi dari desain "momen. Landing Page" (Front, Personal, Business).

## Menjalankan
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```
Set `NEXT_PUBLIC_SITE_URL=https://domain-kamu.com` sebelum build agar canonical, sitemap, dan OG URL benar.

## GitHub Pages
Setiap push ke branch `claude/sharp-hamilton-6ww71x` di-build dan dipublikasikan otomatis oleh `.github/workflows/pages.yml` ke https://deanoamor.github.io/momen-landingpage/.
Syarat sekali saja: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Build versi Pages di lokal: `GITHUB_PAGES=true npm run build` (hasil di `out/`).

## Struktur
- `/` Front · `/personal` · `/business` (`src/app/**/page.tsx`)
- `src/components/<halaman>/*` — satu file per section; `SiteHeader.tsx` — navbar (varian per halaman + menu hamburger tanpa JS untuk ≤900px)
- `src/lib/seo.ts` — metadata, Open Graph, JSON-LD (Organization + FAQPage); `src/lib/faq.json` — isi FAQ untuk JSON-LD
- `Reveal.tsx` — animasi scroll (konten tetap terlihat tanpa JS)
- `robots.ts`, `sitemap.ts`, `icon.svg`

## Semantik / SEO
`header` (banner) → `main#konten` → `footer`; satu `h1` per halaman, `h2` per section, `h3` per kartu/FAQ; `nav` berlabel; skip-link; gambar `next/image` dengan `alt`; `lang="id"`.

## Catatan
- Teks mengikuti desain Claude Design terbaru. Beberapa teks (bullet list, FAQ Business, subcopy hero Business) dibuat sendiri, bukan dari Figma — cek ulang.
- Link Login, Download, Privacy Policy, dan Terms masih `#top` (placeholder).
- Tautan Login masih `#top`; ganti ke URL aplikasi saat tersedia.
