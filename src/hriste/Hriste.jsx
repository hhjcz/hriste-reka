/** Created by hhj on 8/19/16. */
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'

export class Hriste extends React.Component {
  static propTypes = {
    hodnota: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    assertReactWarnings: PropTypes.bool.isRequired,
  };

  static defaultProps = {};

  state = { timer: null }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer = () => this.setState({ timer: setInterval(this.props.increment, 500) })

  stopTimer = () => this.setState({ timer: clearInterval(this.state.timer) })

  render() {
    const { hodnota, increment, decrement } = this.props
    return (
      <div style={{ padding: '2em' }}>
        <span id="counter"> {hodnota} </span>
        <span>men went to mow...</span>
        <button id="increment" onClick={increment}>+</button>
        {
          this.state.timer ? (
            <button id="stop" onClick={this.stopTimer}>{String.fromCharCode(9612) + String.fromCharCode(9612)}</button>
          ) : (
            <button id="start" onClick={this.startTimer}>{String.fromCharCode(0x25b6)}</button>
          )
        }
        <button id="decrement" onClick={decrement}>-</button>
        <div>
          <img alt="50x50 placeholder" src={require('./50x50.png')} />
        </div>
      </div>
    )
  }
}

export default connect(
  state => state.hriste.toObject(),
  dispatch => bindActionCreators(actions, dispatch)
)(Hriste)
