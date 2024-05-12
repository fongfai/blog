import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from './redux'
import { Provider } from 'react-redux'
import thunk from './redux-thunk/src'
import Logger from './redux-logger/src'
import reducer from './reducers'
import App from './containers/App'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  //Note: logger must be the last middleware in chain,
  // otherwise it will log thunk and promise, not actual actions (#20).
  middleware.push(Logger)
}

const enhancer = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // other store enhancers if any
)
console.log('enhancer', enhancer)
const store = createStore(reducer, enhancer)

render(
  <App />,
  document.getElementById('root')
)


export const middleware = ({ dispatch } => next => action => ({
  next(action) 
})}