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
        source: '/services/dao-design',
        destination: '/services/blockchain-development#dao-governance',
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
