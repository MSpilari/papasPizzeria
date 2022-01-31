import { useState } from 'react'
import { Introduction } from '../src/components/Introduction'
import { Welcome } from '../src/components/Welcome'

export default function Home() {
	const [toLogin, setToLogin] = useState(false)
	return (
		<main className='w-screen h-screen'>
			<div className='w-full h-full'>
				{!toLogin ? <Introduction setToLogin={setToLogin} /> : <Welcome />}
			</div>
		</main>
	)
}
