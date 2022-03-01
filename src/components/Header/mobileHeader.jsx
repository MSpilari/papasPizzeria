import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SideProfile } from '../SideProfile'
import { AiOutlineMenu, AiFillCompass } from 'react-icons/ai'
import { MdPlace } from 'react-icons/md'
import { FaShoppingBag } from 'react-icons/fa'
import { BsFillBellFill, BsFillHeartFill, BsPersonFill } from 'react-icons/bs'
import LogoSmall from '../../assets/SmallLogo.png'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../../firebase'

const MobileHeader = () => {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const { data: session, status } = useSession()
	const [likesCounter, setLikesCounter] = useState(0)
	const cartLength = useSelector(state => state.cart.length)

	useEffect(() => {
		session &&
			onSnapshot(
				collection(db, 'users', session.user.firebaseID, 'likes'),
				snapshot => setLikesCounter(snapshot.docs.length)
			)
	}, [session])

	return (
		<>
			{isSideMenuOpen && <SideProfile />}
			<header
				className='sticky top-0 w-full h-24 flex items-center justify-around
			border-b-2 border-b-slate-300 bg-white lg:hidden
			'
			>
				<button
					onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
					className='text-lg ml-3'
				>
					<i>
						<AiOutlineMenu />
					</i>
				</button>
				<div className='relative h-full w-56'>
					<Image
						layout='fill'
						objectFit='contain'
						sizes='50vw'
						src={LogoSmall}
						alt='Papa`s Pizzeria Logo'
						priority
					/>
				</div>

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
