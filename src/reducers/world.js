// import undoable from 'redux-undo'

const world = (state = { nodes: [], ways: [], vehicles: [], relations: [] }, action) => {
  switch(action.type) {
    case 'UPDATE_WORLD':
      return action.world;
    default:
      return state;
  }
}

// const undoableTodos = undoable(todos)

export default world
