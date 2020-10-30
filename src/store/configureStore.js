import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const initialState = {};
const enhancers = [];

const middleware = [
    thunk,
    loggerMiddleware,
]

if (process.env.NODE_ENV === 'development') {
    console.log('Executing on development environment...');
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
}

const composedEnhacers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)


const store = createStore(
    rootReducer(),
    initialState,
    composedEnhacers
);

export default store;