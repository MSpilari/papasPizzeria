import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BackLikeImage } from './BackLikeImage'
import { Optionals } from './Optionals'
import { TitlePriceQtyDesc } from './TitlePriceQtyDesc'

const PizzaDetails = ({ pizzaData }) => {
	const { image, description, likes, name, optional, price } = pizzaData

	const [addOns, setAddOns] = useState([])

	const addOnsCost = addOns
		.map(element => Number(element.price))
		.reduce((prevValue, currentValue) => (prevValue += currentValue), 0)

	return (
		<div className='w-full h-full flex flex-col'>
			<BackLikeImage image={image} />

			<TitlePriceQtyDesc
				addOnsCost={addOnsCost}
				description={description}
				name={name}
				price={price}
			/>

			<Optionals optional={optional} addOns={addOns} setAddOns={setAddOns} />

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
