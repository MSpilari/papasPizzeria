import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import Featured1 from '../../assets/featured1.jpg'
import Featured2 from '../../assets/featured2.jpg'
import Featured3 from '../../assets/featured3.jpg'

const MobileFeatured = () => {
	const FeaturedImages = [Featured1, Featured2, Featured3]
	const [currentFeature, setCurrentFeature] = useState(0)

	const changeFeature = value => {
		value === 'plus'
			? setCurrentFeature(currentFeature + 1)
			: setCurrentFeature(currentFeature - 1)
	}
	return (
		<div className='relative flex w-full h-48 my-1 lg:hidden'>
			<button
				disabled={currentFeature === 0 ? true : false}
				onClick={() => changeFeature('minus')}
				className='absolute top-[50%] z-10 text-2xl
				disabled:text-gray-500 disabled:opacity-80'
			>
				<AiOutlineArrowLeft />
			</button>
			<div className='absolute top-2 ml-10 z-10'>
				<h1 className='mb-2'>
					<span className='text-xl'>Delicious</span>
					<br />
					<span className='text-3xl text-guideOrange font-bold'>Pizzas</span>
				</h1>
				<p className='text-sm text-gray-500'>80 types of pizza</p>
			</div>
			<div className='relative w-full max-w-md h-full mx-auto '>
				<Image
					src={FeaturedImages[currentFeature]}
					sizes='50vw'
					layout='fill'
					alt='Featured Pizza'
					priority
				/>
			</div>
			<button
				disabled={currentFeature === 2 ? true : false}
				onClick={() => changeFeature('plus')}
				className='absolute top-[50%] right-0 z-10 text-2xl 
				disabled:text-gray-500 disabled:opacity-80'
			>
				<AiOutlineArrowRight />
			</button>
		</div>
	)
}

export { MobileFeatured }
