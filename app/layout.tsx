// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Personal Fitness Coach | Online & Offline Training",
    template: "%s | Personal Fitness Coach",
  },
  description:
    "Personal fitness coaching for women. Online and offline training, sustainable results, confidence, and healthy habits.",
  keywords: [
    "personal trainer",
    "online fitness coach",
    "female fitness coach",
    "personal training",
    "online coaching",
  ],
  authors: [{ name: "Personal Fitness Coach" }],
  creator: "Personal Fitness Coach",
  metadataBase: new URL("https://eli-danylenko.vercel.app"),

  openGraph: {
    title: "Personal Fitness Coach",
    description:
      "Online & offline personal fitness coaching focused on strength, confidence, and sustainable results.",
    url: "https://eli-danylenko.vercel.app",
    siteName: "Personal Fitness Coach",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Fitness Coach",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Personal Fitness Coach",
    description:
      "Online & offline coaching for women. Sustainable fitness results.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
