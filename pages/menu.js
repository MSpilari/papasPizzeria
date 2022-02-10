import { Featured } from '../src/components/Featured'
import { Header } from '../src/components/Header'
import { MenuList } from '../src/components/MenuList'

const Menu = ({ data }) => {
	return (
		<main className='w-screen h-screen'>
			<div className='w-full h-full'>
				<Header />
				<div className='w-full h-[calc(100%-160px)] overflow-y-auto'>
					<Featured />
					<MenuList allPizzas={data} />
				</div>
			</div>
		</main>
	)
}

export async function getServerSideProps() {
	const res = await fetch('http://localhost:3000/api/allPizzas')

	const data = await res.json()

	return {
		props: { data }
	}
}

export default Menu
