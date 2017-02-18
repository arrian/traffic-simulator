import React, { PropTypes } from 'react'

const World = ({ viewport, world, onClick, onMouseMove, onMouseDown, onMouseUp }) => (
  <svg onClick={onClick} onMouseMove={onMouseMove} onMouseDown={onMouseDown} onMouseUp={onMouseUp} style={{ backgroundColor: 'black', width: '100%', height: '100vh' }}>
    <circle cx={50} cy={50} r={10} fill="red" />
  </svg>
)

World.propTypes = {
  viewport: PropTypes.object.isRequired,
  world: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onMouseMove: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired
}

export default World
