import { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from '../../../../../firebase'
import { PizzaCardAdmin } from './PizzaCardAdmin'

const AllPizzas = () => {
	const [allPizzas, setAllPizzas] = useState([])

	useEffect(() => {
		onSnapshot(collection(db, 'pizzas'), snapshot =>
			setAllPizzas(
				snapshot.docs.map(pizza => {
					return {
						firebaseId: pizza.id,
						...pizza.data()
					}
				})
			)
		)
	}, [])

	return (
		<section className='w-full h-full my-1'>
			<h1 className='text-center'>All Pizzas</h1>
			{allPizzas.map(pizza => (
				<PizzaCardAdmin key={pizza.firebaseId} itemInfo={pizza} />
			))}
		</section>
	)
}

export { AllPizzas }
