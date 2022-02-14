const Loading = () => {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center'>
			<div className='w-10 h-10 rounded-full mb-1 animate-spin border-x-2 border-guideOrange'></div>
			<p className='text-lg font-bold '>Loading...</p>
		</div>
	)
}

export { Loading }
