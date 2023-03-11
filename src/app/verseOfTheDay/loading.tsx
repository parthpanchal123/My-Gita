const Loading = () => {

	return (
		<div className="min-h-screen bg-neutral-900 text-white">
			<div className="container h-full mx-auto pt-5 max-w-5xl p-2">
				<div className="flex flex-col gap-y-5 justify-center items-center text-center">
					<div className="bg-gradient-to-r from-neutral-700 via-neutral-800 to-neutral-700 rounded-lg shadow-lg p-4 w-full animate-pulse">
						<div className="h-4 bg-neutral-800 rounded w-1/4"></div>
						<div className="mt-2 h-6 bg-neutral-800 rounded w-1/2"></div>
						<div className="mt-4 h-4 bg-neutral-800 rounded w-1/4"></div>
						<div className="mt-2 h-6 bg-neutral-800 rounded w-1/2"></div>
						<div className="mt-4 h-4 bg-neutral-800 rounded w-1/4"></div>
						<div className="mt-2 h-6 bg-neutral-800 rounded w-1/2"></div>
						<div className="mt-4 h-4 bg-neutral-800 rounded w-1/4"></div>
						<div className="mt-2 h-6 bg-neutral-800 rounded w-1/2"></div>
					</div>

				</div>
			</div>
		</div>

	);


}
export default Loading;