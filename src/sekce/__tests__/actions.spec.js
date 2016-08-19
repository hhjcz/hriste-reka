/** Created by hhj on 8/19/16. */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import * as actions from '../actions'

describe('sekce actions', () => {

  it('defines actions', () => {
    expect(typeof actions).to.equal('object')
  })

  describe('increment action creator', () => {
    it('returns increment action type', () => {
      expect(actions.increment()).to.deep.equal({ type: actions.INCREMENT })
    })
  })

  describe('decrement action creator', () => {
    it('returns decrement action type', () => {
      expect(actions.decrement()).to.deep.equal({ type: actions.DECREMENT })
    })
  })

})
