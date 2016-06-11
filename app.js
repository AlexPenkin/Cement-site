var app = require('express')();
var path = require("path");
var server = app.listen('8888','192.168.0.101', function (req, res) {
  console.log('Server on 8888');
});
app.use(require("express").static(path.join(__dirname, 'public')));
app.get('/', function (req, res, next) {
  res.send('./public/index.html')
})
