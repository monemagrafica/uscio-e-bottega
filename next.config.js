/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: { dest: "public", register: true, skipWaiting: true },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["firebasestorage.googleapis.com"],
    quality: 100,
   
  },
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
});

module.exports = nextConfig;
