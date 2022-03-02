import { AiOutlineMenu } from 'react-icons/ai'

const SideMenuButton = ({ setIsSideMenuOpen, isSideMenuOpen }) => {
	return (
		<button
			onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
			className='text-lg ml-3 lg:ml-5'
		>
			<i>
				<AiOutlineMenu />
			</i>
		</button>
	)
}

export { SideMenuButton }
