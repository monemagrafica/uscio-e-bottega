/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
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
