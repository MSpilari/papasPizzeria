import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import Pizza1 from '../../assets/pizza1.jpg'

const PizzaCard = () => {
	return (
		<div className='w-[90%] max-w-xs h-[200px] flex flex-col items-center border-2 border-slate-300 rounded-3xl overflow-hidden my-2'>
			<div className='relative w-full h-full'>
				<Image
					src={Pizza1}
					objectFit='cover'
					layout='fill'
					sizes='50vw'
					alt='Pizza Image'
				/>
			</div>
			<div className=' w-[85%] mx-auto my-1 flex items-center justify-between'>
				<span className='flex items-center border-2 border-slate-300 rounded-3xl px-1 py-1 font-bold'>
					{' '}
					<span className='text-guideOrange text-lg mr-1'>$</span>
					10,00
				</span>
				<button className='text-2xl'>
					<AiOutlineHeart />
				</button>
			</div>
			<div className='w-[90%] flex flex-col flex-nowrap mx-auto'>
				<p className='text-sm mb-1 truncate'>Chicken Hawaiian</p>
				<p className='text-xs truncate text-gray-400'>
					Chicken, Cheese and Pineapple
				</p>
			</div>
		</div>
	)
}

export { PizzaCard }