import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'

import getBlockData from './sagas'

const sagaMiddleware = createSagaMiddleware();

/*const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;*/

const enhancers = [applyMiddleware(sagaMiddleware)];
const store = createStore(rootReducer, ...enhancers);
sagaMiddleware.run(getBlockData);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(App)
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => { render(App) })
}
