var http = require('http');
var app = require('./server/express')();

http.createServer(app).listen(3000, 'localhost', function() {
	console.log('Server On!');
});