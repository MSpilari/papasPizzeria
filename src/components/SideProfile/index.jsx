import { FaNewspaper } from 'react-icons/fa'
import { FiSettings, FiHelpCircle } from 'react-icons/fi'
import { BiLogOut, BiLogIn } from 'react-icons/bi'
import { AiFillMessage } from 'react-icons/ai'
import {
	BsFillPersonFill,
	BsPinAngleFill,
	BsCash,
	BsPersonFill
} from 'react-icons/bs'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

const SideProfile = () => {
	const { data: session, status } = useSession()
	return (
		<aside
			className='w-[70%] md:w-[40%] z-20 absolute top-24 h-[calc(100%-96px)] 
    						 flex flex-col items-center bg-white'
		>
			{status == 'authenticated' ? (
				<div className='relative mt-3 h-20 w-20 rounded-full overflow-hidden'>
					<Image
						sizes='50vw'
						src={session.user.image}
						layout='fill'
						alt='User Pic'
					/>
				</div>
			) : (
				<div className='relative mt-3 h-20 w-20 flex items-center justify-center'>
					<i className='text-4xl text-slate-500'>
						<BsPersonFill />
					</i>
				</div>
			)}

			<h1 className='text-sm w-full text-center truncate'>
				{status == 'authenticated' ? session.user.name : 'User Name'}
			</h1>
			<p className='text-xs text-gray-500 w-full text-center truncate'>
				{status == 'authenticated' ? session.user.email : 'User@email.com'}
			</p>
			<nav className='flex flex-col items-center mt-4'>
				<button
					className='flex items-center border-2 border-transparent py-1 px-2 rounded-3xl 
				hover:border-slate-300'
				>
					<i className='text-guideOrange text-2xl mr-1'>
						<FaNewspaper />
					</i>
					My Orders
				</button>
				<button
					className='flex items-center  border-2 border-transparent py-1 px-2 rounded-3xl 
				hover:border-slate-300'
				>
					<i className='text-guideOrange text-2xl mr-1'>
						<BsFillPersonFill />
					</i>
					My Profile
				</button>
				<button
					className='flex items-center  border-2 border-transparent py-1 px-2 rounded-3xl 
				hover:border-slate-300'
				>
					<i className='text-guideOrange text-2xl mr-1'>
						<BsPinAngleFill />
					</i>
					Delivery Address
				</button>
				<button
					className='flex items-center  border-2 border-transparent py-1 px-2 rounded-3xl 
				hover:border-slate-300'
				>
					<i className='text-guideOrange text-2xl mr-1'>
						<BsCash />
					</i>
					Payment Methods
				</button>
				<button
					className='flex items-center  border-2 border-transparent py-1 px-2 rounded-3xl 
				hover:border-slate-300'
				>
					<i className='text-guideOrange text-2xl mr-1'>
						<AiFillMessage />
					</i>
					Contact Us
				</button>
				<button
					className='flex items-center  border-2 border-transparent py-1 px-2 rounded-3xl 
				hover:border-slate-300'
				>
					<i className='text-guideOrange text-2xl mr-1'>
						<FiSettings />
					</i>
					Settings
				</button>
				<button
					className='flex items-center  border-2 border-transparent py-1 px-2 rounded-3xl 
								   hover:border-slate-300'
				>
					<i className='text-guideOrange text-2xl mr-1'>
						<FiHelpCircle />
					</i>
					Helps & FAQs
				</button>
			</nav>
			{status == 'authenticated' ? (
				<button
					className='flex items-center bg-guideOrange px-2 py-2 
									 rounded-2xl text-white text-sm mt-auto mb-3 hover:opacity-90'
					onClick={() => signOut({ callbackUrl: '/login' })}
				>
					<i className='text-black text-2xl mr-1'>
						<BiLogOut />
					</i>
					Log Out
				</button>
			) : (
				<button
					onClick={() => signIn()}
					className='flex items-center bg-guideOrange px-2 py-2 
									 rounded-2xl text-white text-sm mt-auto mb-3 hover:opacity-90'
				>
					<i className='text-black text-2xl mr-1'>
						<BiLogIn />
					</i>
					Log In
				</button>
			)}
		</aside>
	)
}

export { SideProfile }
