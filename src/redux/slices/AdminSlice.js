import { createSlice } from '@reduxjs/toolkit'
import { AdminLoggedInReducer } from '../reducers/admin/AdminLoggedInReducer'

const AdminSlice = createSlice({
	name: 'admin',
	initialState: [],
	reducers: {
		adminLoggedIn: AdminLoggedInReducer
	}
})

export const { adminLoggedIn } = AdminSlice.actions

export default AdminSlice.reducer
