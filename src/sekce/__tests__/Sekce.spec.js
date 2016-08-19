/** Created by hhj on 8/19/16. */
/* eslint-disable no-unused-expressions, no-unused-vars, import/no-extraneous-dependencies */
import { expect } from 'chai'
import React from 'react'
import sd from 'skin-deep'
import Connected, { Sekce } from '../Sekce'
import createStore from '../../configureStore'
import { InitialState } from '../reducer'

describe('Sekce component', () => {
  const shallowRender = (props) => sd.shallowRender(React.createElement(Sekce, props))

  it('renders with default props', () => {
    const tree = shallowRender()
    expect(tree.type).to.equal('div')
  })


  describe('Sekce wrapper (connected) component', () => {
    const initialState = { sekce: new InitialState() }
    const reducer = state => state
    const store = createStore(initialState, reducer)
    const shallowRender = (props) => sd.shallowRender(React.createElement(Connected, { ...props, store }))

    it('connects initial redux state to props', () => {
      const tree = shallowRender()
      expect(tree.props.hodnota).to.equal(initialState.sekce.hodnota)
    })

    it('connects actions to props', () => {
      const tree = shallowRender()
      expect(typeof tree.props.increment).to.equal('function')
    })

  })

})
