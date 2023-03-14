"use client"
import ChapterBg from "../../../../public/chapter-bg.svg";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import useSWR from 'swr';
import axios from "axios";
import ScrollUp from "../../../../public/scroll-up.svg";
import PerChapterLoading from "./loading";


export default function ChapterData(context) {

	const [verseNumber, setVerseNumber] = useState("");
	const [verseArray, setVerseArray] = useState([])
	const [showScrollButton, setShowScrollButton] = useState(false);
	const [chapterData, setChapterData] = useState({
		versesCount: "", nameTranslated: "", chapterSummary: "", verseArray: []
	});

	const chapterNumber = context.params.chapterNumber;

	const fetchData = () => {

		const payload = {
			"query": `query MyQuery {allGitaChapters(condition:{chapterNumber:${chapterNumber}}){nodes {versesCount nameTranslated chapterSummary gitaVersesByChapterId{nodes{verseNumber transliteration id } } } }}`
		}

		return axios("https://gql.bhagavadgita.io/graphql", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			data: payload,

		});

	}

	const { data, isLoading, error } = useSWR(`/chapter/${chapterNumber}`, fetchData)

	const handleVerseChange = (event) => {

		const numberCheck = /^$|^\d+$/;

		if (!numberCheck.test(event.target.value)) {
			return;
		}

		setVerseNumber(event.target.value)

		if (event.target.value.trim() === "") {
			setChapterData({
				...chapterData,
				verseArray: verseArray
			})
			return;
		}

		const filtered = verseArray.filter(data => data.verseNumber == event.target.value)

		setChapterData({
			...chapterData,
			verseArray: filtered
		})
	}

	useEffect(() => {

		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		});

		if (data) {
			setChapterData({
				...chapterData,
				versesCount: data.data.data.allGitaChapters.nodes[0].versesCount,
				chapterSummary: data.data.data.allGitaChapters.nodes[0].chapterSummary,
				nameTranslated: data.data.data.allGitaChapters.nodes[0].nameTranslated,
				verseArray: data.data.data.allGitaChapters.nodes[0].gitaVersesByChapterId.nodes
			})

			setVerseArray([...data.data.data.allGitaChapters.nodes[0].gitaVersesByChapterId.nodes])

		}

		return () => { }
	}, [isLoading])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	if (error) return <div>Failed to load</div>
	if (!data) return <PerChapterLoading />

	return (
		<Suspense fallback={<PerChapterLoading />}>
			<div className="min-h-screen bg-neutral-900 text-white">
				<div className="container h-full mx-auto pt-5 max-w-5xl p-2">
					<div className="flex flex-col gap-y- justify-center items-center text-center ">
						<div className="max-w-5xl font-inter py-22 mx-auto text-center px-4 sm:px-6 relative">
							<ChapterBg className="z-0 absolute text-gray-300 w-full lg:w-min dark:text-black text-opacity-25 dark:text-opacity-25 rounded-full m-auto left-0 right-0 bottom-0 lg:top-20" />
							<h1 className="text-xl uppercase font-medium text-orange-400 min-w-screen z-50">{`Chapter - ${chapterNumber}`}</h1>
							<h1 className="font-extrabold text-white my-8 text-3xl z-50">{chapterData.nameTranslated}</h1>
							<p className="text-justify dark:text-white mt-3 text-md z-50">{chapterData.chapterSummary}</p>
						</div>

						{/* <Pattern /> */}


						{
							chapterNumber !== "1" && <Link href={`/chapter/${parseInt(chapterNumber) - 1}`}><div className="rounded-full h-10 w-10 fixed z-neg top-1/2 md:top-1/3 left-3 hover:brightness-90 hover:cursor-pointer flex justify-center items-center  bg-dark-100 dark:hover:bg-dark-bg dark:border-gray-600 border">
								<svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-50"><path fillRule="evenodd" clipRule="evenodd" d="M5.707.293a1 1 0 0 1 0 1.414L2.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z" fill="currentColor"></path></svg></div></Link>
						}
						{
							chapterNumber !== "18" && <Link href={`/chapter/${parseInt(chapterNumber) + 1}`}><div className="rounded-full h-10 w-10 fixed z-neg top-1/2 md:top-1/3 right-3 hover:brightness-90 hover:cursor-pointer flex justify-center items-center bg-dark-100 dark:hover:bg-dark-bg dark:border-gray-600 border"><svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:text-gray-50"><path fillRule="evenodd" clipRule="evenodd" d="M.293 9.707a1 1 0 0 1 0-1.414L3.586 5 .293 1.707A1 1 0 0 1 1.707.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z" fill="currentColor"></path></svg></div></Link>
						}
					</div>
					<div className="max-w-5xl py-4 mb-16 px-4 sm:px-6">
						<div className="max-w-5xl font-inter  text-center  px-4 sm:px-6">
							<div className="flex flex-col md:flex-row items-center justify-between border-t py-6 border-b gap-x-1 sm:gap-y-1 border-gray-200">
								<div className="font-extrabold text-white text-md">{`${chapterData.versesCount} Verses`}</div>
								<div className="mt-1 flex rounded-md shadow-sm">
									<div className="flex items-stretch flex-grow focus-within:z-10">
										<input value={verseNumber} onChange={handleVerseChange} placeholder="Enter Verse No." className="w-100% rounded-md py-2 px-1 border border-white bg-neutral-700 focus-within:border-orange-500"></input>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="top-10 flex absolute w-full bg-white dark:bg-dark-bg p-3 flex-wrap border border-gray-200 border-dark-100 shadow rounded hidden">
											<div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-orange-200 hover:text-white bg-my-orange text-white text-md">All</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">1</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">2</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">3</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">4</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">5</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">6</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">7</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">8</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">9</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">10</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">11</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">12</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">13</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">14</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">15</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">16</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">17</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">18</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">19</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">20</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">21</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">22</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">23</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">24</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">25</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">26</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">27</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">28</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">29</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">30</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">31</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">32</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">33</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">34</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">35</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">36</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">37</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">38</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">39</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">40</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">41</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">42</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">43</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">44</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">45</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">46</div><div className="flex items-center justify-center min-w-[2.5rem] p-2 m-px rounded hover:cursor-pointer hover:bg-my-orange hover:text-white false text-md">47</div></div><button type="button" className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium dark:bg-dark-100 rounded-r-md text-gray-700 dark:text-gray-50 bg-gray-50 hover:bg-gray-100 dark:hover:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-400 dark:text-gray-50" aria-hidden="true"><path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg><span className="text-md">Sort</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-400 dark:text-gray-50" aria-hidden="true"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button></div></div></div> */}
						{
							chapterData.verseArray?.map((verse) => (
								<Link href={`/verse/${verse.id}`} key={verse.id}>
									<div className="w-full flex flex-col lg:flex-row py-2 lg:py-5 justify-between px-6 hover:cursor-pointer hover:bg-neutral-800 rounded-lg mt-5">
										<div className="lg:w-1/5 font-medium text-orange-400 uppercase text-md text-left">{`Verse ${verse.verseNumber}`}</div>
										<div className="flex-1 text-left text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-4 text-md">{verse.transliteration}
										</div>
									</div>
								</Link>
							))
						}
					</div>
				</div>
				{showScrollButton && (
					<ScrollUp className="hover:cursor-pointer border border-gray-100 fixed bottom-10 right-10 w-12 h-12 rounded-full bg-neutral-800 shadow-2xl text-orange-300" onClick={scrollToTop} />
				)}
			</div>
		</Suspense>
	);
}

export async function generateStaticParams() {
	const pathIds = Array.from(Array(12).keys()).map(x => x + 1);

	const paths = pathIds.map(pathId => ({
		chapterNumber: pathId
	}))

	return {
		paths,
		fallback: false,
	};
}

