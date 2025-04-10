"use client";
import ChapterBg from "../../../../public/chapter-bg.svg";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import ScrollUp from "../../../../public/scroll-up.svg";
import PerChapterLoading from "./loading";

export default function ChapterDetails({
  chapterDataTemp,
  chapterNumber,
}: {
  chapterDataTemp: any;
  chapterNumber: string;
}) {
  const [verseNumber, setVerseNumber] = useState("");
  const [verseArray, setVerseArray] = useState(
    chapterDataTemp.gitaVersesByChapterId.nodes
  );
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [chapterData, setChapterData] = useState({
    versesCount: chapterDataTemp.versesCount,
    nameTranslated: chapterDataTemp.nameTranslated,
    chapterSummary: chapterDataTemp.chapterSummary,
    verseArray: chapterDataTemp.gitaVersesByChapterId.nodes,
  });

  const handleVerseChange = (event) => {
    const numberCheck = /^$|^\d+$/;

    if (!numberCheck.test(event.target.value)) {
      return;
    }

    setVerseNumber(event.target.value);

    if (event.target.value.trim() === "") {
      setChapterData({
        ...chapterData,
        verseArray: verseArray,
      });
      return;
    }

    const filtered = verseArray.filter(
      (data) => data.verseNumber == event.target.value
    );

    setChapterData({
      ...chapterData,
      verseArray: filtered,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Suspense fallback={<PerChapterLoading />}>
      <div className="min-h-screen bg-neutral-900 text-white">
        <div className="container h-full mx-auto pt-5 max-w-5xl p-2">
          <div className="flex flex-col gap-y- justify-center items-center text-center ">
            <div className="max-w-5xl font-inter py-22 mx-auto text-center px-4 sm:px-6 relative">
              {/* <ChapterBg className="absolute text-gray-300 w-full sm:w-50 lg:w-min dark:text-black text-opacity-25 dark:text-opacity-25 rounded-full m-auto left-0 right-0 bottom-0 lg:top-20" /> */}
              <h1 className="text-xl uppercase font-medium text-orange-400 min-w-screen z-50">{`Chapter - ${chapterNumber}`}</h1>
              <h1
                className="font-extrabold text-white my-8 text-3xl"
                style={{
                  zIndex: 1000,
                }}
              >
                {chapterData.nameTranslated}
              </h1>
              <p
                className="text-justify dark:text-white mt-3 text-md"
                style={{
                  zIndex: 1000,
                }}
              >
                {chapterData.chapterSummary}
              </p>
            </div>

            {/* <Pattern /> */}

            {chapterNumber !== "1" && (
              <Link href={`/chapter/${parseInt(chapterNumber) - 1}`}>
                <div className="rounded-full h-10 w-10 fixed z-neg top-1/2 md:top-1/3 left-3 hover:brightness-90 hover:cursor-pointer flex justify-center items-center  bg-dark-100 dark:hover:bg-dark-bg dark:border-gray-600 border">
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
                    ></path>
                  </svg>
                </div>
              </Link>
            )}
            {chapterNumber !== "18" && (
              <Link href={`/chapter/${parseInt(chapterNumber) + 1}`}>
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
                    ></path>
                  </svg>
                </div>
              </Link>
            )}
          </div>
          <div className="max-w-5xl py-4 mb-16 px-4 sm:px-6">
            <div className="max-w-5xl font-inter  text-center  px-4 sm:px-6">
              <div className="flex flex-col md:flex-row items-center justify-between border-t py-6 border-b gap-x-1 sm:gap-y-1 border-gray-200">
                <div className="font-extrabold text-white text-md">{`${chapterData.versesCount} Verses`}</div>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <div className="flex items-stretch flex-grow focus-within:z-10">
                    <input
                      value={verseNumber}
                      onChange={handleVerseChange}
                      placeholder="Enter Verse No."
                      className="w-100% rounded-md py-2 px-1 border border-white bg-neutral-700 focus-within:border-orange-500"
                    ></input>
                  </div>
                </div>
              </div>
            </div>{" "}
            {chapterData.verseArray?.map((verse: any) => (
              <Link href={`/chapter/${chapterNumber}/verse/${verse.verseNumber}`} key={verse.id}>
                <div className="w-full flex flex-col lg:flex-row py-2 lg:py-5 justify-between px-6 hover:cursor-pointer hover:bg-neutral-800 rounded-lg mt-5">
                  <div className="lg:w-1/5 font-medium text-orange-400 uppercase text-md text-left">{`Verse ${verse.verseNumber}`}</div>
                  <div className="flex-1 text-left text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-4 text-md">
                    {verse.transliteration}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {showScrollButton && (
          <ScrollUp
            className="hover:cursor-pointer border border-gray-100 fixed bottom-10 right-10 w-12 h-12 rounded-full bg-neutral-800 shadow-2xl text-orange-300"
            onClick={scrollToTop}
          />
        )}
      </div>
    </Suspense>
  );
}
