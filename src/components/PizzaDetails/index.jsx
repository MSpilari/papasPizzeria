import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { cartAdded } from '../../redux/slices/CartSlice'
import { BackLikeImage } from './BackLikeImage'
import { Optionals } from './Optionals'
import { TitlePriceQtyDesc } from './TitlePriceQtyDesc'

const PizzaDetails = ({ pizzaData }) => {
	const { image, description, name, optionals, price } = pizzaData
	const [quantity, setQuantity] = useState(1)
	const [addOns, setAddOns] = useState([])

	const addOnsCost = addOns
		.map(element => Number(element.price))
		.reduce((prevValue, currentValue) => (prevValue += currentValue), 0)

	const fullCost = price * quantity + addOnsCost

	const dispatch = useDispatch()

	return (
		<div className='w-full h-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2'>
			<BackLikeImage image={image} />

			<TitlePriceQtyDesc
				description={description}
				name={name}
				quantity={quantity}
				setQuantity={setQuantity}
				fullCost={fullCost}
			/>

			<Optionals optionals={optionals} addOns={addOns} setAddOns={setAddOns} />

			<button
				className='flex items-center mx-auto my-2 py-1 
								px-2 bg-guideOrange rounded-full text-white lg:col-start-2 '
				onClick={() => {
					dispatch(
						cartAdded({
							image,
							name,
							fullCost,
							quantity,
							addOns
						})
					)
				}}
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
