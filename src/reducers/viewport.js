const viewport = (state = { x: 0, y: 0, width: 100, height: 100, zoom: 1, down: false }, action) => {
	switch(action.type) {
		case 'MOUSE_DOWN':
			return Object.assign({}, state, { down: true });
		case 'MOUSE_UP':
			return Object.assign({}, state, { down: false });
		case 'MOUSE_MOVE':
			if(state.down) return Object.assign({}, state, { x: action.position.x, y: action.position.y });
			return state;
		default:
			return state;
	}
}

export default viewport
