import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowLeft, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import {
	deleteDoc,
	doc,
	setDoc,
	onSnapshot,
	collection
} from 'firebase/firestore'
import { db } from '../../../firebase'

const BackLikeImage = ({ image }) => {
	const { data: session } = useSession()
	const [hasLiked, setHasLiked] = useState(false)
	const [likes, setLikes] = useState([])
	const [_, id] = document.location.pathname.split('/pizza/')

	const likePizza = async () => {
		return session && hasLiked
			? await deleteDoc(doc(db, 'users', session.user.firebaseID, 'likes', id))
			: await setDoc(doc(db, 'users', session.user.firebaseID, 'likes', id), {
					name,
					pizzaId: id
			  })
	}

	useEffect(() => {
		let unmounted = false
		session &&
			session.user.type == 'User' &&
			!unmounted &&
			onSnapshot(
				collection(db, 'users', session.user.firebaseID, 'likes'),
				snapshot => setLikes(snapshot.docs.map(like => like.data()))
			)
		// Prevent a memory leak
		return () => (unmounted = true)
	}, [session])

	useEffect(() => {
		session &&
			session.user.type == 'User' &&
			setHasLiked(likes.findIndex(like => like.pizzaId === id) != -1)
	}, [id, likes, session])

	return (
		<div className='flex flex-col w-[90%] mx-auto lg:col-span-1 lg:row-span-2'>
			<div
				className='flex items-center justify-between 
							w-[90%] mx-auto text-xl z-10 relative top-10'
			>
				<Link href='/menu' passHref>
					<button className='bg-white rounded-lg p-1 '>
						<AiOutlineArrowLeft />
					</button>
				</Link>

				<button
					disabled={
						session === null || (session && session.user.type == 'Admin')
					}
					onClick={() => likePizza()}
					className='bg-white rounded-lg p-1 text-red-500 
									   disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed'
				>
					{hasLiked ? <AiFillHeart /> : <AiOutlineHeart />}
				</button>
			</div>

			<div className='relative w-full h-[200px] lg:h-full rounded-lg overflow-hidden'>
				<Image
					objectFit='cover'
					priority
					layout='fill'
					sizes='50vw'
					src={image}
					alt='Pizza Image'
				/>
			</div>
		</div>
	)
}

export { BackLikeImage }
