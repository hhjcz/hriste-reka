/** Created by hhj on 8/24/16. */
require('babel-register')({})
const path = require('path')
const loadEnv = require('../server/loadEnv')

loadEnv(path.resolve('../env.json'))

module.exports = require('./nightwatch.saucelabs')
