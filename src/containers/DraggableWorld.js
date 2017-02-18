import { connect } from 'react-redux'
import { mouseDown, mouseUp, mouseMove } from '../actions'
import World from '../components/World'

const mapStateToProps = (state) => ({
  viewport: state.viewport,
  world: state.world
})

const mapDispatchToProps = ({
  onMouseDown: mouseDown,
  onMouseUp: mouseUp,
  onMouseMove: (e) => mouseMove({ x: e.clientX, y: e.clientY })
})

const DraggableWorld = connect(
  mapStateToProps,
  mapDispatchToProps
)(World)

export default DraggableWorld
