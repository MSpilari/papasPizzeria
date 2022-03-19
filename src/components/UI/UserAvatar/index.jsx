import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { BsPersonFill } from 'react-icons/bs'

const UserAvatar = ({ sideProfile }) => {
	const { data: session, status } = useSession()

	return session && session.user.image ? (
		<div
			className={`relative mr-3 h-14 w-16 rounded-full overflow-hidden lg:mx-5
                 ${sideProfile && 'mt-3 h-20 w-20 mr-0 lg:mx-0'}`}
		>
			<Image
				sizes='50vw'
				src={session.user.image}
				layout='fill'
				alt='User Pic'
			/>
		</div>
	) : (
		<div
			className={`relative mx-5 h-14 w-16 flex items-center justify-center
                    ${sideProfile && 'mt-3 h-20 w-20 mr-0 lg:mx-0'}`}
		>
			<i className='text-4xl text-slate-500'>
				<BsPersonFill />
			</i>
		</div>
	)
}

export { UserAvatar }
