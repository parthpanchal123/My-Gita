import Header from "@/components/Header";
import axios from "axios";
import { inter, kalam } from "../../../public/fonts/Fonts";
import Image from "next/image";
import Pattern from "../../../public/pattern.svg"
import { Suspense } from "react";
import Loading from "./loading";

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
            allGitaCommentaries(condition:{authorId:16 , verseId:${verseId}}){
              nodes {
                description
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

    return response.data.data.allGitaCommentaries.nodes[0].description;

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
        <Suspense fallback={<Loading />}>
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
                        <p className={`text-md text-justify ${inter.variable} font-sans`}>{commentaryDesc}</p>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}
