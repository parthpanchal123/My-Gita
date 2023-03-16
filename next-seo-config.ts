export const NEXT_SEO_DEFAULT = {
    title: 'Bhagavad Gita',
    description: 'Explore the timeless wisdom of the Bhagavad Gita. Discover the teachings of Lord Krishna and their relevance to modern life chapter/verse wise',
    additionalLinkTags:
        [
            {
                rel: 'icon',
                href: '/favicon.ico',
            },
            {
                rel: 'icon',
                href: '/favicon-32x32.png',
                sizes: '32x32'
            },
            {
                rel: 'icon',
                href: '/favicon-16x16.png',
                sizes: '16x16'
            },
            {
                rel: 'apple-touch-icon',
                href: '/touch-icon-ipad.jpg',
                sizes: '76x76'
            },
            {
                rel: 'manifest',
                href: '/manifest.json'
            },
        ],
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://my-gita.vercel.app/',
        siteName: 'Bhagavad Gita',
        images: [{
            url: "https://my-gita.vercel.app/home-cover.webp",
            alt: "Cover Image"
        }]
    },
    twitter: {
        cardType: 'summary_large_image',
        site: "https://my-gita.vercel.app/"
    },
};