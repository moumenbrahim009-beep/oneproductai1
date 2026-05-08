import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Product AI | Launch Your First Digital Product in 14 Days",
  description:
    "A 14-day AI-guided system that helps beginners launch their first digital product. $49 one-time. No subscriptions. By BM Digital LLC.",
  metadataBase: new URL("https://oneproductai.com"),
  keywords: [
    "digital product",
    "launch digital product",
    "AI side hustle",
    "14 day challenge",
    "Notion system",
    "GPT coach",
    "online income",
    "creator economy",
  ],
  authors: [{ name: "BM Digital LLC" }],
  creator: "BM Digital LLC",
  publisher: "BM Digital LLC",
  openGraph: {
    type: "website",
    url: "https://oneproductai.com",
    title: "One Product AI — Launch Your First Digital Product in 14 Days",
    description:
      "A $49 one-time system that guides you from paralysed to launched in 14 days. Custom AI coach, Notion portal, 50 prompts, community. No subscription.",
    siteName: "One Product AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "One Product AI — 14-day AI-guided product launch system",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Product AI — Launch Your First Digital Product in 14 Days",
    description:
      "A $49 one-time system that guides you from paralysed to launched in 14 days. Custom AI coach + Notion portal.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[#09090f] text-white antialiased selection:bg-blue-500/30"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
