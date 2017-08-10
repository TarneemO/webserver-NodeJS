//in appRoute, we used manual way to set up server and deal with HTTP method
//this is to create http server using express (build in node core):
var express = require('express');
var app = express();
//process.env.(variable name) this is called environment variable
var port = process.env.PORT || 3000
//so var port will either equal to environment variable or defult 3000 of local port.

//using middleware to load any file  in public folder
app.use('/assets', express.static(__dirname + '/public'));

//using ejs module for template use
app.set('view engine', 'ejs'); //view engine will look at views folder, 'ejs' is the file type (.ejs)
app.use('/',(req, res, next)=>{
	console.log('Request URL:' +req.url);
	next(); //after request come, then it will run middleware in cli to show url you access in browser
});


//to response to http method type get mapping to specific url
//loading style.css from public folder using /assets
app.get('/', (req, res) =>{
//instead of sending the html here, we will user render (as we have app.use(ejs), it is similar ot hbs)
//res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>Hello world!</h1></body></html>');
res.render('index'); //filename inside views folder 
});

//app to set JSON data
app.get('/api', (req,res) =>{
	res.json({
    firstname: 'John',
    lastname: 'Doe'
	});
});

//app for /person
app.get('/person/:id', (req, res)=>{
//instead of res.send() we will use res.render
//res.send('<html><head><body><h1>person:' + req.params.id+' </h1></body></head></html>');
//params is to get parameter or value from browser (we type /person/20645942 on browse to get Person:20645942 in the page)
res.render('person',{ID: req.params.id});//ID in person.ejs
});

//example of RESTful API (save and delete to database):
//app.post('/api/person', jsonParser, function(req, res){
	//save to database
//});
app.delete('/api/person/:id', function(req, res){
	//delete from that data base
});


//setting port to our server
app.listen(port);
console.log('App running on port 3000');