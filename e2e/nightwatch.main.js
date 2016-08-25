const localDefaults = {
  launch_url: 'http://localhost:8080',
  selenium_port: 4444,
  selenium_host: 'localhost',
  silent: true,
  selenium: {
    start_process: true,
    server_path: '../node_modules/selenium-standalone/.selenium/selenium-server/2.53.1-server.jar',
    log_path: './reports',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': '../node_modules/selenium-standalone/.selenium/chromedriver/2.23.414361-x64-chromedriver'
    }
  }
}

const saucelabsDefaults = {
  launch_url: 'https://react-kostra.herokuapp.com',
  selenium_port: 80,
  selenium_host: 'ondemand.saucelabs.com',
  silent: true,
  username: process.env.SAUCELABS_USERNAME,
  access_key: process.env.SAUCELABS_ACCESS_KEY,
  selenium: {
    start_process: false,
    log_path: './reports',
  }
}

export default {
  src_folders: ['tests'],
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: 'pages',
  globals_path: 'globals',
  test_settings: {

    // running selenium locally:
    default: {
      ...localDefaults,
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: [],
          // binary: '/usr/bin/chrome'
        }
      }
    },
    heroku: {
      ...localDefaults, // rest inherited from 'default'
      launch_url: 'https://react-kostra.herokuapp.com',
    },

    // saucelabs.com cloud selenium:
    ie9: {
      ...saucelabsDefaults,
      desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9.0'
        // rest of desiredCapabalities inherited from 'default'
      }
    },
    chrome: {
      ...saucelabsDefaults,
      desiredCapabilities: {
        browserName: 'chrome',
        platform: 'Linux'
      }
    },
    safari: {
      ...saucelabsDefaults,
      desiredCapabilities: {
        browserName: 'safari',
        platform: 'OS X 10.11'
      }
    }
  }
}
