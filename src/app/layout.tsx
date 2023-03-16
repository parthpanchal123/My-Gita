import ResNavBar from '@/components/ResNavBar'
import { inter } from '../../utils/fonts/Fonts'
import './globals.css'

export const metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  keywords: ["Bhagavad Gita", "Hinduism", "Sanskrit", "Lord Krishna", "Arjuna", "Mahabharata", "Sacred texts", "Chapter summaries", "Verse of the day", "Spirituality", "Yoga", "Self-realization", "Karma", "Dharma", "Bhakti", "Jnana", "Vedanta", "Philosophy", "Wisdom", "Eastern religion", "Sanatan Dharma"],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/home-cover.webp" as="image" />
        <meta name="google-site-verification" content="Nn6UdJ1-wZliN0TspEHLehu1aUSKje9FVuaCWFAzJqc" />
      </head>
      <body>
        <ResNavBar />
        {children}
      </body>
    </html>
  )
}

export const dynamicParams = false