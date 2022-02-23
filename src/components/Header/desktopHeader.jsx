import { AiFillCompass, AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'
import { SideProfile } from '../SideProfile'
import LogoSmall from '../../assets/SmallLogo.png'
import { useState } from 'react'
import Link from 'next/link'
import { FaShoppingBag } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { BsFillBellFill, BsFillHeartFill, BsPersonFill } from 'react-icons/bs'
import { MdPlace } from 'react-icons/md'
import { useSession } from 'next-auth/react'

const DesktopHeader = () => {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const { data: session, status } = useSession()
	const cartLength = useSelector(state => state.cart.length)

	return (
		<>
			{isSideMenuOpen && <SideProfile />}
			<header
				className='hidden sticky top-0 w-full h-24 lg:flex items-center
									 border-b-2 border-b-slate-300 bg-white'
			>
				<button
					onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
					className='text-lg ml-5'
				>
					<i>
						<AiOutlineMenu />
					</i>
				</button>
				<div className='relative h-full w-56 ml-[30%]'>
					<Image
						layout='fill'
						objectFit='contain'
						sizes='50vw'
						src={LogoSmall}
						alt='Papa`s Pizzeria Logo'
						priority
					/>
				</div>
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
					<button className='flex items-center justify-center text-2xl h-full w-full text-slate-500'>
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
				{status == 'unauthenticated' || status == 'loading' ? (
					<div className='relative mx-5 h-14 w-16 flex items-center justify-center'>
						<i className='text-4xl text-slate-500'>
							<BsPersonFill />
						</i>
					</div>
				) : (
					<div className='relative mx-5 h-14 w-16 rounded-full overflow-hidden'>
						<Image
							sizes='50vw'
							src={session.user.image}
							layout='fill'
							alt='User Pic'
						/>
					</div>
				)}
			</header>
		</>
	)
}

export { DesktopHeader }
