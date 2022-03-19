import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			id: 'google'
		}),
		CredentialsProvider({
			name: 'Credentials',
			id: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' }
			},
			authorize: async (credentials, req) => {
				const { email, password } = credentials

				const res = await fetch(`${process.env.NEXTAUTH_URL}/api/admin/login`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email, password })
				})

				const admin = await res.json()

				if (res.ok && admin) return admin

				return null
			}
		})
		// ...add more providers here
	],
	pages: {
		signIn: '/login'
	},
	callbacks: {
		async session({ session, token, user }) {
			if (session.user.name != undefined) {
				const res = await fetch(
					`${process.env.NEXTAUTH_URL}/api/users/findUserId`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ email: session.user.email })
					}
				)
				const data = await res.json()
				session.user.firebaseID = data.userID
			}
			session.user.type = session.user.name ? 'User' : 'Admin'
			return session
		},
		async signIn({ account, email, profile, user, credentials }) {
			if (account.provider != 'credentials') {
				const res = await fetch(
					`${process.env.NEXTAUTH_URL}/api/users/addUser`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(user)
					}
				)
				const data = await res.json()
				return data.message
			}
			return true
		}
	},
	secret: process.env.NEXTAUTH_SECRET
})
