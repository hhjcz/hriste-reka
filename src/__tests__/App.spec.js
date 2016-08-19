/** Created by hhj on 8/19/16. */
/* eslint-disable no-unused-expressions, no-unused-vars, import/no-extraneous-dependencies */
import { expect } from 'chai'
import React from 'react'
import sd from 'skin-deep'
import App from '../App'

describe('App component', () => {
  const shallowRender = (props) => sd.shallowRender(React.createElement(App, props))

  it('renders with default props', () => {
    const tree = shallowRender()
    expect(tree.type).to.equal('div')
  })

})
