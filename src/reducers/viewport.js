const viewport = (state = { x: 0, y: 0, width: 100, height: 100, zoom: 1, down: false }, action) => {
	switch(action.type) {
		case 'UPDATE_VIEWPORT':
			return Object.assign({}, state, { x: action.position.x, y: action.position.y });
		default:
			return state;
	}
}

export default viewport
