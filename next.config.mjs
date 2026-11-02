// GITHUB_PAGES=true builds a static export served under /momen-landingpage
// (see .github/workflows/pages.yml). Normal `npm run build` is unchanged.
const isPages = process.env.GITHUB_PAGES === 'true'
const basePath = isPages ? '/momen-landingpage' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'], unoptimized: isPages },
  poweredByHeader: false,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isPages ? { output: 'export', basePath, trailingSlash: true } : {}),
}
export default nextConfig
