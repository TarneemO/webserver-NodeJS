//to create server:
var http = require('http');
var fs = require('fs'); // to read  file
http.createServer(function (req, res){//create server with function has request and response
//building response consist of header and body :
if(req.url == '/'){
	fs.createReadStream(__dirname + '/index.html').pipe(res);
}
else if(req.url === '/api'){

res.writeHead(200,{'Content-Type': 'application/json'});// status, type  of your page content
var obj ={
	firstname: 'John',
	lastname: 'Doe'
};
res.end(JSON.stringify(obj)); //converting object to string
}
//these two line for any other typed route: try /test and you will get HTTP404 error
else{
res.writeHead(404);
res.end();
}
}).listen(3000, '127.0.0.1'); //assigning the port & address to this program
console.log('Server up port 3000');
