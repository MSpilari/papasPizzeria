import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialValue = []

const CartSlice = createSlice({
	name: 'cart',
	initialState: initialValue,
	reducers: {
		cartAdded: {
			reducer(state, action) {
				state.push(action.payload)
			},
			prepare(chosenPizza) {
				const id = nanoid()
				return {
					payload: {
						id,
						...chosenPizza
					}
				}
			}
		},
		cartRemoved(state, action) {
			const { id } = action.payload
			return state.filter(pizza => pizza.id != id)
		}
	}
})

export const { cartAdded, cartRemoved } = CartSlice.actions

export default CartSlice.reducer
