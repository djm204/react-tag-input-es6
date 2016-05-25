import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/index'
// import DevTools from '../../../common/DevTools'

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, createLogger({ collapsed: true })),
     // DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
