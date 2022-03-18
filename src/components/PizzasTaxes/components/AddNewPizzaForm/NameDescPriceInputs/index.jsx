import { handleInputChanges } from '../../../../../utils/handleInputChanges'

const NameDescPriceInputs = ({ setPizzaInfo }) => {
	return (
		<>
			<div className='flex items-center my-1'>
				<label htmlFor='name'>Name:</label>
				<input
					className='border-2 border-slate-200 outline-none rounded-lg'
					type='text'
					name='name'
					onChange={e => handleInputChanges(e, setPizzaInfo)}
					required
				/>
			</div>
			<div className='flex items-center my-1'>
				<label htmlFor='description'>Description:</label>
				<textarea
					className='border-2 border-slate-200 outline-none rounded-lg resize-none'
					name='description'
					onChange={e => handleInputChanges(e, setPizzaInfo)}
					required
				/>
			</div>
			<div className='flex items-center my-1'>
				<label htmlFor='price'>Price:</label>
				<input
					className='border-2 border-slate-200 outline-none rounded-lg'
					type='text'
					name='price'
					onChange={e => handleInputChanges(e, setPizzaInfo)}
					required
				/>
			</div>
		</>
	)
}

export { NameDescPriceInputs }
