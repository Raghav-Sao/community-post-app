import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from 'reducers'

const middleware = applyMiddleware(logger)

export default createStore(reducers, composeWithDevTools(), applyMiddleware(logger))
