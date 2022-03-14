import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'

import { db } from '../../../firebase'
import { PizzaAdmin } from './PizzaAdmin'

const PizzasTaxes = () => {
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
		<div className='w-full h-full flex flex-col'>
			<section className='w-full h-full my-1'>
				<h1 className='text-center'>All Pizzas</h1>
				{allPizzas.map(pizza => (
					<PizzaAdmin key={pizza.firebaseId} itemInfo={pizza} />
				))}
			</section>
			<section className='w-[90%] mx-auto flex flex-col border-2 my-1 border-slate-200 rounded-md'>
				<h1 className='text-center'>Taxes</h1>
				<p>Current delivery Tax : 5</p>
				<p className='flex '>
					Set new delivery tax ?{' '}
					<input
						className='border-2 border-slate-300 outline-none rounded-lg'
						type='number'
						name='delivery tax'
					/>
					<button className='px-2 border-2 border-slate-300 rounded-lg ml-1'>
						Ok
					</button>
				</p>
				<p>Current tax : 10</p>
				<p>
					Set new tax ?{' '}
					<input
						className='border-2 border-slate-300 outline-none rounded-lg'
						type='number'
						name='tax'
					/>{' '}
					<button className='px-2 border-2 border-slate-300 rounded-lg ml-1'>
						Ok
					</button>
				</p>
			</section>
			<section>
				<h1 className='text-center'>Add a new Pizza</h1>
				<form>
					{/*Formulário que receberá os dados de cadastro de uma nova pizza */}
				</form>
			</section>
		</div>
	)
}

export { PizzasTaxes }