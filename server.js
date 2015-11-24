var http = require('http');
var app = require('./server/express')();

http.createServer(app).listen(process.env.PORT, process.env.IP, function() {
	console.log('Server On!');
});
