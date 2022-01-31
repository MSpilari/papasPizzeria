import Image from 'next/image'

const Introduction = ({ setToLogin }) => {
	return (
		<div
			className='w-full h-full flex flex-col items-center 
				justify-center bg-orange-700'
		>
			<Image
				onClick={() => setToLogin(true)}
				objectFit='contain'
				className='animate-pulse'
				alt='Papa`s Pizzeria Logo'
				src={BigLogo}
			/>
			<p className='mt-1 text-xl text-guideOrangeLight'>Click to Open...</p>
		</div>
	)
}

export { Introduction }
