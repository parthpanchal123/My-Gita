import Header from "@/components/Header";
import ChapterTile from "@/components/ChapterTile";

import axios from "axios";

async function getData() {
	const payload = {
		"query": "query MyQuery { allGitaChapters { nodes { name slug nameTransliterated nameTranslated versesCount chapterNumber nameMeaning nameTranslated nameTransliterated chapterSummary}}}"
	}

	const response = await axios({
		url: "https://gql.bhagavadgita.io/graphql",
		method: 'post',
		data: payload
	});

	if (response.status != 200) {
		throw new Error('Failed to fetch data');
	}

	return response.data.data.allGitaChapters.nodes;

}

export default async function Chapters() {

	const allChaptersData = await getData();

	const [chapterData] = await Promise.all([allChaptersData]);

	console.log(chapterData);


	return (<div className="min-h-screen bg-neutral-900 text-white">
		<Header />

		<div className="container h-full mx-auto my-10 max-w-5xl p-2">
			{/* <div className="flex flex-col gap-y-5 justify-center items-center text-center"> */}
			<h1 className="min-w-screen font-extrabold text-3xl">Chapters</h1>
			{/* </div> */}

			<div className="flex flex-col flex-wrap md:flex-row min-w-screen">
				{
					chapterData.map((chapter, index) => (
						<ChapterTile chapter={chapter} />
					))

				}
			</div>
		</div >

	</div >)
};
