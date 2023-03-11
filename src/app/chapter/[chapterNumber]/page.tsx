
import ChapterBg from "../../../../public/chapter-bg.svg"
import Pattern from "../../../../public/pattern.svg"
import { inter, kalam } from '../../../../public/fonts/Fonts';
import Link from "next/link";

export default async function ChapterData(context) {

	const chapterNumber = context.params.chapterNumber;

	const chapterData = await fetchData(chapterNumber);

	const { versesCount, nameTranslated, chapterSummary, gitaVersesByChapterId } = chapterData;

	const verseData = gitaVersesByChapterId.nodes;

	console.log(context);

	return (
		// <div>
		// 	<div className="max-w-5xl font-inter py-24 mx-auto text-center px-4 sm:px-6 relative">
		// 		<ChapterBg className="absolute text-gray-300 w-full lg:w-min dark:text-black text-opacity-25 dark:text-opacity-25 rounded-full m-auto left-0 right-0 bottom-0 -top-20 lg:top-20" />
		// 		<h1 className="text-xl uppercase font-medium text-orange-400 min-w-screen">{`Chapter - ${chapterNumber}`}</h1>
		// 		<h1 className="font-extrabold text-white my-8 text-3xl">{nameTranslated}</h1>
		// 		<p className="text-left dark:text-white mt-3 text-md">{chapterSummary}</p>
		// 	</div>
		// </div>
		<div className="min-h-screen bg-neutral-900 text-white">
			<div className="container h-full mx-auto pt-5 max-w-5xl p-2">
				<div className="flex flex-col gap-y-5 justify-center items-center text-center relative">
					<div className="max-w-5xl font-inter py-24 mx-auto text-center px-4 sm:px-6 relative">
						<ChapterBg className="absolute text-gray-300 w-full lg:w-min dark:text-black text-opacity-25 dark:text-opacity-25 rounded-full m-auto left-0 right-0 bottom-0 -top-20 lg:top-20" />
						<h1 className="text-xl uppercase font-medium text-orange-400 min-w-screen">{`Chapter - ${chapterNumber}`}</h1>
						<h1 className="font-extrabold text-white my-8 text-3xl">{nameTranslated}</h1>
						<p className="text-left dark:text-white mt-3 text-md">{chapterSummary}</p>
					</div>

					<Pattern />

					<div className="max-w-5xl py-8 mb-16 mx-auto px-4 sm:px-6">
						{
							verseData.map(verse => (
								<Link href={`/verse/${verse.id}`}>
									<div className="w-full flex flex-col lg:flex-row py-2 lg:py-5 justify-between px-6 hover:cursor-pointer hover:bg-neutral-800 rounded-lg">
										<div className="lg:w-1/5 font-medium text-orange-400 uppercase text-md">{`Verse ${verse.verseNumber}`}</div>
										<div className="flex-1 text-left text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-4 text-md">{verse.transliteration}
										</div>
									</div>
								</Link>
							))
						}
					</div>
				</div>
			</div>
		</div>
	);
}

const fetchData = async (chapterNumber) => {
	const payload = {
		"query": `query MyQuery { allGitaChapters(condition:{chapterNumber:${chapterNumber}}){ nodes { versesCount nameTranslated chapterSummary gitaVersesByChapterId{ nodes{ verseNumber transliteration id } } } }}`
	}

	const response = await fetch("https://gql.bhagavadgita.io/graphql", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		body: JSON.stringify(payload),
		cache: "force-cache"
	});


	if (response.status != 200) {
		throw new Error('Failed to fetch data');
	}

	const chapterJsonData = await response.json();

	return chapterJsonData.data.allGitaChapters.nodes[0];

}
