import ResNavBar from "@/components/ResNavBar";
import { inter } from "../../utils/fonts/Fonts";
import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "My-Gita",
  description:
    "Explore the timeless wisdom of the Bhagavad Gita. Discover the teachings of Lord Krishna and their relevance to modern life chapter/verse wise.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://my-gita.vercel.app/",
    siteName: "My-Gita",
    title: "My-Gita",
    description:
      "Explore the timeless wisdom of the Bhagavad Gita. Discover the teachings of Lord Krishna and their relevance to modern life chapter/verse wise.",
    images: [
      {
        url: "https://i.imgur.com/86wv8cm.png",
        alt: "Cover Image",
      },
    ],
  },
  keywords: [
    "Bhagavad Gita",
    "Hinduism",
    "Sanskrit",
    "Lord Krishna",
    "Arjuna",
    "Mahabharata",
    "Sacred texts",
    "Chapter summaries",
    "Verse of the day",
    "Spirituality",
    "Yoga",
    "Self-realization",
    "Karma",
    "Dharma",
    "Bhakti",
    "Jnana",
    "Vedanta",
    "Philosophy",
    "Wisdom",
    "Eastern religion",
    "Sanatan Dharma",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  twitter: {
    title: "My-Gita",
    description: "A collection of summaries of the Bhagavad Gita in English",
    card: "summary_large_image",
    images: ["https://i.imgur.com/86wv8cm.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/home-cover.webp" as="image" />
        <meta
          name="google-site-verification"
          content="Nn6UdJ1-wZliN0TspEHLehu1aUSKje9FVuaCWFAzJqc"
        />
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "My-Gita",
              "url": "https://my-gita.vercel.app/",
              "description": "Explore the timeless wisdom of the Bhagavad Gita. Discover the teachings of Lord Krishna and their relevance to modern life chapter/verse wise.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://my-gita.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </head>
      <body>
        <ResNavBar />
        <Breadcrumb />
        {children}
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}

export const dynamicParams = false;
