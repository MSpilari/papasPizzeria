import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Welcome = () => {
	return (
		<div className='w-full h-full flex flex-col items-center loginBgImage bg-cover '>
			<button
				className='my-3 ml-auto mr-4 border-2 border-guideOrange 
						bg-guideOrangeLight rounded-xl px-5 py-2 text-lg text-white font-bold'
			>
				Menu
			</button>
			<h1 className='my-10 w-[90%] mx-auto text-white flex flex-col text-3xl'>
				Welcome to
				<span className='my-2 text-guideOrange text-5xl font-bold'>
					Papa`s Pizzeria !
				</span>
			</h1>
			<div className='w-[90%] mx-auto mt-auto mb-6 flex items-center justify-between lg:justify-around'>
				<button
					className=' flex items-center px-4 py-2 border-2 
							border-guideOrange bg-guideOrangeLight text-lg text-white 
							font-bold rounded-xl'
				>
					<i className='text-blue-700 mr-1 text-3xl'>
						<FaFacebookSquare />
					</i>
					Facebook
				</button>
				<button
					className='flex items-center px-4 py-2 border-2 
							border-guideOrange bg-guideOrangeLight text-white text-lg font-bold rounded-xl'
				>
					<i className='mr-1 text-3xl'>
						<FcGoogle />
					</i>
					Google
				</button>
			</div>
			<input
				className='bg-transparent my-4 w-[90%] mx-auto py-2 px-1 rounded-xl 
							border-2 border-guideOrange outline-none text-white text-lg
							placeholder:text-white'
				type='text'
				placeholder='Your Email'
			/>
			<p className='text-white w-[90%] mx-auto mb-1 text-center'>
				Don´t have an account, yet ? Please,
				<span className='text-guideOrangeLight text-xl'> Sign in</span>
			</p>
		</div>
	)
}

export { Welcome }
