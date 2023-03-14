import Header from "@/components/Header";
import axios from "axios";
import Image from "next/image";
import Pattern from "../../../public/pattern.svg"
import { Suspense } from "react";
import Loading from "@/components/Loading";
import VerseOTDLoading from "./loading";
import { kalam, inter } from "../../../utils/fonts/Fonts";

async function getVerseId() {
    const payload = {
        "operationName": "MyQuery",
        "variables": {},
        "query": "query MyQuery { allVerseOfTheDays(last: 1) {nodes {      verseOrder      date      __typename    }    __typename  }}"
    }

    const response = await axios({
        url: "https://gql.bhagavadgita.io/graphql",
        method: 'post',
        data: payload
    });

    if (response.status != 200) {
        throw new Error('Failed to fetch data');
    }

    return response.data.data.allVerseOfTheDays.nodes[0].verseOrder;
}
async function getVerseOfTheDay(verseId: String) {

    const payload = {
        "operationName": "MyQuery",
        "variables": {},
        "query": `query MyQuery {\n  allGitaVerses(condition: {id: ${verseId}}) {\n    nodes {\n      verseNumber\n      chapterNumber\n      id\n      text\n      transliteration\n      wordMeanings\n      gitaTranslationsByVerseId(condition: {authorName: \"Swami Sivananda\"}) {\n        nodes {\n          description\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}`
    }

    const response = await axios({
        url: "https://gql.bhagavadgita.io/graphql",
        method: 'post',
        data: payload
    });

    if (response.status != 200) {
        throw new Error('Failed to fetch data');
    }

    return response.data;
}
async function getCommentary(verseId: String) {

    const payload = {
        "operationName": "MyQuery",
        "variables": {},
        "query": `query MyQuery {
            allGitaCommentaries(condition:{verseId:${verseId}}){
              nodes {
                description
                authorName
                language
                authorId
              }
            }
          }
          `
    }

    const response = await axios({
        url: "https://gql.bhagavadgita.io/graphql",
        method: 'post',
        data: payload
    });

    if (response.status != 200) {
        throw new Error('Failed to fetch data');
    }

    let allLanguageCommentaries = response.data.data.allGitaCommentaries.nodes;

    allLanguageCommentaries = allLanguageCommentaries.filter((comm) => !comm.description.includes("did not comment") || !comm.description.includes("no"))

    const englishCommData = allLanguageCommentaries.filter((data) => data.authorId === 16)[0]

    let retData = {
        english: englishCommData,
        others: allLanguageCommentaries.filter((data) => data.authorId !== 16)
    }


    return retData;

}

export default async function VerseOfTheDay() {
    const verseId = await getVerseId();

    const verseData = await getVerseOfTheDay(verseId);

    const commentaryData = await getCommentary(verseId);

    const [_, verseDetailData, commentaryDesc] = await Promise.all([verseId, verseData, commentaryData]);

    const { verseNumber, chapterNumber, text, transliteration, wordMeanings, gitaTranslationsByVerseId } = verseDetailData.data.allGitaVerses.nodes[0];

    const splitMeanings = wordMeanings.split(";")

    console.log(splitMeanings);


    const translation = gitaTranslationsByVerseId.nodes[0].description;

    return (
        <Suspense fallback={<VerseOTDLoading />}>
            <div className="min-h-screen bg-neutral-900 text-white">
                <div className="container h-full mx-auto pt-5 max-w-5xl p-2">
                    <div className="flex flex-col gap-y-5 justify-center items-center text-center">
                        <h1 className="min-w-screen font-extrabold text-3xl">{`BG - ${chapterNumber}.${verseNumber}`}</h1>
                        <p className={`text-3xl text-orange-400 ${kalam.variable} font-display max-w-md`}>{text}</p>

                        <p className={`text-xl text-white ${inter.variable} font-sans mx-auto max-w-md`}>{transliteration}</p>
                        <ul className=" flex flex-row flex-wrap text-center gap-2 justify-center items-start max-w-md">
                            {
                                splitMeanings.map((meaning, index) => {

                                    const lastIndex = meaning.lastIndexOf("—");
                                    const word = meaning.slice(0, lastIndex)
                                    const m = meaning.slice(lastIndex + 1)

                                    return <li key={index}>
                                        <span className="font-bold text-orange-200">{word}</span>
                                        <span> - </span>
                                        <span className="text-white">{m}</span>
                                    </li>

                                })

                            }
                        </ul>
                        <Pattern />

                        <h1 className="min-w-screen font-extrabold text-3xl">Translation</h1>
                        <p className={`text-md text-justify ${inter.variable} font-sans`}>{translation}</p>
                        <h1 className="min-w-screen font-extrabold text-3xl">Commentary</h1>
                        <div className="flex flex-col justify-start items-start border-b border-gray-200 gap-y-1 py-4">
                            {
                                <>
                                    <h1 className="text-md mb-2">By - <span className="text-orange-400 italic text-base">{commentaryDesc.english.authorName}</span></h1>
                                    <p className={`text-md text-justify ${inter.variable} font-sans`}>{commentaryDesc.english.description}</p>
                                </>
                            }
                        </div>
                        <div className="flex flex-col w-100% justify-start items-start ">
                            {
                                commentaryDesc.others.map((commentary, index) => (
                                    <div key={index} className="flex flex-col justify-start items-start border-b border-gray-200 gap-y-1 py-4">
                                        <h1 className="text-md mb-2">By - <span className="text-orange-400 italic text-base">{commentary.authorName}<span className="text-white non-italic capitalize"> , in {commentary.language}</span></span></h1>
                                        <p className={`text-md text-justify ${inter.variable} font-sans`}>{commentary.description}</p>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}
