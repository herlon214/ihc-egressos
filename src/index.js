// Libs
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

// Components
import App from './App'
import reducers from './reducers'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index')
    store.replaceReducer(nextRootReducer)
  })
}

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
