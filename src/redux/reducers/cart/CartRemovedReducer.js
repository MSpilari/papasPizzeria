const CartRemovedReducer = {
	reducer(state, action) {
		const { id } = action.payload
		return state.filter(pizza => pizza.id != id)
	}
}

export { CartRemovedReducer }
