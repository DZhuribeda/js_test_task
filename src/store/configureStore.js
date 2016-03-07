import { createStore, applyMiddleware, compose } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'

import reducers from '../reducers'
import DevTools from './../components/DevTools'

const createStoreWithMiddleware = compose(
      applyMiddleware(apiMiddleware),
      DevTools.instrument()
    )(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducers, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}