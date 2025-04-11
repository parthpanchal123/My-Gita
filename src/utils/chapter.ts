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

export interface Chapter {
  chapter_number: string;
  name_translated: string;
  name_meaning: string;
  chapter_summary: string;
  verses_count: string;
}

export async function getChapters(): Promise<Chapter[]> {
  const payload = {
    query: `query MyQuery {
      allGitaChapters {
        nodes {
          chapterNumber
          nameTranslated
          nameMeaning
          chapterSummary
          versesCount
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
    throw new Error("Failed to fetch chapters data");
  }

  // Transform the data to match the Chapter interface
  return response.data.data.allGitaChapters.nodes.map((node: any) => ({
    chapter_number: node.chapterNumber,
    name_translated: node.nameTranslated,
    name_meaning: node.nameMeaning,
    chapter_summary: node.chapterSummary,
    verses_count: node.versesCount,
  }));
} 