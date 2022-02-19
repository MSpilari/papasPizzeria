import { CartWrapper } from '../src/components/Cart'
import { Header } from '../src/components/Header'

const Cart = () => {
	return (
		<main className='w-screen h-screen'>
			<div className='w-full h-full'>
				<Header />
				<div className='w-full h-[calc(100%-160px)] overflow-y-auto'>
					<CartWrapper />
				</div>
			</div>
		</main>
	)
}

export default Cart
