import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default (initialState = {}) => {
  // Create store
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  // Start sagas
  if (sagaMiddleware) {
    sagaMiddleware.run(sagas);
  }
  return store;
};
