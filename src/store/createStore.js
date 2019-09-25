import React from 'react';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { tourSagas } from './sagas/index';
import reducers from './reducer';

// const composeEnhancers =
//   process.env.NODE_ENV === 'development'
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

export default ({ element }) => {
  const middleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(middleware));
  middleware.run(tourSagas);
  // const store = createStore(reducers);
  return <Provider store={store}>{element}</Provider>;
};
