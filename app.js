//to create server:
var http = require('http');
var fs = require('fs'); // to read index.html file
http.createServer(function (req, res){//create server with function has request and response
//building response consist of header and body :
res.writeHead(200,{'Content-Type': 'text/html'});// status, type  the header
var html = fs.readFileSync(__dirname + '/index.html', 'utf8');//reading file
var message = 'Hi there';
html = html.replace('{Message}', message); //to replace {message} in all html files with value above
res.end(html);// sending data
}).listen(3000, '127.0.0.1'); //assigning the port & address to this program
console.log('Server up port 3000');
