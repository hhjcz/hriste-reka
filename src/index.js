/** Created by hhj on 8/18/16. */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './configureStore'
import reducer from './reducer'

const initialState = {}
const store = configureStore(initialState, reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-view')
)
