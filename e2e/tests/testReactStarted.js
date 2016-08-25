/** Created by hhj on 8/24/16. */
export default {
  'React started': (client) => {
    const reactApp = client.page.reactApp()
    reactApp
      .navigate()
      .waitForElementVisible('@reactApp')

    // reactApp.getText('@reactView', (result) => {
    //   console.log(result.value);
    // });

    reactApp.expect.element('@reactApp').text.to.contain('kostra')

    client.end()
  }
}
