const Loading = () => {
	return (
		<div className="min-h-screen bg-neutral-900 text-white">
			<div className="container h-full mx-auto pt-5 max-w-5xl p-2">
				{/* Shimmer effect for Chapter title */}
				<div className="animate-pulse max-w-5xl font-inter py-24 mx-auto text-center px-4 sm:px-6 relative">
					<div className="absolute text-gray-300 w-full lg:w-min dark:text-black text-opacity-25 dark:text-opacity-25 rounded-full m-auto left-0 right-0 bottom-0 -top-20 lg:top-20" />
					<h1 className="text-xl uppercase font-medium text-transparent bg-gray-300 dark:bg-black bg-opacity-25 dark:bg-opacity-25 min-w-screen">Chapter - </h1>
					<h1 className="font-extrabold text-transparent bg-gray-300 dark:bg-black bg-opacity-25 dark:bg-opacity-25 my-8 text-3xl">Loading...</h1>
					<p className="text-left dark:text-white mt-3 text-md">Loading...</p>
				</div>

				{/* Shimmer effect for Verse list */}
				<div className="max-w-5xl py-8 mb-16 mx-auto px-4 sm:px-6">
					{[...Array(10)].map((_, index) => (
						<div key={index} className="w-full flex flex-col lg:flex-row py-2 lg:py-5 justify-between px-6 animate-pulse hover:bg-neutral-800 rounded-lg">
							<div className="lg:w-1/5 font-medium text-transparent bg-gray-300 dark:bg-black bg-opacity-25 dark:bg-opacity-25 uppercase text-md">{`Verse `}</div>
							<div className="flex-1 text-left text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-4 text-md">Loading...</div>
						</div>
					))}
				</div>
			</div>
		</div>

	);
}

export default Loading