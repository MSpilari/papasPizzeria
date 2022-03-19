import { useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { handleInputChanges } from '../../../../../utils/handleInputChanges'

const Optionals = ({
	optionals,
	setOptionals,
	newOptionals,
	setNewOptionals
}) => {
	const ingredientRef = useRef(null)
	const optPriceRef = useRef(null)

	function removeOptional(name, price) {
		const filteredOpt = optionals.filter(
			opt => opt.ingredient != name && opt.optPrice != price
		)
		setOptionals(filteredOpt)
	}

	return (
		<div className='my-1'>
			<h4>Optionals</h4>

			<ul className='w-[95%] mx-auto'>
				{optionals.map((opt, index) => (
					<li key={index} className='flex my-1'>
						<p>Ingredient: {opt.ingredient}</p>
						<p className='ml-2'>optPrice: {opt.optPrice}</p>
						<button
							type='button'
							onClick={() => removeOptional(opt.ingredient, opt.optPrice)}
							className='ml-2 text-guideRed text-lg'
						>
							<AiOutlineClose />
						</button>
					</li>
				))}
			</ul>

			<label htmlFor='ingredient'>Ingredient:</label>
			<input
				ref={ingredientRef}
				className='border-2 border-slate-200 outline-none rounded-lg'
				type='text'
				name='ingredient'
				onChange={e => handleInputChanges(e, setNewOptionals)}
			/>

			<label htmlFor='optPrice'>optPrice:</label>
			<input
				ref={optPriceRef}
				className='border-2 border-slate-200 outline-none rounded-lg'
				type='number'
				name='optPrice'
				onChange={e => handleInputChanges(e, setNewOptionals)}
			/>

			<button
				className='px-2 border-2 border-slate-300 rounded-lg ml-1 disabled:text-gray-300 disabled:cursor-not-allowed'
				disabled={
					optPriceRef.current &&
					ingredientRef.current &&
					(optPriceRef.current.value == '' || ingredientRef.current.value == '')
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
	)
}

export { Optionals }
