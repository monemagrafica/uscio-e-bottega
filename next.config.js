/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['firebasestorage.googleapis.com']
  },
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
}

module.exports = nextConfig
