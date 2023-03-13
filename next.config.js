/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: { 
    minimumCacheTTL: 60,
    domains: [process.env.NEXT_IMAGE_DOMAIN], 
    formats: [
      'image/avif', 
      'image/webp'
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
