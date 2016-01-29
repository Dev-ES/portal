var http = require('http');
var app = require('./server/express')();

http.createServer(app).listen(process.env.PORT || 3000, process.env.IP || 'localhost', function() {
	console.log('Server On!');
});
