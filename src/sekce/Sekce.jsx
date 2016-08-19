/** Created by hhj on 8/19/16. */
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'

export class Sekce extends React.Component {
  static propTypes = {
    hodnota: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    connect(this.props)
    const { hodnota, increment, decrement } = this.props
    return (
      <div>
        <span>A máme tu: {hodnota} </span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

export default connect(
  state => state.sekce.toObject(),
  dispatch => bindActionCreators(actions, dispatch)
)(Sekce)
