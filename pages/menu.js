import { Featured } from '../src/components/Featured'
import { Header } from '../src/components/Header'

const Menu = () => {
	return (
		<main className='w-screen h-screen'>
			<div className='w-full h-full'>
				<Header />
				<div className='bg-red-500 w-full h-[calc(100%-160px)] overflow-y-auto'>
					<Featured />
				</div>
			</div>
		</main>
	)
}

export default Menu
