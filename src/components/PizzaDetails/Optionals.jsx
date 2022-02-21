import { formatter } from '../../utils/currencyFormatter'

const Optionals = ({ optional, addOns, setAddOns }) => {
	const handleOptionals = event => {
		const { name, value, checked } = event.target

		const addOptional = { ingredient: name, price: value }

		if (
			checked &&
			!addOns.some(element => element.ingredient === addOptional.ingredient)
		)
			return setAddOns(prevState => [addOptional, ...prevState])

		return setAddOns(
			addOns.filter(element => element.ingredient != addOptional.ingredient)
		)
	}

	return (
		<div className='w-[90%] mx-auto flex flex-col lg:col-start-2 lg:row-start-2'>
			<h2 className='my-1 w-full'>Choice of Add On</h2>

			<div className='flex flex-col w-full'>
				{optional.map((option, index) => {
					const { ingredient, optPrice } = option

					return (
						<div key={index} className='w-[95%] mx-auto flex items-center'>
							<label htmlFor={ingredient}>{ingredient}</label>

							<span className='ml-auto text-guideOrange'>
								+ {formatter.format(optPrice)}
							</span>

							<input
								className='ml-1'
								type='checkbox'
								name={ingredient}
								value={optPrice}
								id={ingredient}
								onClick={e => handleOptionals(e)}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export { Optionals }
