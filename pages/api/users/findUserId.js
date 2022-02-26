import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../firebase'

export default async function handler(req, res) {
	const { method, body } = req

	if (method === 'POST') {
		try {
			const docQuery = query(
				collection(db, 'users'),
				where('email', '==', body.email)
			)

			const thisUserExists = await getDocs(docQuery)

			if (thisUserExists.size > 0) {
				const [id] = thisUserExists.docs.map(user => user.id)

				return res.status(200).json({ userID: id })
			}

			return res.status(500).json({ message: 'User does not exists !' })
		} catch (error) {
			return res.status(500).json({ message: error })
		}
	}

	return res.status(500).json({ ErrorMessage: 'Method not allowed' })
}
