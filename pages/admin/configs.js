import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { PizzasTaxes } from '../../src/components/PizzasTaxes'

const Configs = () => {
	const { data: session, status } = useSession()
	return (
		<main className='w-screen h-screen'>
			<div className='w-full h-full'>
				<div className='w-full'>
					{status == 'authenticated' && session.user.name == undefined ? (
						<PizzasTaxes />
					) : (
						<div className='w-full h-full flex flex-col items-center justify-center'>
							<h1>Sorry, you are not a admin</h1>
							<Link href='/login' passHref>
								<button className='bg-white rounded-3xl px-5 py-2 text-sm text-guideOrange border-2 border-guideOrange font-bold'>
									To Login Page
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</main>
	)
}

export default Configs
