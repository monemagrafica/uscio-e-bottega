/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["firebasestorage.googleapis.com"],
  },
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
});

module.exports = nextConfig;
