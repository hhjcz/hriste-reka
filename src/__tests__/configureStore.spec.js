/** Created by hhj on 8/19/16. */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import configureStore from '../configureStore'

describe('app configureStore', () => {
  const initialState = { someSubState: { someValue: 666 } }
  const reducer = (state = {}, action) => state
  let store

  beforeEach(() => {
    store = configureStore(initialState, reducer)
  })

  it('returns proper redux store', () => {
    const { getState, dispatch } = store
    expect(typeof store).to.equal('object')
    expect(typeof dispatch).to.equal('function')
    expect(typeof getState).to.equal('function')
  })

  it('sets initial state', () => {
    const { getState } = store
    expect(getState()).to.deep.equal(initialState)
  })

})
