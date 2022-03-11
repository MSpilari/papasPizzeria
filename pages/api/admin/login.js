import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'

export default async function handler(req, res) {
	const { method, body } = req

	if (method === 'POST') {
		try {
			const isLoggedIn = await signInWithEmailAndPassword(
				auth,
				body.email,
				body.password
			)

			return res.status(200).json(isLoggedIn.user)
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	return res.status(500).json({ name: 'Method error' })
}
