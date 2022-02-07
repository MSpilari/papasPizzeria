import { PizzaCard } from '../PizzaCard'

const MenuList = () => {
	return (
		<div className='w-full mt-2 flex flex-col items-center justify-center'>
			<h1 className='text-lg font-bold text-guideOrange'>
				What do you like to order ?
			</h1>
			<PizzaCard />
			<PizzaCard />
			<PizzaCard />
			<PizzaCard />
			<PizzaCard />
			<PizzaCard />
			<PizzaCard />
		</div>
	)
}

export { MenuList }
