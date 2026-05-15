import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

// Noto Sans JP フォントの設定（パフォーマンス最適化・配信最適化）
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  // 配信最適化
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "ideal | 高級感・最先端のデジタル体験",
  description: "Webサイト制作、アプリ開発、ゲーム制作、AIコンサル、ブロックチェーン開発まで。最高のデジタル体験を提供します。",
  openGraph: {
    title: "ideal | 高級感・最先端のデジタル体験",
    description: "Webサイト制作、アプリ開発、ゲーム制作、AIコンサル、ブロックチェーン開発まで。最高のデジタル体験を提供します。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body
        className={`
          ${notoSansJP.className}
          antialiased
          bg-black
          text-gray-200
          min-h-screen
          flex
          flex-col
        `}
      >
        <Header />
        <main className="flex-grow pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
