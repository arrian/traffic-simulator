
export function isTertiaryRoad(way) {
	return way.tag.filter(tag => tag.v === 'tertiary' || tag.v === 'secondary').length >= 1;
}

export function isMotorwayRoad(way) {
	return way.tag.filter(tag => tag.v === 'motorway' || tag.v === 'primary').length >= 1;
}

export function isResidentialRoad(way) {
	return way.tag.filter(tag => tag.v === 'residential').length >= 1;
}

export function isRoad(way) {
	return isResidentialRoad(way) || isTertiaryRoad(way) || isMotorwayRoad(way);
}

export function isBuilding(way) {
	return way.tag.filter(tag => tag.k === 'building').length >= 1;
}

export function isFootpath(way) {
	return way.tag.filter(tag => tag.v === 'path' || tag.v === 'footway').length >= 1;
}

export function lonToX(lon) {
	return 6000 * lon * Math.cos(-35.3828947);
}

export function latToY(lat) {
	return 6000 * lat;
}