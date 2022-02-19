import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { cartRemoved } from '../../redux/slices/CartSlice'
import { formatter } from '../../utils/currencyFormatter'

const CartItem = ({ itemInfo }) => {
	const { image, name, addOns, fullCost, quantity, id } = itemInfo

	const dispatch = useDispatch()

	return (
		<section className='w-[90%] mx-auto mt-3 border-2 border-slate-200 rounded-lg'>
			<div className='w-full flex items-center'>
				<div className='relative w-24 h-24 rounded-2xl overflow-hidden mx-2 my-1'>
					<Image
						layout='fill'
						objectFit='fill'
						sizes='50vw'
						src={image}
						alt={`${name} Pic`}
					/>
				</div>
				<div className='w-[calc(100%-150px)] flex flex-col'>
					<h3 className='w-full truncate text-lg'>{name}</h3>
					<ul className='w-full flex flex-col text-slate-400'>
						<p className='text-sm'>Add-Ons:</p>
						{addOns.length == 0 ? (
							<li className='text-xs ml-2'>No additions</li>
						) : (
							addOns.map((product, index) => (
								<li className='text-xs ml-2' key={index}>
									{product.ingredient}
								</li>
							))
						)}
					</ul>
					<p className='w-full text-xs text-guideOrangeLight'>
						Quantity: {quantity}
					</p>
					<p className='w-full truncate text-lg text-guideOrange'>
						{formatter.format(fullCost)}
					</p>
				</div>
				<button
					onClick={() => dispatch(cartRemoved({ id }))}
					className='ml-auto mb-auto mt-1 mr-1 text-lg text-guideRed'
				>
					<AiOutlineClose />
				</button>
			</div>
		</section>
	)
}

export { CartItem }
