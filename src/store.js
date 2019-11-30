import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'

import rootReducers from './reducers'
import rootEpics from './epics'

export default function() {
  const epicMiddleware = createEpicMiddleware()

  const middlewares = [thunk, epicMiddleware]
  const middlewareEnhancers = applyMiddleware(...middlewares)

  const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  const enhancers = [middlewareEnhancers, reduxDevtools];
  const composedEnhancers = compose(...enhancers);
  
  const store = createStore(rootReducers, undefined, composedEnhancers)

  epicMiddleware.run(rootEpics)
  
  return store
}
