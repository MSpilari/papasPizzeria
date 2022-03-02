import { useState } from 'react'
import { SideProfile } from '../../SideProfile'
import { LogoPapasPizzeria } from '../../UI/LogoPapasPizzeria'
import { NavigationButtons } from '../CommonParts/NavigationButtons'
import { SideMenuButton } from '../../UI/SideMenuButton'
import { UserAvatar } from '../../UI/UserAvatar'

const MobileHeader = () => {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

	return (
		<>
			{isSideMenuOpen && <SideProfile />}
			<header
				className='sticky top-0 w-full h-24 flex items-center justify-around
			border-b-2 border-b-slate-300 bg-white lg:hidden'
			>
				<SideMenuButton
					isSideMenuOpen={isSideMenuOpen}
					setIsSideMenuOpen={setIsSideMenuOpen}
				/>

				<LogoPapasPizzeria />

				<UserAvatar />
			</header>

			<footer
				className='fixed bottom-0 w-full flex items-center 
			h-16 justify-around border-t-2 border-t-slate-300 bg-white lg:hidden'
			>
				<NavigationButtons />
			</footer>
		</>
	)
}

export { MobileHeader }
