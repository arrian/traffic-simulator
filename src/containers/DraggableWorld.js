import { connect } from 'react-redux'
import { updateViewport } from '../actions'
import World from '../components/World'

const mapStateToProps = (state) => ({
  viewport: state.viewport,
  world: state.world
})

const mapDispatchToProps = ({
  onUpdateViewport: updateViewport
})

const DraggableWorld = connect(
  mapStateToProps,
  mapDispatchToProps
)(World)

export default DraggableWorld
