import Image from 'next/image'
import BigLogo from '../../assets/BigLogo.png'
import Link from 'next/link'

const Introduction = () => {
	return (
		<Link href='/login' passHref>
			<div
				className='w-full h-full flex flex-col items-center 
				justify-center bg-orange-700'
			>
				<Image
					objectFit='contain'
					className='animate-pulse'
					alt='Papa`s Pizzeria Logo'
					src={BigLogo}
				/>
				<p className='mt-1 text-xl text-guideOrangeLight'>Click to Open...</p>
			</div>
		</Link>
	)
}

export { Introduction }
