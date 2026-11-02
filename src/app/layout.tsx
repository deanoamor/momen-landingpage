import type { Metadata, Viewport } from 'next'
import '@fontsource/poppins/latin-300.css'
import '@fontsource/poppins/latin-400.css'
import '@fontsource/poppins/latin-500.css'
import '@fontsource/poppins/latin-600.css'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import { ORG, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'momen.', template: '%s' },
  applicationName: 'momen.',
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E4841',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <a
          href="#konten"
          className="skip-link"
        >
          Lewati ke konten utama
        </a>
        {children}
        <JsonLd data={ORG} />
      </body>
    </html>
  )
}
