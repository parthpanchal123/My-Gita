import ChapterTile from "@/components/ChapterTile";

import { Suspense } from "react";
import Loading from "./loading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My-Gita - All Chapters",
  description: "Get all the chapters of Bhagavad Gita",
  keywords: [
    "Chapters",
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

async function getData() {
  const payload = {
    query:
      "query MyQuery { allGitaChapters { nodes { name slug nameTransliterated nameTranslated versesCount chapterNumber nameMeaning nameTranslated nameTransliterated chapterSummary}}}",
  };

  const response = await fetch("https://gql.bhagavadgita.io/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
    cache: "force-cache",
  });

  if (response.status != 200) {
    throw new Error("Failed to fetch data");
  }

  const chapterJsonData = await response.json();

  return chapterJsonData.data.allGitaChapters.nodes;
}

export default async function Chapters() {
  const allChaptersData = await getData();

  const [chapterData] = await Promise.all([allChaptersData]);

  console.log(chapterData);

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container h-full mx-auto max-w-5xl p-2">
        <h1 className="min-w-screen font-extrabold text-3xl ml-4 mt-2">
          Chapters
        </h1>
        <div className="flex flex-col flex-wrap md:flex-row min-w-screen">
          {chapterData.map((chapter, index) => (
            <Suspense key={index} fallback={<Loading />}>
              <ChapterTile chapter={chapter} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}
