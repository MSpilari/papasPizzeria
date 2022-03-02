import Image from 'next/image'
import LogoSmall from '../../../assets/SmallLogo.png'

const LogoPapasPizzeria = () => {
	return (
		<div className='relative h-full w-56 lg:ml-[30%]'>
			<Image
				layout='fill'
				objectFit='contain'
				sizes='50vw'
				src={LogoSmall}
				alt='Papa`s Pizzeria Logo'
				priority
			/>
		</div>
	)
}

export { LogoPapasPizzeria }
