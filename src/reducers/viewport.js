import { lonToX, latToY } from '../osm'

const viewport = (state = { lon: 149.0458200, lat: -35.3838500, width: 100, height: 100, zoom: 1, down: false }, action) => {
	switch(action.type) {
		case 'UPDATE_VIEWPORT':
			return Object.assign({}, state, { lon: action.position.lon, lat: action.position.lat });
		case 'ZOOM':
			return Object.assign({}, state, { width: state.width + action.delta.deltaY, height: state.height + action.delta.deltaY });
		default:
			return state;
	}
}

export default viewport
