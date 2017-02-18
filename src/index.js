import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { updateWorld } from './actions'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

Promise.all([
	fetch('./api/nodes').then(response => response.json()),
	fetch('./api/ways').then(response => response.json()),
	fetch('./api/relations').then(response => response.json()),
	fetch('./api/vehicles').then(response => response.json())
]).then(results => {
	store.dispatch(updateWorld({
		nodes: results[0],
		ways: results[1],
		relations: results[2],
		vehicles: results[3]
	}));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
