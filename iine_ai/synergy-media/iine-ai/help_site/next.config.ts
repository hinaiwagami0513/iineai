import type { NextConfig } from 'next';

/**
 * 静的書き出し（out/）にする。ヘルプは全ページ静的で足りるので SSR は不要。
 * next/image の最適化サーバは使えないので unoptimized。
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
