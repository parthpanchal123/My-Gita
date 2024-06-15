import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../../../next-seo-config";

export default async function Head() {
  const updateMeta = {
    ...NEXT_SEO_DEFAULT,
    title: "Bhagavad Gita | All Chapters",
    description:
      "Explore the Bhagavad Gita in its entirety on our website. Discover the teachings of Lord Krishna chapter by chapter and uncover their profound insights. Our comprehensive resources offer a detailed analysis of each chapter, along with commentaries and translations to deepen your understanding. Whether you're a student of Hinduism or simply curious about this timeless text, our website provides a comprehensive guide to the Gita.Visit us now to dive into this transformative journey.",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://my-gita.vercel.app/chapter",
      siteName: "Bhagavad Gita",
      title: "Bhagavad Gita | All Chapters",
      description:
        "Explore the Bhagavad Gita in its entirety on our website. Discover the teachings of Lord Krishna chapter by chapter and uncover their profound insights. Our comprehensive resources offer a detailed analysis of each chapter, along with commentaries and translations to deepen your understanding. Whether you're a student of Hinduism or simply curious about this timeless text, our website provides a comprehensive guide to the Gita.Visit us now to dive into this transformative journey.",
      images: [
        {
          url: "https://i.imgur.com/Q90ij9U.png",
          alt: "Cover Image",
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      site: "https://my-gita.vercel.app/chapter",
      image: "https://i.imgur.com/Q90ij9U.png",
    },
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
