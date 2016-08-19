/** Created by hhj on 8/18/16. */
// require('babel-register')({})
var express = require('express')
var path = require('path')

// e.g. heroku.com sets env.PORT
var PORT = process.env.PORT || 8080

var app = express()

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, '/dist')))

app.listen(PORT, function() {
  console.log('Server running on port ' + PORT)
})
