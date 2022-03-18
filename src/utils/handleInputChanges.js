function handleInputChanges(event, stateChanger) {
	const { name, value } = event.target

	stateChanger(prevState => {
		return { ...prevState, [name]: value }
	})
}

export { handleInputChanges }
