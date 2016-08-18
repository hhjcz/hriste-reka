/** Created by hhj on 8/18/16. */
import { expect } from 'chai'
import { hello } from '../index'

describe('index hello()', () => {
  it('should greet us', () => {
    expect(hello('world')).to.equal('Hello world')
  })
})
