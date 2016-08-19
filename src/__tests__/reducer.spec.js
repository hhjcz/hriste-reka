/** Created by hhj on 8/19/16. */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import reducer from '../reducer'

describe('app reducer', () => {

  it('creates reducer', () => {
    expect(typeof reducer).to.equal('function')
  })

  it('returns initial state', () => {
    expect(typeof reducer({}, {})).to.equal('object')
  })

})
