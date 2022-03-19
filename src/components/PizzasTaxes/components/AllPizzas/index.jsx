import { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import { signOut } from 'next-auth/react'
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
		<section className='w-full h-full my-1 flex flex-col items-center'>
			<h1 className='text-center'>All Pizzas</h1>
			<button
				onClick={() => signOut({ callbackUrl: '/login' })}
				className='border-2 border-slate-500 my-2 rounded-lg py-1 px-2'
			>
				Sign Out
			</button>
			{allPizzas.map(pizza => (
				<PizzaCardAdmin key={pizza.firebaseId} itemInfo={pizza} />
			))}
		</section>
	)
}

export { AllPizzas }
