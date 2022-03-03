import { useEffect, useState } from 'react'
import { Header } from '../../src/components/Header'
import { Loading } from '../../src/components/Loading'
import { PizzaDetails } from '../../src/components/PizzaDetails'

const PizzaInfo = () => {
	const [pizzaData, setPizzaData] = useState(null)

	useEffect(() => {
		const url = document.location.origin
		const [_, pizzaID] = document.location.pathname.split('/pizza/')

		async function fetchData() {
			const res = await fetch(`${url}/api/pizzas/${pizzaID}`)
			const data = await res.json()
			return setPizzaData(data)
		}

		fetchData()
	}, [])

	return (
		<main className='w-screen h-screen'>
			<div className='w-full h-full'>
				<Header />
				<div className='w-full h-[calc(100%-160px)] lg:h-[calc(100%-96px)] overflow-y-auto'>
					{!pizzaData ? <Loading /> : <PizzaDetails pizzaData={pizzaData} />}
				</div>
			</div>
		</main>
	)
}

export default PizzaInfo
