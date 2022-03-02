import { collection, onSnapshot } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiFillCompass } from 'react-icons/ai'
import { BsFillBellFill, BsFillHeartFill, BsPersonFill } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'
import { MdPlace } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { db } from '../../../firebase'
import { SideProfile } from '../SideProfile'
import { LogoPapasPizzeria } from '../UI/LogoPapasPizzeria'
import { SideMenuButton } from '../UI/SideMenuButton'

const MobileHeader = () => {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const { data: session, status } = useSession()
	const [likesCounter, setLikesCounter] = useState(0)
	const cartLength = useSelector(state => state.cart.length)

	useEffect(() => {
		let unmounted = false
		session &&
			!unmounted &&
			onSnapshot(
				collection(db, 'users', session.user.firebaseID, 'likes'),
				snapshot => setLikesCounter(snapshot.docs.length)
			)
		//Prevent a memory leak
		return () => (unmounted = true)
	}, [session])

	return (
		<>
			{isSideMenuOpen && <SideProfile />}
			<header
				className='sticky top-0 w-full h-24 flex items-center justify-around
			border-b-2 border-b-slate-300 bg-white lg:hidden
			'
			>
				<SideMenuButton
					isSideMenuOpen={isSideMenuOpen}
					setIsSideMenuOpen={setIsSideMenuOpen}
				/>

				<LogoPapasPizzeria />

				{status == 'authenticated' ? (
					<div className='relative mr-3 h-14 w-16 rounded-full overflow-hidden '>
						<Image
							sizes='50vw'
							src={session.user.image}
							layout='fill'
							alt='User Pic'
						/>
					</div>
				) : (
					<div className='relative mx-5 h-14 w-16 flex items-center justify-center'>
						<i className='text-4xl text-slate-500'>
							<BsPersonFill />
						</i>
					</div>
				)}
			</header>
			<footer
				className='fixed bottom-0 w-full flex items-center 
			h-16 justify-around border-t-2 border-t-slate-300 bg-white lg:hidden'
			>
				<button className='flex items-center justify-center text-2xl h-full w-full text-slate-500'>
					<i>
						<AiFillCompass />
					</i>
				</button>
				<button className='flex items-center justify-center text-2xl h-full w-full text-slate-500'>
					<i>
						<MdPlace />
					</i>
				</button>
				<Link href='/cart' passHref>
					<button
						className={`relative flex flex-col items-center justify-center text-2xl h-full w-full 
											 ${cartLength == 0 ? 'text-slate-500' : 'text-guideOrange'} `}
					>
						{cartLength != 0 && (
							<div
								className='absolute top-[50%] right-[30%] md:right-[40%] w-4 h-4 
															rounded-full text-xs bg-guideRed text-white animate-pulse'
							>
								{cartLength}
							</div>
						)}
						<i>
							<FaShoppingBag />
						</i>
					</button>
				</Link>
				<button
					className={`relative flex flex-col items-center justify-center text-2xl h-full w-full 
											 ${likesCounter == 0 ? 'text-slate-500' : 'text-guideOrange'} `}
				>
					{likesCounter != 0 && (
						<div
							className='absolute top-[50%] right-[30%] md:right-[40%] w-4 h-4 
															rounded-full text-xs bg-guideRed text-white animate-pulse'
						>
							{likesCounter}
						</div>
					)}
					<i>
						<BsFillHeartFill />
					</i>
				</button>
				<button className='flex items-center justify-center text-2xl h-full w-full text-slate-500'>
					<i>
						<BsFillBellFill />
					</i>
				</button>
			</footer>
		</>
	)
}

export { MobileHeader }
