const ChapterTile = ({ chapter }) => {
    return (
        < div
            key={chapter.description}
            className=" w-full md:w-1/2 p-4"
        >
            <div
                className="flex flex-col bg-dark-100 z-30 shadow-xl  border-2 border-white dark:border-dark-bg mt-6 rounded-md p-6 hover:bg-box-bg dark:hover:bg-dark-bg hover:shadow-none hover:border-box-stroke dark:hover:border-dark-100 hover:border-2 hover:cursor-pointer dark:text-gray-200"
            >
                <h3 className="text-orange-500 font-bold">{`Chapter ${chapter.chapterNumber}`}</h3>
                <div className="flex flex-row gap-1">
                    <span className="text-h2 text-xl font-bold dark:text-white">{chapter.nameMeaning}</span>
                    <span className="text-h2 text-xl font-bold dark:text-white">{` (${chapter.name}) `}</span>
                </div>
                {/* <p className="flex-1 text-gray-500 dark:text-gray-100 mt-2"> */}
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

        </div>);
}

export default ChapterTile;