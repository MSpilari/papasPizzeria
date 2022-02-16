import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { formatter } from '../../utils/currencyFormatter'

const TitlePriceQtyDesc = ({ name, price, addOnsCost, description }) => {
	const [quantity, setQuantity] = useState(1)

	return (
		<>
			<div className='w-[90%] mx-auto my-1'>
				<h1 className='text-xl truncate'>{name}</h1>
			</div>

			<div className='w-[90%] mx-auto flex items-center justify-between'>
				<span className='text-2xl text-guideOrange'>
					{formatter.format(price * quantity + addOnsCost)}
				</span>

				<div className='flex items-center'>
					<button
						className='border-2 border-guideOrange rounded-full p-1 mr-1 
					text-black text-lg disabled:border-gray-500 disabled:opacity-90'
						onClick={() => setQuantity(quantity - 1)}
						disabled={quantity == 1}
					>
						<AiOutlineMinus />
					</button>

					<p>{quantity}</p>

					<button
						className='border-2 border-guideOrange bg-guideOrange rounded-full p-1 ml-1 
					text-white text-lg'
						onClick={() => setQuantity(quantity + 1)}
					>
						<AiOutlinePlus />
					</button>
				</div>
			</div>

			<p className='w-[90%] mx-auto my-2 text-sm text-gray-500'>
				{description}
			</p>
		</>
	)
}

export { TitlePriceQtyDesc }
