/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Local SVG/placeholder assets live in /public, so no remote patterns are
    // required by default. Add remotePatterns here when connecting a CMS/CDN.
    remotePatterns: [],
    // The placeholder artwork shipped in /public/images is original SVG created
    // for this build (no third-party assets). SVGs are trusted first-party
    // files, so we allow next/image to serve them, sandboxed via CSP. When the
    // client swaps in real JPG/PNG/WebP photography, next/image optimizes them
    // automatically — no code changes needed.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
