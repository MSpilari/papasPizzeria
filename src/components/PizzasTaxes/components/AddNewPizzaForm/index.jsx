import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'

const AddNewPizzaForm = () => {
	const optionalField = (
		<li key={nanoid()}>
			<label htmlFor='ingredient'>Ingredient:</label>
			<input
				className='border-2 border-slate-200 outline-none rounded-lg'
				type='text'
				name='ingredient'
			/>
			<label htmlFor='optPrice'>optPrice:</label>
			<input
				className='border-2 border-slate-200 outline-none rounded-lg'
				type='text'
				name='optPrice'
			/>
		</li>
	)

	const initialOptionField = [optionalField]

	const [optionFields, setOptionFields] = useState(initialOptionField)
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
					/>
				</div>
				<div className='flex items-center my-1'>
					<label htmlFor='description'>Description:</label>
					<textarea
						className='border-2 border-slate-200 outline-none rounded-lg resize-none'
						name='description'
					/>
				</div>
				<div className='flex items-center my-1'>
					<label htmlFor='price'>Price:</label>
					<input
						className='border-2 border-slate-200 outline-none rounded-lg'
						type='text'
						name='price'
					/>
				</div>
				<div className='my-1'>
					<h4>Optional</h4>
					<button
						disabled={optionFields.length == 1}
						type='button'
						onClick={() =>
							setOptionFields(prevState => {
								const newArr = prevState.slice(0, prevState.length - 1)
								return newArr
							})
						}
					>
						-
					</button>
					<button
						type='button'
						onClick={() =>
							setOptionFields(prevState => [...prevState, optionalField])
						}
					>
						+
					</button>
					<ul>{optionFields}</ul>
				</div>
			</form>
		</section>
	)
}

export { AddNewPizzaForm }
