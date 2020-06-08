import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
