import { useRef, useState } from 'react'

const AddNewPizzaForm = () => {
	const [pizzaInfo, setPizzaInfo] = useState({})
	const [optionals, setOptionals] = useState([])
	const [newOptionals, setNewOptionals] = useState({})

	const ingredientRef = useRef(null)
	const optPriceRef = useRef(null)

	return (
		<section className='w-[90%] mx-auto border-2 border-slate-200 rounded-lg'>
			<h1 className='text-center'>Add a new Pizza</h1>
			<form className='flex flex-col w-[90%] mx-auto'>
				<input type='file' name='image' />
				<div className='flex items-center my-1'>
					<label htmlFor='name'>Name:</label>
					<input
						className='border-2 border-slate-200 outline-none rounded-lg'
						type='text'
						name='name'
						onChange={e =>
							setPizzaInfo(prevState => {
								return { ...prevState, [e.target.name]: e.target.value }
							})
						}
					/>
				</div>
				<div className='flex items-center my-1'>
					<label htmlFor='description'>Description:</label>
					<textarea
						className='border-2 border-slate-200 outline-none rounded-lg resize-none'
						name='description'
						onChange={e =>
							setPizzaInfo(prevState => {
								return { ...prevState, [e.target.name]: e.target.value }
							})
						}
					/>
				</div>
				<div className='flex items-center my-1'>
					<label htmlFor='price'>Price:</label>
					<input
						className='border-2 border-slate-200 outline-none rounded-lg'
						type='text'
						name='price'
						onChange={e =>
							setPizzaInfo(prevState => {
								return { ...prevState, [e.target.name]: e.target.value }
							})
						}
					/>
				</div>
				<div className='my-1'>
					<h4>Optional</h4>
					<ul className='w-[95%] mx-auto'>
						{optionals.map((opt, index) => (
							<li key={index} className='flex my-1'>
								<p>Ingredient: {opt.ingredient}</p>
								<p className='ml-2'>optPrice: {opt.optPrice}</p>
							</li>
						))}
					</ul>

					<label htmlFor='ingredient'>Ingredient:</label>
					<input
						ref={ingredientRef}
						className='border-2 border-slate-200 outline-none rounded-lg'
						type='text'
						name='ingredient'
						onChange={e =>
							setNewOptionals(prevState => {
								return {
									...prevState,
									[e.target.name]: e.target.value
								}
							})
						}
					/>
					<label htmlFor='optPrice'>optPrice:</label>
					<input
						ref={optPriceRef}
						className='border-2 border-slate-200 outline-none rounded-lg'
						type='number'
						name='optPrice'
						onChange={e =>
							setNewOptionals(prevState => {
								return {
									...prevState,
									[e.target.name]: e.target.value
								}
							})
						}
					/>
					<button
						className='px-2 border-2 border-slate-300 rounded-lg ml-1 disabled:text-gray-300 disabled:cursor-not-allowed'
						disabled={
							optPriceRef.current &&
							ingredientRef.current &&
							(optPriceRef.current.value == '' ||
								ingredientRef.current.value == '')
						}
						type='button'
						onClick={() => {
							setOptionals(prevState => [...prevState, newOptionals])
							if (optPriceRef.current && ingredientRef.current) {
								optPriceRef.current.value = ''
								ingredientRef.current.value = ''
							}
							setNewOptionals({})
						}}
					>
						Ok
					</button>
				</div>
				<button
					type='submit'
					onClick={e => {
						e.preventDefault()
						setPizzaInfo(prevState => {
							return {
								...prevState,
								optionals
							}
						})
					}}
				>
					Send Pizza
				</button>
			</form>
		</section>
	)
}

export { AddNewPizzaForm }
