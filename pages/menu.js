import { Featured } from '../src/components/Featured'
import { Header } from '../src/components/Header'
import { MenuList } from '../src/components/MenuList'

const Menu = ({ data }) => {
	return (
		<main className='w-screen h-screen'>
			<div className='w-full h-full'>
				<Header />
				<div className='w-full h-[calc(100%-160px)] lg:h-[calc(100%-96px)] overflow-y-auto'>
					<Featured />
					<MenuList allPizzas={data} />
				</div>
			</div>
		</main>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`${process.env.NEXTAUTH_URL}/api/pizzas`)

	const data = await res.json()

	return {
		props: { data }
	}
}

export default Menu
