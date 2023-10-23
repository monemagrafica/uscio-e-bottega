/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["firebasestorage.googleapis.com"],
    quality: 100,
  },
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
};

module.exports = nextConfig;
