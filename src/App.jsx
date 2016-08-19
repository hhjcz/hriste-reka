/** Created by hhj on 8/19/16. */
import React, { PropTypes } from 'react'

export default class App extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props)
    this.state = { header: 'Kostra tě nůžkama' }
  }

  render() {
    const { header } = this.state
    return (
      <h1>
        {header}
      </h1>
    )
  }
}