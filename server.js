/** Created by hhj on 8/18/16. */
// require('babel-register')({})
var express = require('express')

var app = express()

app.use('/', express.static(__dirname + '/public'))
app.use('/', express.static(__dirname + '/dist'))

app.listen(8080, function() {
  console.log('Server running on port 8080')
})