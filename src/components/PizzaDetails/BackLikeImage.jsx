import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowLeft, AiOutlineHeart } from 'react-icons/ai'

const BackLikeImage = ({ image }) => {
	return (
		<div className='flex flex-col w-[90%] mx-auto'>
			<div
				className='flex items-center justify-between 
							w-[90%] mx-auto text-xl z-10 relative top-10'
			>
				<Link href='/menu' passHref>
					<button className='bg-white rounded-lg p-1 '>
						<AiOutlineArrowLeft />
					</button>
				</Link>

				<button className='bg-white rounded-lg p-1 text-red-500 '>
					<AiOutlineHeart />
				</button>
			</div>

			<div className='relative w-full h-[200px] rounded-lg overflow-hidden'>
				<Image
					objectFit='cover'
					priority
					layout='fill'
					sizes='50vw'
					src={image}
					alt='Pizza Image'
				/>
			</div>
		</div>
	)
}

export { BackLikeImage }
