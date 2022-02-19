import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

const CartWrapper = () => {
	const cart = useSelector(state => state.cart)

	return (
		<div className='w-full h-full'>
			<section className='relative flex items-center mt-2 w-[90%] mx-auto'>
				<Link href='/menu' passHref>
					<button className='bg-white rounded-lg p-1 '>
						<AiOutlineArrowLeft />
					</button>
				</Link>
				<h1 className='absolute left-[45%]'>Cart</h1>
			</section>
			{cart.length != 0 &&
				cart.map((item, index) => <CartItem key={index} itemInfo={item} />)}
		</div>
	)
}

export { CartWrapper }
