var http = require('http');
var hostname = '127.0.0.1';
var port = 8080;
var obj = [{
		name: 'n1',
		value: 'v1'
	},{
		name: 'n2',
		value: 'v2'
	}];
http.createServer(function(req,res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(JSON.stringify(obj));
}).listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);