import type { Metadata } from 'next'
import faq from './faq.json'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

const base = {
  openGraph: { siteName: 'momen.', locale: 'id_ID', type: 'website' as const },
  twitter: { card: 'summary_large_image' as const },
}

export const SEO: Record<'front' | 'personal' | 'business', Metadata> = {
  front: {
    title: 'momen. | Satu Platform untuk Berbagai Solusi Keuangan',
    description:
      'Momen menghadirkan solusi keuangan untuk karyawan dan bisnis: akses gaji lebih awal tanpa bunga, serta pengelolaan pembayaran, penagihan, dan tim dalam satu platform.',
    alternates: { canonical: '/' },
    openGraph: { ...base.openGraph, url: '/', title: 'momen. | Satu Platform untuk Berbagai Solusi Keuangan', images: [{ url: '/img/front-hero.png' }] },
    twitter: base.twitter,
  },
  personal: {
    title: 'Momen Kasbon | Akses Gajimu Kapan Saja, Dimana Saja',
    description:
      'Cairkan gaji yang sudah kamu kerjakan sebelum tanggal gajian. Tanpa bunga, tanpa utang, langsung dari aplikasi Momen.',
    alternates: { canonical: '/personal' },
    openGraph: { ...base.openGraph, url: '/personal', title: 'Momen Kasbon | Akses Gajimu Kapan Saja', images: [{ url: '/img/app-beranda.jpg' }] },
    twitter: base.twitter,
  },
  business: {
    title: 'Momen Business | Semua Transaksi Bisnis dalam Satu Tempat',
    description:
      'Kelola pembayaran, penagihan, dan tim dalam satu platform. Terima, kelola, dan kirim dana bisnis dari satu dashboard.',
    alternates: { canonical: '/business' },
    openGraph: { ...base.openGraph, url: '/business', title: 'Momen Business | Semua Transaksi Bisnis dalam Satu Tempat', images: [{ url: '/img/business-dashboard.png' }] },
    twitter: base.twitter,
  },
}

type QA = [string, string]
const faqLd = (items: QA[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
})

export const FAQ = {
  front: faqLd(faq.front as QA[]),
  personal: faqLd(faq.personal as QA[]),
  business: faqLd(faq.business as QA[]),
}

export const ORG = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'momen.',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: 'Platform solusi keuangan untuk karyawan dan bisnis.',
}
