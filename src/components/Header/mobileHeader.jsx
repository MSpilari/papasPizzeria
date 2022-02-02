import Image from 'next/image'
import { useState } from 'react'
import { SideProfile } from '../SideProfile'
import { AiOutlineMenu, AiFillCompass } from 'react-icons/ai'
import { MdPlace } from 'react-icons/md'
import { FaShoppingBag } from 'react-icons/fa'
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs'
import LogoSmall from '../../assets/SmallLogo.png'

const MobileHeader = () => {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	return (
		<>
			{isSideMenuOpen && <SideProfile />}
			<header
				className='absolute top-0 w-full h-24 flex items-center justify-around
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
					/>
				</div>
				<div className='relative mr-3 h-14 w-16 rounded-full overflow-hidden '>
					<Image
						sizes='50vw'
						src='https://github.com/MSpilari.png'
						layout='fill'
						alt='User Pic'
					/>
				</div>
			</header>
			<footer
				className='absolute bottom-0 w-full flex items-center 
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
				<button className='flex items-center justify-center text-2xl h-full w-full text-slate-500'>
					<i>
						<FaShoppingBag />
					</i>
				</button>
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
			</footer>
		</>
	)
}

export { MobileHeader }
