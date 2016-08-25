/** Created by hhj on 8/25/16. */
export default {
  'counter buttons': (client) => {
    const hristePage = client.page.hriste()
    hristePage.navigate()
      .stopCounter()
      .startCounter()
      .stopCounter()

    hristePage.getText('@counter', result => {
      const expected = `${parseInt(result.value) + 3}`
      hristePage.incrementCounter()
      hristePage.incrementCounter()
      hristePage.incrementCounter()
      hristePage.expect.element('@counter').to.contain.text(expected)
    })

    client.end()
  }
}
