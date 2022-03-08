import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/CartSlice'
import adminReducer from '../slices/AdminSlice'

export default configureStore({
	reducer: {
		cart: cartReducer,
		admin: adminReducer
	}
})
