/** Created by hhj on 8/19/16. */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import reducer, { InitialState } from '../reducer'
import * as actions from '../actions'

describe('sekce reducer', () => {

  it('returns empty initial state', () => {
    expect(reducer(null, {})).to.deep.equal(new InitialState())
  })

  it('returns passed initial state', () => {
    expect(reducer({ hodnota: 77 }, {})).to.deep.equal(new InitialState({ hodnota: 77 }))
  })

  it('increments on increment action', () => {
    expect(reducer({ hodnota: 66 }, actions.increment()).hodnota).to.equal(67)
  })

  it('decrements on decrement action', () => {
    expect(reducer({ hodnota: 66 }, actions.decrement()).hodnota).to.equal(65)
  })

})
