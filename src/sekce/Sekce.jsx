/** Created by hhj on 8/19/16. */
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'

export class Sekce extends React.Component {
  static propTypes = {
    hodnota: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    assertReactWarnings: PropTypes.bool.isRequired,
  };

  static defaultProps = {};

  componentDidMount() {
    this.timer = setInterval(this.props.increment, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    connect(this.props)
    const { hodnota, increment, decrement } = this.props
    return (
      <div>
        <span>A máme tu</span>
        <span> {hodnota} </span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <div>
          <img alt="50x50 placeholder" src={require('./50x50.png')} />
        </div>
      </div>
    )
  }
}

export default connect(
  state => state.sekce.toObject(),
  dispatch => bindActionCreators(actions, dispatch)
)(Sekce)
