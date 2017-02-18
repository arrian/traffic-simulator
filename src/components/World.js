import React, { PropTypes } from 'react'

function onMouseMove(e, onUpdateViewport) {
  console.log(e);
}

const World = ({ viewport, world, onClick, onUpdateViewport }) => (
  <svg preserveAspectRatio="xMidYMid meet" viewBox="54.090 12.22 0.05 0.05" onClick={onClick} onMouseMove={(e) => onMouseMove(e, onUpdateViewport)} style={{ backgroundColor: 'black', width: '100%', height: '100vh' }}>
    {world.nodes.map(node => <circle key={node.id} cx={node.lat} cy={node.lon} r={0.0003} fill="red" />)}
  </svg>
)

World.propTypes = {
  viewport: PropTypes.object.isRequired,
  world: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onUpdateViewport: PropTypes.func.isRequired
}

export default World
