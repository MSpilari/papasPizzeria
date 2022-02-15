import Image from 'next/image'
import Link from 'next/link'
import {
	AiOutlineArrowLeft,
	AiOutlineHeart,
	AiFillHeart,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineShoppingCart
} from 'react-icons/ai'
import { formatter } from '../../utils/currencyFormatter'

const PizzaDetails = ({ pizzaData }) => {
	const { image, description, likes, name, optional, price } = pizzaData

	return (
		<div className='w-full h-full flex flex-col'>
			<div className='flex flex-col w-[90%] mx-auto'>
				<div
					className='flex items-center justify-between 
							w-[90%] mx-auto text-xl z-10 relative top-10'
				>
					<button className='bg-white rounded-lg p-1 '>
						<Link href='/menu' passHref>
							<AiOutlineArrowLeft />
						</Link>
					</button>
					<button className='bg-white rounded-lg p-1 text-red-500 '>
						<AiOutlineHeart />
					</button>
				</div>

				<div className='relative w-full h-[200px]'>
					<Image
						objectFit='cover'
						layout='fill'
						sizes='50vw'
						src={image}
						alt='Pizza Image'
					/>
				</div>
			</div>
			<h1 className='w-[90%]  h-10 mx-auto text-xl my-1 truncate'>{name}</h1>
			<div className='w-[90%] mx-auto flex items-center justify-between'>
				<span className='text-2xl text-guideOrange'>
					{formatter.format(price)}
				</span>

				<div className='flex items-center'>
					<button
						className='border-2 border-guideOrange rounded-full p-1 mr-1 
					text-black text-lg'
					>
						<AiOutlineMinus />
					</button>
					<p>Quantity</p>
					<button
						className='border-2 border-guideOrange bg-guideOrange rounded-full p-1 ml-1 
					text-white text-lg'
					>
						<AiOutlinePlus />
					</button>
				</div>
			</div>
			<p className='w-[90%] mx-auto my-2 text-sm text-gray-500'>
				{description}
			</p>
			<div className='w-[90%] mx-auto flex flex-col'>
				<h2 className='my-1 w-full'>Choice of Add On</h2>
				<div className='flex flex-col w-full'>
					{optional.map((option, index) => {
						const { ingredient, optPrice } = option
						return (
							<div key={index} className='w-[95%] mx-auto flex items-center'>
								<label htmlFor={ingredient}>{ingredient}</label>
								<span className='ml-auto text-guideOrange'>
									+ {formatter.format(optPrice)}
								</span>
								<input
									className='ml-1'
									type='checkbox'
									name={ingredient}
									id={ingredient}
								/>
							</div>
						)
					})}
				</div>
			</div>
			<button
				className='flex items-center mx-auto my-2 py-1 
								px-2 bg-guideOrange rounded-full text-white'
			>
				<i className='text-2xl text-black bg-white rounded-full p-1 mr-1'>
					<AiOutlineShoppingCart />
				</i>
				Add to Cart
			</button>
		</div>
	)
}

export { PizzaDetails }
