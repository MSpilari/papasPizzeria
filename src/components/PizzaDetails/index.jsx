import Image from 'next/image'
import Link from 'next/link'

const PizzaDetails = () => {
	return (
		<div className='w-full h-full flex flex-col items-center'>
			<div className='flex flex-col w-[90%] h-[200px] mx-auto'>
				<div>
					<button>
						<Link href='/menu'>Back</Link>
					</button>
					<button>Love</button>
				</div>
				<div className='relative w-full h-full'>
					<Image
						objectFit='cover'
						layout='fill'
						sizes='50vw'
						src='https://github.com/MSpilari.png'
						alt='Pizza Image'
					/>
				</div>
			</div>
			<h1>Title</h1>
			<div>
				<span>Price</span>
				<div>
					<button>Minus</button>
					<p>Quantity</p>
					<button>Plus</button>
				</div>
			</div>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
				explicabo voluptates reiciendis magni, accusantium dolore exercitationem
				molestias inventore, incidunt libero vel. Repudiandae est dolorum
				sapiente a velit, deleniti voluptatibus laboriosam!
			</p>
			<div>
				<h2>Choose an Add On</h2>
				<div>
					<label htmlFor='More Cheese'>Extra Cheese</label>
					<span>Price</span>
					<input type='checkbox' name='More Cheese' id='More Cheese' />
				</div>
				<div>
					<label htmlFor='More Cheese'>Extra Cheese</label>
					<span>Price</span>
					<input type='checkbox' name='More Cheese' id='More Cheese' />
				</div>
				<div>
					<label htmlFor='More Cheese'>Extra Cheese</label>
					<span>Price</span>
					<input type='checkbox' name='More Cheese' id='More Cheese' />
				</div>
			</div>
			<button>Add to Cart</button>
		</div>
	)
}

export { PizzaDetails }
