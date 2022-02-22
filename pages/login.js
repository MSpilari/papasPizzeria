import { getProviders } from 'next-auth/react'
import { Welcome } from '../src/components/Welcome'

const Login = ({ providers }) => {
	return (
		<main className='w-screen h-screen'>
			<div className='w-full h-full'>
				<Welcome providers={providers} />
			</div>
		</main>
	)
}

export async function getServerSideProps(context) {
	const providers = await getProviders()
	return {
		props: { providers }
	}
}

export default Login
