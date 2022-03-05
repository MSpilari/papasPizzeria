import { AiOutlineClose } from 'react-icons/ai'

const AdminForm = ({ setIsAdminFormOpen }) => {
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
				<form action='' className='flex flex-col w-full'>
					<span className='w-[90%] flex items-center text-white mx-auto my-2'>
						<label className='w-28' htmlFor='email'>
							Email:
						</label>
						<input
							className='w-full text-guideOrange outline-none rounded-md bg-transparent border-2 border-guideOrangeLight'
							type='email'
							name='email'
						/>
					</span>
					<span className='w-[90%] flex items-center text-white mx-auto my-2'>
						<label className='w-28' htmlFor='password'>
							Password:
						</label>
						<input
							className='w-full text-guideOrange outline-none rounded-md bg-transparent border-2 border-guideOrangeLight'
							type='password'
							name='password'
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
