import React, { PropTypes } from 'react'
import { isRoad, isResidentialRoad, isTertiaryRoad, isMotorwayRoad, isBuilding, isFootpath, lonToX, latToY } from '../osm'

function onMouseMove(e, onUpdateViewport) {
  e.persist();
  if(e.buttons === 1) {
    onUpdateViewport({ x: e.clientX, y: e.clientY }, 100, 100);
    console.log('down');
  }
  console.log(e);

}

function onMouseZoom(e, onUpdateViewport) {

}

function drawWay(way, worldNodes) {
  const nodes = way.nd.map(nodeRef => {
    return worldNodes[nodeRef.ref];
  }).filter(node => node);

  // nodes.map(node => console.log(lonToX(node.lon)));

  const points = nodes.map(node => `${lonToX(node.lon)},${latToY(node.lat)}`).join(' ');

  const width = isRoad(way) ? 0.5 : 0.2;
  const fill = isBuilding(way) ? '#2A333C' : 'none';

  var stroke;
  if(isResidentialRoad(way)) stroke = '#f0ede5';
  else if(isTertiaryRoad(way)) stroke = '#FBBC05';
  else if(isMotorwayRoad(way)) stroke = '#CC3333';
  else stroke = 'none';

  return <polyline key={way.id} points={points} stroke={stroke} strokeWidth={width} fill={fill} strokeLinejoin="round" />;
}

function drawWays(ways, nodes) {
  return ways.filter(way => isRoad(way) || isBuilding(way)).map(way => drawWay(way, nodes));
}

function drawVehicles(vehicles) {
  return vehicles.map(vehicle => <circle key={vehicle.id} cx={lonToX(vehicle.lon)} cy={latToY(vehicle.lat)} r={0.5} fill="black" />);
}

const World = ({ viewport, world, onClick, onWheel, onUpdateViewport }) => (
  <svg vectorEffect="non-scaling-stroke" preserveAspectRatio="xMidYMid meet" viewBox={`${lonToX(viewport.lon)} ${latToY(viewport.lat)} ${viewport.width} ${viewport.height}`} onClick={onClick} onMouseMove={(e) => onMouseMove(e, onUpdateViewport)} onWheel={onWheel} style={{ backgroundColor: '#487742', width: '100%', height: '100vh' }}>
    {drawWays(world.ways, world.nodes)}
    {drawVehicles(world.vehicles)}
  </svg>
)
    // <polyline points="-35.3838500,149.0458200 -35.3810300,149.0458200 -35.3810300,149.0508800 -35.3810300,149.0458200" stroke="red" strokeWidth="0.00002" fill="none" />


World.propTypes = {
  viewport: PropTypes.object.isRequired,
  world: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onWheel: PropTypes.func,
  onUpdateViewport: PropTypes.func.isRequired
}

export default World
