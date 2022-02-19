import { nanoid } from '@reduxjs/toolkit'

const CartAddedReducer = {
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
}

export { CartAddedReducer }
