import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase'

export default async function handler(req, res) {
	const { pizzaId } = req.query

	const docRef = doc(db, 'pizzas', pizzaId)

	const singlePizzaSnap = await getDoc(docRef)

	if (singlePizzaSnap.exists()) {
		const singlePizza = singlePizzaSnap.data()
		return res.status(200).json(singlePizza)
	}

	return res.status(400).json({ name: 'Pizza Id do not exists' })
}
