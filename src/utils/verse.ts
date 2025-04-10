import axios from "axios";

interface Commentary {
  description: string;
  authorName: string;
  language: string;
  authorId: number;
}

interface CommentaryResponse {
  english: Commentary;
  others: Commentary[];
}

export async function getVerseOfTheDay(verseId: String) {
  const payload = {
    operationName: "MyQuery",
    variables: {},
    query: `query MyQuery {\n  allGitaVerses(condition: {id: ${verseId}}) {\n    nodes {\n      verseNumber\n      chapterNumber\n      id\n      text\n      transliteration\n      wordMeanings\n      gitaTranslationsByVerseId(condition: {authorName: \"Swami Sivananda\"}) {\n        nodes {\n          description\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}`,
  };

  const response = await axios({
    url: "https://gql.bhagavadgita.io/graphql",
    method: "post",
    data: payload,
  });

  if (response.status != 200) {
    throw new Error("Failed to fetch data");
  }

  return response.data;
}

export async function getCommentary(verseId: String): Promise<CommentaryResponse> {
  const payload = {
    operationName: "MyQuery",
    variables: {},
    query: `query MyQuery {
            allGitaCommentaries(condition:{verseId:${verseId}}){
              nodes {
                description
                authorName
                language
                authorId
              }
            }
          }
          `,
  };

  const response = await axios({
    url: "https://gql.bhagavadgita.io/graphql",
    method: "post",
    data: payload,
  });

  if (response.status != 200) {
    throw new Error("Failed to fetch data");
  }

  let allLanguageCommentaries: Commentary[] = response.data.data.allGitaCommentaries.nodes;

  allLanguageCommentaries = allLanguageCommentaries.filter(
    (comm: Commentary) =>
      !comm.description.includes("did not comment") ||
      !comm.description.includes("no")
  );

  const englishCommData = allLanguageCommentaries.filter(
    (data: Commentary) => data.authorId === 16
  )[0];

  const retData: CommentaryResponse = {
    english: englishCommData,
    others: allLanguageCommentaries.filter((data: Commentary) => data.authorId !== 16),
  };

  return retData;
}

export async function getVerseOfTheDayId() {
  const payload = {
    operationName: "MyQuery",
    variables: {},
    query:
      "query MyQuery { allVerseOfTheDays(last: 1) {nodes {      verseOrder      date      __typename    }    __typename  }}",
  };

  const response = await axios({
    url: "https://gql.bhagavadgita.io/graphql",
    method: "post",
    data: payload,
  });

  if (response.status != 200) {
    throw new Error("Failed to fetch data");
  }

  return response.data.data.allVerseOfTheDays.nodes[0].verseOrder;
} 