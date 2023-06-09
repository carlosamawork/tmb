/** @type {import('next').NextConfig} */

const path = require('path');


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en', 'fr', 'es', 'ca'],
    defaultLocale: 'es',
  },
  images: { 
    minimumCacheTTL: 60,
    domains: ['localhost', 'upbeat-shamir.104-248-128-170.plesk.page'], 
    formats: [
      'image/avif', 
      'image/webp',
      // 'image/png',
      // 'image/jpg',
      // 'image/jpeg'
    ] 
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import 'styles/common/_variables.scss';
      @import 'styles/mixins/_mixins.scss';
      @import 'styles/common/_typography.scss';
    `
  }
}

module.exports = nextConfig

