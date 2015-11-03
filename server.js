var http = require('http');
var app = require('./server/express')();

http.createServer(app).listen(process.env.IP, process.env.ADDRESS, function() {
	console.log('Server On!');
});
