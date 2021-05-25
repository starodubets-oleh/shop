import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { data } from './reducer';
import rootSaga from './saga';

const allReducers = combineReducers({
  data
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
