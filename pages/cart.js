import { CartWrapper } from '../src/components/Cart'
import { Header } from '../src/components/Header'

const Cart = ({ data }) => {
	return (
		<main className='w-screen h-screen'>
			<div className='w-full h-full'>
				<Header />
				<div className='w-full h-[calc(100%-160px)] lg:h-[calc(100%-96px)] overflow-y-auto'>
					<CartWrapper taxes={data} />
				</div>
			</div>
		</main>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`${process.env.NEXTAUTH_URL}/api/taxes`)
	const data = await res.json()

	return { props: { data } }
}

export default Cart
