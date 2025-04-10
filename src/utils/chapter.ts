import axios from "axios";

export interface ChapterData {
  chapterNumber: string;
  nameTranslated: string;
  name: string;
}

export async function getChapterName(chapterNumber: string): Promise<ChapterData> {
  const payload = {
    query: `query MyQuery {
      allGitaChapters(condition: {chapterNumber: ${chapterNumber}}) {
        nodes {
          chapterNumber
          nameTranslated
          name
        }
      }
    }`,
  };

  const response = await axios({
    url: "https://gql.bhagavadgita.io/graphql",
    method: "post",
    data: payload,
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch chapter data");
  }

  return response.data.data.allGitaChapters.nodes[0];
} 