/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://axtech.app' : '',
    basePath: '',
    env: {
        NEXT_PUBLIC_SITE_URL: 'https://axtech.app',
    },
    images: {
        domains: ['axtech.app'],
    },
    // Add additional configurations as needed
}

module.exports = nextConfig
