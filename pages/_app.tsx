import Head from "next/head";
// import { Jost, Kalam, Inter } from 'next/font/google'

// export const jost = Jost({
//     subsets: ['latin'],
//     variable: '--font-jost'
// })

// export const kalam = Kalam({
//     subsets: ['latin'],
//     variable: '--font-kalam',
//     weight: ["300", "400", "700"]
// })

// export const inter = Inter({
//     subsets: ['latin'],
//     variable: "--font-inter"
// })


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head >
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preload" href="/home-cover.webp" as="image" />
            </Head >
            <Component {...pageProps} />
        </>
    );
}