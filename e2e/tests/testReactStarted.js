/** Created by hhj on 8/24/16. */
export default {
  'React started': (client) => {
    const reactApp = client.page.reactApp()
    reactApp
      .navigate()
      .waitForElementVisible('@reactView')

    // reactApp.getText('@reactView', (result) => {
    //   console.log(result.value);
    // });

    reactApp.expect.element('@reactView').text.to.contain('men went to mow')

    // client.end()
  }
}
