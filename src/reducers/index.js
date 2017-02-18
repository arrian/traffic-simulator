import { combineReducers } from 'redux'
import world from './world'
import viewport from './viewport'

const trafficApp = combineReducers({
  world,
  viewport
})

export default trafficApp
