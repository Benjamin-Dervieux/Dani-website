/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["fr", "en", "de"],
    defaultLocale: "fr",
  },
};

module.exports = nextConfig;
