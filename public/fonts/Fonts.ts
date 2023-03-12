import { Poppins, Jost, Kalam, Inter } from "next/font/google"

export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost'
})

export const kalam = Kalam({
  subsets: ['latin'],
  variable: '--font-kalam',
  weight: ["300", "400", "700"]
})

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter"
})