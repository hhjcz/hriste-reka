/** Created by hhj on 8/19/16. */
import { createStore } from 'redux'

/**
 * @param {Object} initialState
 * @param {Function} reducer
 * @returns {Store}
 */
const configureStore = (initialState = {}, reducer = x => x) => {
  const store = createStore(reducer, initialState)

  return store
}

export default configureStore
