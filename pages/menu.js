import { Featured } from '../src/components/Featured'
import { Header } from '../src/components/Header'
import { MenuList } from '../src/components/MenuList'

const Menu = () => {
	return (
		<main className='w-screen h-screen'>
			<div className='w-full h-full'>
				<Header />
				<div className='w-full h-[calc(100%-160px)] overflow-y-auto'>
					<Featured />
					<MenuList />
				</div>
			</div>
		</main>
	)
}

export default Menu
