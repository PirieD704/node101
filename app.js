var http = require('http');
// console.log(http);
// res stands for response and req stands for response,  these words can be used in place of the shorthand for parameters
var server = http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/html'})
	console.log("Server created!");
	// console.log(req);
	console.log("%%%%%%%%%%%%%%%%%%%%%%%%");
	// console.log(res);

	setTimeout(function(){
		console.log('world');
	}, 3000);
	console.log("Hello");

	res.end('<h1>Hello World</h1>');
})

server.listen(8000);