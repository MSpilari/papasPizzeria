import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { db, storage } from '../../../../../../firebase'

const SubmitButton = ({
	optionals,
	setOptionals,
	pizzaInfo,
	setPizzaInfo,
	selectedImage,
	setSelectedImage,
	formRef
}) => {
	async function uploadPizza() {
		const docRef = await addDoc(collection(db, 'pizzas'), pizzaInfo)

		const imageRef = ref(storage, `pizzas/${docRef.id}/image`)

		await uploadString(imageRef, selectedImage, 'data_url').then(async () => {
			const downloadImgUrl = await getDownloadURL(imageRef)
			await updateDoc(doc(db, 'pizzas', docRef.id), {
				image: downloadImgUrl
			})
		})
		formRef.current.reset()
		setOptionals([])
		return setSelectedImage('')
	}

	return (
		<button
			disabled={!selectedImage}
			type='submit'
			className='disabled:text-slate-400 disabled:cursor-not-allowed'
			onClick={e => {
				e.preventDefault()
				setPizzaInfo(prevState => {
					return {
						...prevState,
						optionals
					}
				})
				return uploadPizza()
			}}
		>
			Send Pizza
		</button>
	)
}

export { SubmitButton }
