import { useState } from 'react'
import { SideProfile } from '../SideProfile'
import { LogoPapasPizzeria } from '../UI/LogoPapasPizzeria'
import { NavigationButtons } from './CommonParts/NavigationButtons'
import { SideMenuButton } from '../UI/SideMenuButton'
import { UserAvatar } from '../UI/UserAvatar'

const DesktopHeader = () => {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

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
					<NavigationButtons />
				</nav>

				<UserAvatar />
			</header>
		</>
	)
}

export { DesktopHeader }
