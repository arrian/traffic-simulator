
export const updateViewport = (position, width, height) => ({
	type: 'UPDATE_VIEWPORT',
	position,
	width,
	height
});

export const updateWorld = (world) => ({
	type: 'UPDATE_WORLD',
	world
});

export const updateVehicles = vehicles => ({
	type: 'UPDATE_VEHICLES',
	vehicles
});