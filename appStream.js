//in this code, we are going to use creatReadStream().pipe(); 
//to work with high request on ower website 
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	 fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
		
}).listen(3000, '127.0.0.1');
//{message} will appear in wbesite as we are not using html.replace() as in app.js