import { Suspense } from "react";
import VerseOTDLoading from "./loading";
import VerseDetails from "@/components/VerseDetails";
import { getVerseOfTheDay, getVerseOfTheDayId } from "@/utils/verse";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My-Gita - Verse Of The Day",
  description: "Get the verse of the day from Bhagavad Gita",
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
};

export default async function VerseOfTheDay() {
  const verseId = await getVerseOfTheDayId();
  const verseData = await getVerseOfTheDay(verseId);
  const verseDetails = verseData.data.allGitaVerses.nodes[0];

  return (
    <Suspense fallback={<VerseOTDLoading />}>
      <VerseDetails verseData={verseDetails} showNavigation={false} isVerseOfTheDay={true} />
    </Suspense>
  );
}
