import Image from 'next/image'
import DeskFeatured from '../../assets/featuredDesktop.jpg'
const DesktopFeatured = () => {
	return (
		<div className='hidden w-full h-[400px] lg:flex '>
			<div className='relative w-full h-full'>
				<Image
					src={DeskFeatured}
					alt='Desktop Featured'
					sizes='50vw'
					objectFit='fill'
					layout='fill'
					priority
				/>
			</div>
		</div>
	)
}

export { DesktopFeatured }
