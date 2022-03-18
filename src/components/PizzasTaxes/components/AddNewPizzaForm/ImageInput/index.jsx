import { AiFillCamera } from 'react-icons/ai'
import Image from 'next/image'
import { useRef } from 'react'

const ImageInput = ({ selectedImage, setSelectedImage }) => {
	const imageButtonRef = useRef(null)

	function addImage(event) {
		const reader = new FileReader()

		if (event.target.files.item(0)) {
			reader.readAsDataURL(event.target.files[0])
		}

		reader.onload = readerEvent => {
			setSelectedImage(String(readerEvent.target.result))
		}
	}

	return (
		<>
			<div className='w-[300px] h-[200px] relative border-2 border-slate-300 flex items-center justify-center rounded-lg overflow-hidden'>
				{selectedImage ? (
					<Image
						src={selectedImage}
						alt='Pizza Image'
						layout='fill'
						sizes='50vw'
						objectFit='fill'
						className='w-full h-full'
						onClick={() => {
							if (imageButtonRef.current) {
								imageButtonRef.current.value = ''
								setSelectedImage('')
							}
						}}
					/>
				) : (
					<button
						type='button'
						className='text-2xl'
						onClick={() => imageButtonRef.current.click()}
					>
						<AiFillCamera />
					</button>
				)}
			</div>
			<input
				ref={imageButtonRef}
				type='file'
				name='image'
				hidden
				onChange={e => addImage(e)}
			/>
		</>
	)
}

export { ImageInput }
