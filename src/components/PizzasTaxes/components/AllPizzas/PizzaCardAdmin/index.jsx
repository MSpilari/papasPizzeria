import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { Loading } from '../../../../Loading'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../../../../../firebase'

const PizzaCardAdmin = ({ itemInfo }) => {
	const { image, name, firebaseId } = itemInfo

	function removePizza(pizzaId) {
		return deleteDoc(doc(db, 'pizzas', pizzaId))
	}

	return (
		<section className='w-[90%] mx-auto mt-3 border-2 border-slate-200 rounded-lg'>
			<div className='w-full flex items-center'>
				<div className='relative w-24 h-24 rounded-2xl overflow-hidden mx-2 my-1'>
					{image ? (
						<Image
							layout='fill'
							objectFit='fill'
							sizes='50vw'
							src={image}
							alt={`${name} Pic`}
						/>
					) : (
						<Loading />
					)}
				</div>
				<div className='w-[calc(100%-150px)] flex flex-col'>
					<h3 className='w-full truncate text-lg'>{name}</h3>
				</div>
				<button
					onClick={() => removePizza(firebaseId)}
					className='ml-auto mb-auto mt-1 mr-1 text-lg text-guideRed'
				>
					<AiOutlineClose />
				</button>
			</div>
		</section>
	)
}

export { PizzaCardAdmin }
