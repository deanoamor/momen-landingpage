/** Base path the site is served under ('' locally / custom domain, or '/momen-landingpage' if BASE_PATH is set). */
export const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
export const withBase = (p: string) => `${BP}${p}`
