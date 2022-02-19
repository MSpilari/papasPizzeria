import { createSlice } from '@reduxjs/toolkit'
import { CartAddedReducer } from '../reducers/cart/CartAddedReducer'
import { CartRemovedReducer } from '../reducers/cart/CartRemovedReducer'

const initialValue = []

const CartSlice = createSlice({
	name: 'cart',
	initialState: initialValue,
	reducers: {
		cartAdded: CartAddedReducer,
		cartRemoved: CartRemovedReducer
	}
})

export const { cartAdded, cartRemoved } = CartSlice.actions

export default CartSlice.reducer
