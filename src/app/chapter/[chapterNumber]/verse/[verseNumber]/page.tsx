import { Suspense } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import VerseDetails from "@/components/VerseDetails";

async function getVerseData(chapterNumber: string, verseNumber: string) {
  const payload = {
    operationName: "MyQuery",
    variables: {},
    query: `query MyQuery {
      allGitaVerses(condition: {chapterNumber: ${chapterNumber}, verseNumber: ${verseNumber}}) {
        nodes {
          verseNumber
          chapterNumber
          id
          text
          transliteration
          wordMeanings
          gitaTranslationsByVerseId(condition: {authorName: "Swami Sivananda"}) {
            nodes {
              description
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
    }`,
  };

  const response = await axios({
    url: "https://gql.bhagavadgita.io/graphql",
    method: "post",
    data: payload,
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch verse data");
  }

  return response.data.data.allGitaVerses.nodes[0];
}

export default async function VersePage({ 
  params 
}: { 
  params: { chapterNumber: string; verseNumber: string } 
}) {
  const verseData = await getVerseData(params.chapterNumber, params.verseNumber);

  return (
    <Suspense fallback={<Loading />}>
      <VerseDetails verseData={verseData} showNavigation={true} />
    </Suspense>
  );
} 