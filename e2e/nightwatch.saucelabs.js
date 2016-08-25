export default {
  src_folders: ['tests'],
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: 'pages',
  globals_path: 'globals',
  selenium: { start_process: false, log_path: './reports', cli_args: {} },
  test_settings: {
    default: {
      launch_url: 'https://react-kostra.herokuapp.com',
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCELABS_USERNAME,
      access_key: process.env.SAUCELABS_ACCESS_KEY,
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    ie9: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9.0'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        platform: 'Linux'
      }
    },
    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        platform: 'OS X 10.11'
      }
    }
  }
}
