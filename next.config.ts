import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/research/poc-instrument',
          destination: '/research/poc-instrument/index.html',
        },
      ],
    }
  },

  async redirects() {
    return [
      {
        source: '/construction',
        destination: 'https://construction-demo-six.vercel.app/?brand=ideal',
        permanent: false,
      },
      {
        source: '/cases/industries/construction-photo-sorting',
        destination: '/demo/w/construction-record',
        permanent: true,
      },
      {
        source: '/cases/industries/care-voice-records',
        destination: '/demo/w/care-records',
        permanent: true,
      },
      {
        source: '/cases/industries/knowledge-internal-search',
        destination: '/demo/w/manufacturing-judgment',
        permanent: true,
      },
      {
        source: '/cases/industries/retail-demand-prediction',
        destination: '/demo/w/retail-support',
        permanent: true,
      },
      {
        source: '/flow',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/cases',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/estimate',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/ai-capability-gallery',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/how-we-work',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/web-development',
        destination: '/services#web',
        permanent: true,
      },
      {
        source: '/services/app-development',
        destination: '/services#app',
        permanent: true,
      },
      {
        source: '/services/ai-consulting',
        destination: '/services#ai',
        permanent: true,
      },
      {
        source: '/services/dao-design',
        destination: '/lab#philosophy',
        permanent: true,
      },
      {
        source: '/services/blockchain-development',
        destination: '/lab#philosophy',
        permanent: true,
      },
      {
        source: '/services/metaverse',
        destination: '/lab',
        permanent: true,
      },
      {
        source: '/philosophy',
        destination: '/lab#philosophy',
        permanent: true,
      },
      {
        source: '/research',
        destination: '/research/poc-instrument',
        permanent: true,
      },
      {
        source: '/lab/blockchain',
        destination: '/lab#philosophy',
        permanent: true,
      },
      {
        source: '/lab/metaverse',
        destination: '/lab',
        permanent: true,
      },
      {
        source: '/lab/insights/:slug*',
        destination: '/lab',
        permanent: true,
      },
      {
        source: '/research/poc-instrument/environment',
        destination: '/research/poc-instrument#environment',
        permanent: true,
      },
      {
        source: '/research/poc-instrument/xi-instrument',
        destination: '/research/poc-instrument#instrument',
        permanent: true,
      },
      {
        source: '/research/poc-instrument/fork',
        destination: '/research/poc-instrument#fork',
        permanent: true,
      },
      {
        source: '/research/poc-instrument/loop',
        destination: '/research/poc-instrument#loop',
        permanent: true,
      },
      {
        source: '/research/poc-instrument/zkp',
        destination: '/research/poc-instrument#zkp',
        permanent: true,
      },
      {
        source: '/research/poc-instrument/gaps',
        destination: '/research/poc-instrument#gaps',
        permanent: true,
      },
    ]
  },

  // パフォーマンス最適化設定
  experimental: {
    optimizePackageImports: ['@headlessui/react', 'react-icons'],
  },
  
  // 画像最適化（モバイルパフォーマンス向上）
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    unoptimized: false,
    loader: 'default',
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // 圧縮設定
  compress: true,
  
  // Turbopack設定（Next.js 16対応）
  // turbopack: {}, // 一時的に無効化してWebpackを使用
  
  // パフォーマンス最適化
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
