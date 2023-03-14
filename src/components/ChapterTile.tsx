import Link from "next/link";
import { kalam } from "../../utils/fonts/Fonts";

const ChapterTile = ({ chapter }) => {
    return (
        < div
            key={chapter.description}
            className=" w-full md:w-1/2 p-4"
        >
            <Link href={`/chapter/${chapter.chapterNumber}`}>
                <div
                    className="flex flex-col hover:transition ease-in-out delay-100 bg-neutral-800 hover:bg-neutral-900 hover:border border-neutral-800 z-30 shadow-xl mt-6 rounded-md p-6 hover:cursor-pointer text-gray-200"
                >
                    <h3 className="text-orange-500 font-bold">{`Chapter ${chapter.chapterNumber}`}</h3>
                    <div className="gap-1 flex flex-col ">
                        <span className="text-xl font-bold dark:text-white">{chapter.nameTranslated}</span>
                        <span className={`text-xl ${kalam.variable} font-display font-bold d text-orange-200`}>{` (${chapter.name}) `}</span>
                    </div>
                    <div className="line-clamp-5">
                        {chapter.chapterSummary}
                    </div>
                    {/* </p> */}
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
            </Link>

        </div>);
}

export default ChapterTile;