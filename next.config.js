/** @type {import('next').NextConfig} */

const path = require('path');
const nextTranslate = require('next-translate-plugin');


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['es', 'en', 'fr', 'ca'], // Array with the languages that you want to use
    defaultLocale: 'es', // Default language of your website
    pages: {
      '*': ['common'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
    },
  },
  images: { 
    minimumCacheTTL: 60,
    domains: ['localhost', 'https://tmb.ama.work'], 
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

module.exports = nextTranslate(nextConfig)

