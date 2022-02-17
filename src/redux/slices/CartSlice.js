import { createSlice } from '@reduxjs/toolkit'

const initialValue = [
	{
		name: 'Chicken Hawaiian',
		quantity: 2,
		finalCost: 20,
		optionals: [
			{
				ingredient: 'Onions',
				price: 2
			}
		]
	}
]

const CartSlice = createSlice({
	name: 'cart',
	initialState: initialValue,
	reducers: {
		cartAdded(state, action) {
			state.push(action.payload)
		}
	}
})

export const { cartAdded } = CartSlice.actions

export default CartSlice.reducer
