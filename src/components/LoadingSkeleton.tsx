const LoadingSkeleton = () => {
	return <div className="w-full md:w-1/2 p-4">
		<div className="flex flex-col bg-neutral-800 z-30 shadow-xl mt-6 rounded-md p-6 text-gray-200 animate-pulse">
			<h3 className="w-1/2 h-6 mb-4 bg-gray-500 rounded"></h3>
			<div className="w-full h-6 mb-4 bg-gray-500 rounded"></div>
			<div className="w-full h-6 mb-4 bg-gray-500 rounded"></div>
			<div className="w-4/5 h-6 mb-2 bg-gray-500 rounded"></div>
			<div className="w-full h-6 mb-2 bg-gray-500 rounded"></div>
			<div className="w-full h-6 mb-2 bg-gray-500 rounded"></div>
			<div className="flex justify-between">
				<div className="flex text-sm items-center mt-4 ">
					<div className="w-16 h-6 bg-gray-500 rounded"></div>
				</div>
			</div>
		</div>
	</div>;

}

export default LoadingSkeleton;