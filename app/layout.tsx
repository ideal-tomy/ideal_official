import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/layout/Footer";
import { FabDrawerNav } from "../components/layout/FabDrawerNav";
import { ConciergeProvider } from "@/components/concierge/concierge-context";
import { ConciergeRoot } from "@/components/concierge/ConciergeRoot";
import { FooterConcierge } from "@/components/concierge/FooterConcierge";
import { WelcomeConcierge } from "@/components/concierge/WelcomeConcierge";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "ideal｜まず、触ってください。— デモファーストのDX開発",
  description:
    "説明資料より先に、動くデモを。業務の課題を「触れるデモ」で確かめてから開発する、デモファーストのWeb・DX開発。",
  openGraph: {
    title: "ideal｜まず、触ってください。— デモファーストのDX開発",
    description:
      "説明資料より先に、動くデモを。業務の課題を「触れるデモ」で確かめてから開発する、デモファーストのWeb・DX開発。",
    type: "website",
    locale: "ja_JP",
  },
};

const themeInitScript = `
(function(){
  try {
    var k = 'ideal-theme';
    var s = localStorage.getItem(k);
    var m = s === 'light' || s === 'dark' ? s : 'dark';
    document.documentElement.classList.add(m);
    document.documentElement.style.colorScheme = m;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`
          ${notoSansJP.className}
          antialiased
          min-h-screen
          flex
          flex-col
          bg-[var(--site-bg)]
          text-[var(--site-fg)]
        `}
      >
        <ThemeProvider>
          <ConciergeProvider>
            <FabDrawerNav />
            <main className="flex-grow pt-16 md:pt-0">
              {children}
            </main>
            <FooterConcierge />
            <WelcomeConcierge />
            <Footer />
            <ConciergeRoot />
          </ConciergeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
