import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ConciergeProvider } from "@/components/concierge/concierge-context";
import { ConciergeRoot } from "@/components/concierge/ConciergeRoot";

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
  description:
    "Webサイト・LP制作、Webアプリ・業務ツール開発、AIプロトタイプ・自動化。デモを体験し、自社の課題に置き換えてから相談できます。",
  openGraph: {
    title: "ideal | 高級感・最先端のデジタル体験",
    description:
      "Webサイト・LP制作、Webアプリ・業務ツール開発、AIプロトタイプ・自動化。デモを体験し、自社の課題に置き換えてから相談できます。",
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
        <ConciergeProvider>
          <Header />
          <main className="flex-grow pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
          <ConciergeRoot />
        </ConciergeProvider>
      </body>
    </html>
  );
}
