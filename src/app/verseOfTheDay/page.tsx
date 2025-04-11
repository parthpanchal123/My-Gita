import { Suspense } from "react";
import { kalam } from '../../../utils/fonts/Fonts';
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

interface Commentary {
  author_name: string;
  description: string;
}

interface VerseDetails {
  text: string;
  transliteration: string;
  translation: string;
  word_meanings: string;
  englishCommentaries: Commentary[];
  otherCommentaries: Commentary[];
}

async function getVerseDetails(): Promise<VerseDetails> {
  const verseId = await getVerseOfTheDayId();
  const verseData = await getVerseOfTheDay(verseId);
  const verseDetails = verseData.data.allGitaVerses.nodes[0];
  return verseDetails;
}

export default async function VerseOfTheDay() {
  const verseDetails = await getVerseDetails();

  return (
    <Suspense fallback={<VerseOTDLoading />}>
      <div className="min-h-screen bg-neutral-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Sanskrit Text */}
            <div className="bg-neutral-800 rounded-lg p-6 mb-8 shadow-lg animate-fade-in">
              <h2 className={`text-2xl md:text-3xl text-center mb-4 ${kalam.variable} font-display`}>
                {verseDetails?.text}
              </h2>
              <p className="text-gray-400 text-center">{verseDetails?.transliteration}</p>
            </div>

            {/* Translation */}
            <div className="bg-neutral-800 rounded-lg p-6 mb-8 shadow-lg animate-slide-up [animation-delay:200ms]">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Translation</h3>
              <p className="text-gray-300">{verseDetails?.translation}</p>
            </div>

            {/* Word Meanings */}
            <div className="bg-neutral-800 rounded-lg p-6 mb-8 shadow-lg animate-slide-up [animation-delay:400ms]">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Word Meanings</h3>
              <p className="text-gray-300">{verseDetails?.word_meanings}</p>
            </div>

            {/* Commentary */}
            <div className="space-y-6 animate-slide-up [animation-delay:600ms]">
              <h3 className="text-2xl font-semibold text-orange-400">Commentary</h3>
              
              {/* English Commentary */}
              {verseDetails?.englishCommentaries?.map((commentary: Commentary, index: number) => (
                <div 
                  key={commentary.author_name}
                  className="bg-neutral-800 rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-orange-500/10"
                  style={{ animationDelay: `${800 + (index * 200)}ms` }}
                >
                  <h4 className="text-lg font-medium mb-2 text-yellow-200">{commentary.author_name}</h4>
                  <p className="text-gray-300">{commentary.description}</p>
                </div>
              ))}

              {/* Other Commentaries */}
              {verseDetails?.otherCommentaries?.length > 0 && (
                <div className="mt-8 animate-slide-up [animation-delay:1000ms]">
                  <h3 className="text-2xl font-semibold mb-4 text-orange-400">Other Commentaries</h3>
                  {verseDetails?.otherCommentaries.map((commentary: Commentary, index: number) => (
                    <div 
                      key={commentary.author_name}
                      className="bg-neutral-800 rounded-lg p-6 mb-4 shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-orange-500/10"
                      style={{ animationDelay: `${1200 + (index * 200)}ms` }}
                    >
                      <h4 className="text-lg font-medium mb-2 text-yellow-200">{commentary.author_name}</h4>
                      <p className="text-gray-300">{commentary.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
