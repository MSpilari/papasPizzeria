import { useRef, useState } from 'react'
import { ImageInput } from './ImageInput'
import { NameDescPriceInputs } from './NameDescPriceInputs'
import { Optionals } from './Optionals'
import { SubmitButton } from './SubmitButton'

const AddNewPizzaForm = () => {
	const [pizzaInfo, setPizzaInfo] = useState({})
	const [optionals, setOptionals] = useState([])
	const [newOptionals, setNewOptionals] = useState({})
	const [selectedImage, setSelectedImage] = useState('')

	const formRef = useRef(null)

	return (
		<section className='w-[90%] mx-auto border-2 border-slate-200 rounded-lg'>
			<h1 className='text-center'>Add a new Pizza</h1>

			<form ref={formRef} className='flex flex-col w-[90%] mx-auto'>
				<ImageInput
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>

				<NameDescPriceInputs setPizzaInfo={setPizzaInfo} />

				<Optionals
					optionals={optionals}
					setOptionals={setOptionals}
					newOptionals={newOptionals}
					setNewOptionals={setNewOptionals}
				/>

				<SubmitButton
					optionals={optionals}
					setOptionals={setOptionals}
					pizzaInfo={pizzaInfo}
					setPizzaInfo={setPizzaInfo}
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
					formRef={formRef}
				/>
			</form>
		</section>
	)
}

export { AddNewPizzaForm }
