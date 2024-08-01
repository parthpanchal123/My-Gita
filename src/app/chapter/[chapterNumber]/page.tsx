import axios from "axios";
import ChapterDetails from "./ChapterDetails";
import { Metadata, ResolvingMetadata } from "next";

async function getChapterDetails(chapterNumber: number) {
  const payload = {
    query: `query MyQuery {allGitaChapters(condition:{chapterNumber:${chapterNumber.toString()}}){nodes {versesCount nameTranslated chapterSummary gitaVersesByChapterId{nodes{verseNumber transliteration id } } } }}`,
  };

  const respData = await axios("https://gql.bhagavadgita.io/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: payload,
  });

  // console.log("Checking chapter details");
  // console.log(respData.data.data.allGitaChapters.nodes[0]);

  return respData.data.data.allGitaChapters.nodes[0];
}

export default async function ChapterData({
  params,
}: {
  params: { chapterNumber: string };
}) {
  const chapterNumber = parseInt(params.chapterNumber);
  const chapterDetails = await getChapterDetails(chapterNumber);

  return (
    <ChapterDetails
      chapterDataTemp={chapterDetails}
      chapterNumber={chapterNumber.toString()}
    />
  );
}

type Props = {
  params: { chapterNumber: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getChapterDetails(parseInt(params.chapterNumber));

  console.log("Check metadata here");
  console.log(product);

  return {
    title: product.nameTransalated
      ? "Chapter - " + params.chapterNumber + ": " + product.nameTransalated
      : "My-Gita - Chapter - " + params.chapterNumber,
    description: product.chapterSummary,
  };
}
