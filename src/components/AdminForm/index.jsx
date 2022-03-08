import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineClose } from 'react-icons/ai'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { adminLoggedIn } from '../../redux/slices/AdminSlice'

const AdminForm = ({ setIsAdminFormOpen }) => {
	const [adminCredentials, setAdminCredentials] = useState({})
	const [errorMessage, setErrorMessage] = useState(false)
	const emailInputRef = useRef()
	const passwordInputRef = useRef()

	const router = useRouter()

	const dispatch = useDispatch()
	const adminLength = useSelector(state => state.admin.length)

	const adminLogin = async ({ email, password }) => {
		try {
			const isSignedIn = await signInWithEmailAndPassword(auth, email, password)
			const { accessToken, email: adminEmail, uid } = isSignedIn.user

			dispatch(adminLoggedIn({ accessToken, adminEmail, uid }))
		} catch (error) {
			setErrorMessage(true)
			emailInputRef.current.value = ''
			passwordInputRef.current.value = ''
		}
	}

	useEffect(() => {
		if (adminLength > 0) router.push('/admin/configs')
	}, [adminLength, router])

	return (
		<div className='absolute top-0 w-full h-full z-10 bg-[rgba(0,0,0,0.9)] flex items-center justify-center'>
			<section
				className='mx-2 border-2 border-guideOrange rounded-lg flex flex-col items-center
          lg:w-[500px] lg:mx-auto'
			>
				<button
					className='my-3 ml-auto mr-4 
						bg-white rounded-3xl px-5 py-2 text-sm text-guideOrange font-bold'
					onClick={() => setIsAdminFormOpen(false)}
				>
					<AiOutlineClose />
				</button>

				<h1 className='text-xl text-white mx-1'>Hi admin, sign in, please.</h1>
				{errorMessage && (
					<p className='text-guideRed my-1'>
						The email/password are not correct !
					</p>
				)}
				<form
					action=''
					className='flex flex-col w-full'
					onSubmit={e => {
						e.preventDefault()
						return adminLogin(adminCredentials)
					}}
				>
					<span className='w-[90%] flex items-center text-white mx-auto my-2'>
						<label className='w-28' htmlFor='email'>
							Email:
						</label>

						<input
							ref={emailInputRef}
							className='w-full text-guideOrange outline-none rounded-md bg-transparent border-2 border-guideOrangeLight'
							type='email'
							name='email'
							onChange={e =>
								setAdminCredentials(prevValue => ({
									...prevValue,
									[e.target.name]: e.target.value
								}))
							}
						/>
					</span>

					<span className='w-[90%] flex items-center text-white mx-auto my-2'>
						<label className='w-28' htmlFor='password'>
							Password:
						</label>

						<input
							ref={passwordInputRef}
							className='w-full text-guideOrange outline-none rounded-md bg-transparent border-2 border-guideOrangeLight'
							type='password'
							name='password'
							onChange={e =>
								setAdminCredentials(prevValue => ({
									...prevValue,
									[e.target.name]: e.target.value
								}))
							}
						/>
					</span>

					<button
						type='submit'
						className='my-3 ml-auto mr-4 
						bg-white rounded-3xl px-5 py-2 text-sm text-guideOrange font-bold'
					>
						Sign in as Admin
					</button>
				</form>
			</section>
		</div>
	)
}

export { AdminForm }
