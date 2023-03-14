import { Jost, Kalam, Inter } from "next/font/google"

export const jost = Jost({
    subsets: ['latin'],
    variable: '--font-jost'
})

export const kalam = Kalam({
    subsets: ['latin'],
    variable: '--font-kalam',
    weight: ["300", "400", "700"]
})

export const inter = Inter({
    subsets: ['latin'],
    variable: "--font-inter"
})