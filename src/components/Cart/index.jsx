import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { formatter } from '../../utils/currencyFormatter'
import { CartItem } from './CartItem'

const CartWrapper = () => {
	const tax = 10
	const delivery = 5
	const cart = useSelector(state => state.cart)

	const finalPrice = cart
		.map(pizza => pizza.fullCost)
		.reduce((prevValue, currentValue) => (currentValue += prevValue), 0)

	return (
		<div className='w-full h-full flex flex-col items-center'>
			<section className='relative flex items-center mt-2 w-[90%] mx-auto'>
				<Link href='/menu' passHref>
					<button className='bg-white rounded-lg p-1 '>
						<AiOutlineArrowLeft />
					</button>
				</Link>
				<h1 className='absolute left-[45%]'>Cart</h1>
			</section>

			{cart.length != 0 &&
				cart.map(item => <CartItem key={item.id} itemInfo={item} />)}

			<section className='w-[85%] mx-auto flex flex-col items-center'>
				<div className='w-full flex justify-between'>
					<span>Subtotal</span>
					<span className='text-guideOrangeLight'>
						{formatter.format(finalPrice)}
					</span>
				</div>
				<div className='w-full flex justify-between'>
					<span>Tax and fees</span>
					<span className='text-guideOrangeLight'>{formatter.format(tax)}</span>
				</div>
				<div className='w-full flex justify-between'>
					<span>Delivery</span>
					<span className='text-guideOrangeLight'>
						{formatter.format(delivery)}
					</span>
				</div>
				<div className='w-full flex justify-between'>
					<span>Total</span>
					<span className='text-guideOrangeLight'>
						{formatter.format(finalPrice + tax + delivery)}
					</span>
				</div>
			</section>

			<button className='px-10 py-1 mt-1 bg-guideOrange text-white rounded-2xl text-sm'>
				Checkout
			</button>
		</div>
	)
}

export { CartWrapper }
