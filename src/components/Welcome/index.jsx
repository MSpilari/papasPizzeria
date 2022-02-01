import Link from 'next/link'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Welcome = () => {
	return (
		<div className='w-full h-full loginBgImage bg-cover '>
			<div className='w-full h-full flex flex-col items-center bg-[rgba(0,0,0,0.6)]'>
				<Link href='/menu' passHref>
					<button
						className='my-3 ml-auto mr-4 
						bg-white rounded-3xl px-5 py-2 text-sm text-guideOrange font-bold'
					>
						Menu
					</button>
				</Link>
				<h1 className='mt-10 w-[90%] mx-auto text-white flex flex-col text-3xl'>
					Welcome to
					<span className='my-2 text-guideOrange text-5xl font-bold'>
						Papa`s Pizzeria !
					</span>
				</h1>
				<p className='w-[90%] mx-auto text-white text-sm'>
					Your favorite Pizza delivered fast at your door.
				</p>

				<div className='w-[90%] mx-auto mt-auto mb-5 flex flex-col items-center '>
					<div className='w-full flex items-center flex-nowrap mb-2'>
						<div className='w-full h-1 bg-white rounded-full' />
						<span className='w-full text-white text-sm text-center lg:text-2xl lg:w-[40%]'>
							Sign in with
						</span>
						<div className='w-full h-1 bg-white rounded-full' />
					</div>

					<div className='flex w-full items-center justify-between lg:justify-around'>
						<button
							className='w-full mr-2 flex items-center justify-center px-4 py-2 
						bg-white text-sm text-guideOrange 
							font-bold rounded-3xl lg:max-w-xs'
						>
							<i className='text-blue-700 mr-1 text-3xl'>
								<FaFacebookSquare />
							</i>
							Facebook
						</button>
						<button
							className='w-full ml-2 flex items-center justify-center px-4 py-2 
						bg-white text-sm text-guideOrange font-bold 
						rounded-3xl lg:max-w-xs'
						>
							<i className='mr-1 text-3xl'>
								<FcGoogle />
							</i>
							Google
						</button>
					</div>
				</div>
				<button
					className='bg-[rgba(0,0,0,0.7)] mb-3 w-[90%] mx-auto py-3 px-1 rounded-3xl 
							border-2 border-white outline-none text-white text-sm
							lg:max-w-lg'
				>
					Start with email or phone
				</button>

				<p className='text-white w-[90%] mx-auto mb-1 text-center'>
					Already have an account ?
					<span className='text-guideOrangeLight text-lg underline'>
						Sign in
					</span>
				</p>
			</div>
		</div>
	)
}

export { Welcome }
