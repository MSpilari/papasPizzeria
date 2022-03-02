import { collection, onSnapshot } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiFillCompass } from 'react-icons/ai'
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'
import { MdPlace } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { db } from '../../../firebase'
import { SideProfile } from '../SideProfile'
import { LogoPapasPizzeria } from '../UI/LogoPapasPizzeria'
import { SideMenuButton } from '../UI/SideMenuButton'
import { UserAvatar } from '../UI/UserAvatar'

const DesktopHeader = () => {
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
		// Prevent a memory leak
		return () => (unmounted = true)
	}, [session])
	return (
		<>
			{isSideMenuOpen && <SideProfile />}
			<header
				className='hidden sticky top-0 w-full h-24 lg:flex items-center
									 border-b-2 border-b-slate-300 bg-white'
			>
				<SideMenuButton
					isSideMenuOpen={isSideMenuOpen}
					setIsSideMenuOpen={setIsSideMenuOpen}
				/>

				<LogoPapasPizzeria />

				<nav className='flex items-center w-56 ml-auto'>
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
									className='absolute top-[50%] right-[30%] md:right-[40%] w-4 h-4 rounded-full 
															  text-xs bg-guideRed text-white animate-pulse'
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
								className='absolute top-[50%] right-[30%] md:right-[40%] w-4 h-4 rounded-full 
															  text-xs bg-guideRed text-white animate-pulse'
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
				</nav>

				<UserAvatar />
			</header>
		</>
	)
}

export { DesktopHeader }
