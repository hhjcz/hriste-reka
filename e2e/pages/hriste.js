/** Created by hhj on 8/25/16. */

export default {
  url() {
    return `${this.api.launchUrl}/hriste`
  },
  elements: {
    counter: { selector: '#counter' },
    incrementButton: { selector: 'button#increment' },
    decrementButton: { selector: 'button#decrement' },
    stopButton: { selector: 'button#stop' },
    startButton: { selector: 'button#start' },
  },
  commands: [{
    stopCounter() {
      this.waitForElementVisible('@stopButton', 3000)
        .click('@stopButton')
        .waitForElementVisible('@startButton')
      return this
    },
    startCounter() {
      this.waitForElementVisible('@startButton', 3000)
        .click('@startButton')
        .waitForElementVisible('@stopButton')
      return this
    },
    incrementCounter() {
      this.waitForElementVisible('@incrementButton', 3000)
        .click('@incrementButton')
      return this
    },
    decrementCounter() {
      this.waitForElementVisible('@decrementButton', 3000)
        .click('@decrementButton')
      return this
    },
  }]
}
