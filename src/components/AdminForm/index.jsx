import { useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { signIn } from 'next-auth/react'

const AdminForm = ({ setIsAdminFormOpen }) => {
	const [adminCredentials, setAdminCredentials] = useState({})
	const [errorMessage, setErrorMessage] = useState(false)
	const emailInputRef = useRef()
	const passwordInputRef = useRef()

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
				<form className='flex flex-col w-full'>
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
						type='button'
						className='my-3 ml-auto mr-4 
						bg-white rounded-3xl px-5 py-2 text-sm text-guideOrange font-bold'
						onClick={() =>
							signIn('credentials', {
								callbackUrl: '/admin/configs',
								...adminCredentials
							})
						}
					>
						Sign in as Admin
					</button>
				</form>
			</section>
		</div>
	)
}

export { AdminForm }
