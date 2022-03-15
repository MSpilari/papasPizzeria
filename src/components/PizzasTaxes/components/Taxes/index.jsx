import { useState, useEffect, useRef } from 'react'
import { setDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../../firebase'

const Taxes = () => {
	const [currentDeliveryTax, setCurrentDeliveryTax] = useState(0)
	const [currentTax, setCurrentTax] = useState(0)
	const [deliveryTax, setDeliveryTax] = useState(0)
	const [tax, setTax] = useState(0)

	const deliveryInputRef = useRef()
	const taxInputRef = useRef()

	const handleTaxes = async (taxId, newTax, taxRef) => {
		await setDoc(doc(db, 'taxes', taxId), { [taxId]: newTax })

		if (taxId == 'deliveryTax') {
			setDeliveryTax('')
			return (taxRef.current.value = '')
		}

		if (taxId == 'tax') {
			setTax('')
			return (taxRef.current.value = '')
		}
	}

	useEffect(() => {
		onSnapshot(doc(db, 'taxes', 'deliveryTax'), snapshot =>
			setCurrentDeliveryTax(snapshot.data())
		)
		onSnapshot(doc(db, 'taxes', 'tax'), snapshot =>
			setCurrentTax(snapshot.data())
		)
	}, [])

	return (
		<section className='w-[90%] mx-auto flex flex-col border-2 my-1 border-slate-200 rounded-md'>
			<h1 className='text-center'>Taxes</h1>

			<p>Current delivery Tax : {currentDeliveryTax.deliveryTax}</p>

			<p className='flex '>
				Set new delivery tax ?{' '}
				<input
					className='border-2 border-slate-300 outline-none rounded-lg'
					type='number'
					name='delivery tax'
					ref={deliveryInputRef}
					onChange={e => setDeliveryTax(e.target.value)}
				/>
				<button
					disabled={deliveryTax == ''}
					onClick={() =>
						handleTaxes('deliveryTax', deliveryTax, deliveryInputRef)
					}
					className='px-2 border-2 border-slate-300 rounded-lg ml-1 disabled:text-gray-300 disabled:cursor-not-allowed'
				>
					Ok
				</button>
			</p>
			<p>Current tax : {currentTax.tax}</p>
			<p>
				Set new tax ?{' '}
				<input
					className='border-2 border-slate-300 outline-none rounded-lg'
					type='number'
					name='tax'
					ref={taxInputRef}
					onChange={e => setTax(e.target.value)}
				/>{' '}
				<button
					disabled={tax == ''}
					onClick={() => handleTaxes('tax', tax, taxInputRef)}
					className='px-2 border-2 border-slate-300 rounded-lg ml-1 disabled:text-gray-300 disabled:cursor-not-allowed'
				>
					Ok
				</button>
			</p>
		</section>
	)
}

export { Taxes }
