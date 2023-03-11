import Header from "@/components/Header";
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
						< div
							key={index}
							className=" w-full md:w-1/2 p-4"
						>
							<div
								className="flex flex-col bg-dark-100 z-30 shadow-xl  border-2 border-white dark:border-dark-bg mt-6 rounded-md p-6 hover:bg-box-bg dark:hover:bg-dark-bg hover:shadow-none hover:border-box-stroke dark:hover:border-dark-100 hover:border-2 hover:cursor-pointer dark:text-gray-200"
							>
								<h3 className="text-orange-500 font-bold">{`Chapter ${chapter.chapterNumber}`}</h3>
								<h2 className="text-xl font-bold dark:text-white">{chapter.nameMeaning}</h2>
								<p className="flex-1 text-gray-500 dark:text-gray-100 mt-2 overflow-ellipsis">
									{chapter.description}
								</p>
								<div className="flex justify-between">
									<div className="flex text-sm items-center mt-4 ">
										<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" className="mr-4">
											<path
												fill="currentColor"
												fill-rule="evenodd"
												d="M1.5 2.125a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75ZM5.656.812a.656.656 0 0 0 0 1.313H15.72a.656.656 0 0 0 0-1.313H5.656Zm0 5.25a.656.656 0 0 0 0 1.313H15.72a.656.656 0 0 0 0-1.313H5.656Zm0 5.25a.656.656 0 0 0 0 1.313H15.72a.656.656 0 0 0 0-1.313H5.656ZM2.375 6.5a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0ZM1.5 12.625a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
												clip-rule="evenodd"
											></path>
										</svg>
										{` ${chapter.versesCount} Verses `}
									</div>

								</div>
							</div>

						</div>

					))

				}
			</div>
		</div >

	</div >)
};
