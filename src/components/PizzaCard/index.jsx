import {
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	setDoc
} from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { db } from '../../../firebase'
import { formatter } from '../../utils/currencyFormatter'

const PizzaCard = ({ name, description, image, price, id }) => {
	const { data: session } = useSession()
	const [likes, setLikes] = useState([])
	const [hasLiked, setHasLiked] = useState(false)

	const likePizza = async () => {
		/* This is a way to communicate with firebase only on the client side. 
		Remember to expose environment variables in two ways: 
		 - the usual way "NODE_ENV" 
		 - for Next, following the "NEXT_PUBLIC_NODE_ENV" pattern. 
		So you can use the FRONT or BACK approach.  */
		session && hasLiked
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
		// Using this to prevent a memory leak
		return () => (unmounted = true)
	}, [session])

	useEffect(() => {
		session &&
			session.user.type == 'User' &&
			setHasLiked(likes.findIndex(like => like.pizzaId === id) != -1)
	}, [id, likes, session])

	return (
		<div className='w-[90%] max-w-xs h-[200px] flex flex-col items-center border-2 border-slate-300 rounded-3xl overflow-hidden my-2 lg:mx-auto'>
			<Link href={`/pizza/${id}`} passHref>
				<div className='relative cursor-pointer w-full h-full'>
					<Image
						src={image}
						objectFit='cover'
						layout='fill'
						sizes='50vw'
						alt='Pizza Image'
					/>
				</div>
			</Link>
			<div className=' w-[85%] mx-auto my-1 flex items-center justify-between'>
				<span className='flex items-center border-2 border-slate-300 rounded-3xl px-1 py-1 font-bold'>
					{' '}
					<span className='text-guideOrange text-lg mr-1'>
						{formatter.format(price)}
					</span>
				</span>
				<button
					disabled={
						session === null || (session && session.user.type == 'Admin')
					}
					onClick={() => likePizza()}
					className={`text-2xl text-red-500 border-2 rounded-lg
					disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed`}
				>
					{hasLiked ? <AiFillHeart /> : <AiOutlineHeart />}
				</button>
			</div>
			<div className='w-[90%] flex flex-col flex-nowrap mx-auto'>
				<p className='text-sm mb-1 truncate'>{name}</p>
				<p className='text-xs truncate text-gray-400'>{description}</p>
			</div>
		</div>
	)
}

export { PizzaCard }
