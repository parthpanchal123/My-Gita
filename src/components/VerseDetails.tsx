"use client";

import { useState } from "react";
import Link from "next/link";
import { getCommentary } from "@/utils/verse";
import Pattern from "../../public/pattern.svg";
import { kalam, inter } from "../../utils/fonts/Fonts";

interface Commentary {
  description: string;
  authorName: string;
  language: string;
  authorId: number;
}

interface VerseData {
  verseNumber: string;
  chapterNumber: string;
  id: string;
  text: string;
  transliteration: string;
  wordMeanings: string;
  gitaTranslationsByVerseId: {
    nodes: Array<{
      description: string;
    }>;
  };
  versesCount?: number;
}

interface VerseDetailsProps {
  verseData: VerseData;
  showNavigation?: boolean;
  isVerseOfTheDay?: boolean;
}

const CHAPTER_VERSES: Record<number, number> = {
  1: 47,
  2: 72,
  3: 43,
  4: 42,
  5: 29,
  6: 47,
  7: 30,
  8: 28,
  9: 34,
  10: 42,
  11: 55,
  12: 20,
  13: 35,
  14: 27,
  15: 20,
  16: 24,
  17: 28,
  18: 78
};

const TOTAL_CHAPTERS = 18;

export default function VerseDetails({ 
  verseData,
  showNavigation = true,
  isVerseOfTheDay = false
}: VerseDetailsProps) {
  const [commentaries, setCommentaries] = useState<{
    english?: Commentary;
    others: Commentary[];
  }>({ others: [] });

  const [showCommentary, setShowCommentary] = useState(false);

  const handleCommentaryClick = async () => {
    if (!showCommentary && !commentaries.english) {
      const commentaryData = await getCommentary(verseData.id);
      setCommentaries(commentaryData);
    }
    setShowCommentary(!showCommentary);
  };

  const splitMeanings = verseData.wordMeanings.split(";");
  const currentChapter = parseInt(verseData.chapterNumber);
  const currentVerse = parseInt(verseData.verseNumber);
  const isFirstVerse = currentVerse === 1;
  const isFirstChapter = currentChapter === 1;
  const isLastVerseOfChapter = currentVerse === CHAPTER_VERSES[currentChapter];
  const isLastChapter = currentChapter === TOTAL_CHAPTERS;
  const isLastVerse = isLastChapter && isLastVerseOfChapter;

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container h-full mx-auto pt-5 max-w-5xl p-2">
        <div className="flex flex-col gap-y-5 justify-center items-center text-center">
          <h1 className="min-w-screen font-extrabold text-3xl">
            {isVerseOfTheDay ? "Verse of the Day" : `BG - ${verseData.chapterNumber}.${verseData.verseNumber}`}
          </h1>
          
          <p className={`text-3xl text-orange-400 ${kalam.variable} font-display max-w-md`}>
            {verseData.text}
          </p>

          <p className={`text-xl text-white ${inter.variable} font-sans mx-auto max-w-md`}>
            {verseData.transliteration}
          </p>

          <ul className="flex flex-row flex-wrap text-center gap-2 justify-center items-start max-w-md">
            {splitMeanings.map((meaning, index) => {
              const lastIndex = meaning.lastIndexOf("—");
              const word = meaning.slice(0, lastIndex);
              const m = meaning.slice(lastIndex + 1);

              return (
                <li key={index}>
                  <span className="font-bold text-orange-200">{word}</span>
                  <span> - </span>
                  <span className="text-white">{m}</span>
                </li>
              );
            })}
          </ul>

          <Pattern />

          <h1 className="min-w-screen font-extrabold text-3xl">Translation</h1>
          <p className={`text-md text-justify ${inter.variable} font-sans`}>
            {verseData.gitaTranslationsByVerseId.nodes[0]?.description}
          </p>

          <h1 className="min-w-screen font-extrabold text-3xl">Commentary</h1>
          <button
            onClick={handleCommentaryClick}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
          >
            {showCommentary ? "Hide Commentary" : "Show Commentary"}
          </button>

          {showCommentary && (
            <>
              {commentaries.english && (
                <div className="flex flex-col justify-start items-start border-b border-gray-200 gap-y-1 py-4">
                  <h1 className="text-md mb-2">
                    By -{" "}
                    <span className="text-orange-400 italic text-base">
                      {commentaries.english.authorName}
                    </span>
                  </h1>
                  <p className={`text-md text-justify ${inter.variable} font-sans`}>
                    {commentaries.english.description}
                  </p>
                </div>
              )}

              <div className="flex flex-col w-100% justify-start items-start">
                {commentaries.others.map((commentary, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-start items-start border-b border-gray-200 gap-y-1 py-4"
                  >
                    <h1 className="text-md mb-2">
                      By -{" "}
                      <span className="text-orange-400 italic text-base">
                        {commentary.authorName}
                        <span className="text-white non-italic capitalize">
                          {" "}
                          , in {commentary.language}
                        </span>
                      </span>
                    </h1>
                    <p className={`text-md text-justify ${inter.variable} font-sans`}>
                      {commentary.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Navigation */}
          {showNavigation && (
            <>
              {(!isFirstChapter || !isFirstVerse) && (
                <Link 
                  href={
                    isFirstVerse && !isFirstChapter
                      ? `/chapter/${currentChapter - 1}/verse/${CHAPTER_VERSES[currentChapter - 1]}`
                      : `/chapter/${currentChapter}/verse/${currentVerse - 1}`
                  }
                >
                  <div className="rounded-full h-10 w-10 fixed z-neg top-1/2 md:top-1/3 left-3 hover:brightness-90 hover:cursor-pointer flex justify-center items-center bg-dark-100 dark:hover:bg-dark-bg dark:border-gray-600 border">
                    <svg
                      width="6"
                      height="10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-50"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.707.293a1 1 0 0 1 0 1.414L2.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
              )}
              {!isLastVerse && (
                <Link 
                  href={
                    isLastVerseOfChapter 
                      ? `/chapter/${currentChapter + 1}/verse/1`
                      : `/chapter/${currentChapter}/verse/${currentVerse + 1}`
                  }
                >
                  <div className="rounded-full h-10 w-10 fixed z-neg top-1/2 md:top-1/3 right-3 hover:brightness-90 hover:cursor-pointer flex justify-center items-center bg-dark-100 dark:hover:bg-dark-bg dark:border-gray-600 border">
                    <svg
                      width="6"
                      height="10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:text-gray-50"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M.293 9.707a1 1 0 0 1 0-1.414L3.586 5 .293 1.707A1 1 0 0 1 1.707.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
} 