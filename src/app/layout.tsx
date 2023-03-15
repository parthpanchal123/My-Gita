import ResNavBar from '@/components/ResNavBar'
import { inter } from '../../utils/fonts/Fonts'
import './globals.css'

export const metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/apple-icon.png',
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
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/home-cover.webp" as="image" />
      </head>
      <body>
        <ResNavBar />
        {children}
      </body>
    </html>
  )
}

export const dynamicParams = false