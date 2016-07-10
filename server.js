var http = require('http');
var app = require('./app');
var db = require('./db');

http.createServer(app).listen(3000);