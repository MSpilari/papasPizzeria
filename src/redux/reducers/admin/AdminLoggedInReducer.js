import { nanoid } from '@reduxjs/toolkit'

const AdminLoggedInReducer = {
	reducer(state, action) {
		state.push(action.payload)
	},
	prepare(adminInfo) {
		const id = nanoid()
		return {
			payload: {
				id,
				...adminInfo
			}
		}
	}
}

export { AdminLoggedInReducer }
