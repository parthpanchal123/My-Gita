import ResNavBar from "@/components/ResNavBar";
import { inter } from "../../utils/fonts/Fonts";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  title: "Bhagavad Gita",
  description:
    "Explore the timeless wisdom of the Bhagavad Gita. Discover the teachings of Lord Krishna and their relevance to modern life chapter/verse wise.",
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
    title: "Bhagavad Gita",
    description: "A collection of summaries of the Bhagavad Gita in English",
    card: "summary_large_image",
    site: "https://camo.githubusercontent.com/9a2e87970d1777b98410250c45524ed70bf124f69e14446c7ef88374de9e5778/68747470733a2f2f692e696d6775722e636f6d2f33595945796a732e706e67",
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
      </head>
      <body>
        <ResNavBar />
        {children}
      </body>
    </html>
  );
}

export const dynamicParams = false;
