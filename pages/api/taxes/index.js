import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase'

export default async function handler(req, res) {
	const { method } = req

	if (method === 'GET') {
		const allTaxesDocs = await getDocs(collection(db, 'taxes'))

		const [deliveryTax, tax] = allTaxesDocs.docs.map(tax => tax.data())

		return res.status(200).json({ ...deliveryTax, ...tax })
	}

	return res.status(500).json({ name: 'Error' })
}
