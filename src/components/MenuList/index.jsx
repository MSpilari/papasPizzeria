import { PizzaCard } from '../PizzaCard'

const MenuList = ({ allPizzas }) => {
	return (
		<div className='w-full mt-2 flex flex-col items-center justify-center lg:grid lg:grid-cols-3'>
			<h1 className='text-lg font-bold lg:col-span-3 lg:text-center text-guideOrange'>
				What do you like to order ?
			</h1>
			{allPizzas.map(pizza => {
				const { name, image, description, price, id } = pizza
				return (
					<PizzaCard
						key={id}
						id={id}
						name={name}
						image={image}
						description={description}
						price={price}
					/>
				)
			})}
		</div>
	)
}

export { MenuList }
