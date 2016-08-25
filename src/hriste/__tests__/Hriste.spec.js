/** Created by hhj on 8/19/16. */
/* eslint-disable no-unused-expressions, no-unused-vars, import/no-extraneous-dependencies */
import { expect } from 'chai'
import sinon from 'sinon'
import React from 'react'
import sd from 'skin-deep'
import Connected, { Hriste } from '../Hriste'
import createStore from '../../configureStore'
import { InitialState } from '../reducer'

describe('Hriste component', () => {
  describe('inner component', () => {
    const shallowRender = (props) => sd.shallowRender(React.createElement(Hriste, props))

    it('renders with default props', () => {
      const tree = shallowRender()
      expect(tree.type).to.equal('div')
    })

    it('calls increment on button click', () => {
      const spyClick = sinon.spy()
      const tree = shallowRender({ increment: spyClick })
      const button = tree.subTree('button')
      button.props.onClick()
      expect(spyClick).to.have.been.calledOnce
    })
  })

  describe('wrapper (connected) component', () => {
    const initialState = { hriste: new InitialState() }
    const reducer = state => state
    const store = createStore(initialState, reducer)
    const shallowRender = (props) => sd.shallowRender(React.createElement(Connected, { ...props, store }))

    it('connects initial redux state to props', () => {
      const tree = shallowRender()
      expect(tree.props.hodnota).to.equal(initialState.hriste.hodnota)
    })

    it('connects actions to props', () => {
      const tree = shallowRender()
      expect(typeof tree.props.increment).to.equal('function')
    })
  })
})
