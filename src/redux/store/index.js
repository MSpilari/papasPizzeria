import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/CartSlice'

export default configureStore({
	reducer: {
		cart: cartReducer
	}
})
