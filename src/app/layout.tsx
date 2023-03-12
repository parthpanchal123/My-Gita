import Header from '@/components/Header'
import Head from 'next/head'
import { inter } from '../../public/fonts/Fonts'
import './globals.css'

export const metadata = {
  title: 'Bhagwad Gita',
  viewport: "width=device-width, initial-scale=1.0",
  description: 'Complete Bhagwad Gita',
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
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export const dynamicParams = false