import { AllPizzas } from './components/AllPizzas'
import { Taxes } from './components/Taxes'

const PizzasTaxes = () => {
	return (
		<div className='w-full h-full flex flex-col'>
			<AllPizzas />

			<Taxes />

			<section>
				<h1 className='text-center'>Add a new Pizza</h1>
				<form>
					{/*Formulário que receberá os dados de cadastro de uma nova pizza */}
				</form>
			</section>
		</div>
	)
}

export { PizzasTaxes }
