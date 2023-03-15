// app/profile/head.js
import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../../next-seo-config';


export default async function Head() {
    const updateMeta = {
        ...NEXT_SEO_DEFAULT,
        title: 'Bhagavad Gita | Verse Of The Day',
        description: 'Start your day with inspiration from the Bhagavad Gita. Our website offers a daily dose of wisdom with a randomly generated verse from this ancient Hindu scripture. Discover the profound teachings of Lord Krishna and apply them to your daily life. With our easy-to-use tool, you can access a new verse every day and reflect on its meaning. Join us now and experience the transformative power of the Gita.',
        openGraph: {
            type: 'website',
            locale: 'en_IE',
            url: 'https://my-gita.vercel.app/verseOfTheDay',
            siteName: 'Bhagavad Gita',
            images: [{
                url: "https://my-gita.vercel.app/home-cover.webp",
                alt: "Cover Image"
            }]
        },
        twitter: {
            cardType: 'summary_large_image',
            site: "https://my-gita.vercel.app/verseOfTheDay"
        }
    };
    return <NextSeo {...updateMeta} useAppDir={true} />;
}