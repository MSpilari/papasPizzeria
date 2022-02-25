import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET
		})
		// ...add more providers here
	],
	pages: {
		signIn: '/login'
	},
	callbacks: {
		async session({ session, token, user }) {
			session.user.username = session.user.name
				.split(' ')
				.join('')
				.toLowerCase()
			session.accessToken = token.sub
			return session
		},
		async signIn({ account, email, profile, user, credentials }) {
			const res = await fetch('http://localhost:3000/api/users/addUser', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})
			const data = await res.json()
			return data.message
		}
	},
	secret: process.env.NEXTAUTH_SECRET
})
