// GITHUB_PAGES=true builds a static export for GitHub Pages (see .github/workflows/pages.yml).
// Custom domain (momen.co) is served from the root, so basePath is empty by default.
// Set BASE_PATH=/momen-landingpage only if you need the github.io/<repo> URL again.
const isPages = process.env.GITHUB_PAGES === 'true'
const basePath = process.env.BASE_PATH ?? ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'], unoptimized: isPages },
  poweredByHeader: false,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isPages ? { output: 'export', basePath, trailingSlash: true } : {}),
}
export default nextConfig