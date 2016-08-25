/** Created by hhj on 8/19/16. */
import React, { PropTypes } from 'react'
import styles from './app.scss'
import Hriste from './hriste/Hriste'

export default class App extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props)
    this.state = { header: `${String.fromCharCode(0x2620)} kostra tě nůžkama... (${process.env.NODE_ENV})` }
  }

  render() {
    const { header } = this.state
    return (
      <div>
        <h1 className={styles.header}>
          {header}
        </h1>
        <section>
          <Hriste />
        </section>
      </div>
    )
  }
}
