import { AddNewPizzaForm } from './components/AddNewPizzaForm'
import { AllPizzas } from './components/AllPizzas'
import { Taxes } from './components/Taxes'

const PizzasTaxes = () => {
	return (
		<div className='w-full h-full flex flex-col'>
			<AllPizzas />

			<Taxes />

			<AddNewPizzaForm />
		</div>
	)
}

export { PizzasTaxes }
