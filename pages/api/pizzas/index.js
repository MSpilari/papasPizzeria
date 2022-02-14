import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase'

export default async function handler(req, res) {
	const { method } = req

	if (method === 'GET') {
		const allPizzasDocs = await getDocs(collection(db, 'pizzas'))

		const allPizzas = allPizzasDocs.docs.map(pizza => {
			return {
				id: pizza.id,
				...pizza.data()
			}
		})

		return res.status(200).json(allPizzas)
	}

	return res.status(500).json({ name: 'Error' })
}
