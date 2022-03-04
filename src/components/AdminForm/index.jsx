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
				<form action=''>
					<span>
						<label htmlFor='email'>Email:</label>
						<input type='email' name='email' />
					</span>
					<span>
						<label htmlFor='password'>Password:</label>
						<input type='password' name='password' />
					</span>
					<button type='submit'>Send</button>
				</form>
			</section>
		</div>
	)
}

export { AdminForm }
