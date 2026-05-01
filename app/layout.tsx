import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Персональні тренування | Онлайн та офлайн",
    template: "%s | Персональні тренування",
  },
  description: "Персональний фітнес-коучинг для жінок онлайн та офлайн у Камʼянці-Подільському.",
  keywords: ["персональний тренер", "онлайн тренування", "фітнес тренер", "Камʼянець-Подільський"],
  authors: [{ name: "Персональний тренер" }],
  creator: "Персональний тренер",
  metadataBase: new URL("https://eli-danylenko.vercel.app"),

  openGraph: {
    title: "Персональні тренування",
    description:
      "Онлайн та офлайн тренування з фокусом на силу, впевненість і стабільний результат.",
    url: "https://eli-danylenko.vercel.app",
    siteName: "Персональні тренування",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Персональний тренер",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Персональні тренування",
    description: "Онлайн та офлайн тренування для жінок. Стабільний фітнес-результат.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
