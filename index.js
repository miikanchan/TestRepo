// // import the http module
// var http = require('http');

// // handle sending requests and returning responses
// function handleRequests(req,res){
// 	//return string
// 	res.end('Hello World');
// }


// // create the server
// var server= http.createServer(handleRequests);

// // start server and listen an port x
// server.listen(8080,function() {
// 	console.log('Listening on port 8080');
// });


//////////////////// EXPRESSS /////////////

//require our dependencies
var express= require ('express');
var expressLayouts = require ('express-ejs-layouts');
var bodyParser= require ('body-parser');
var app = express ();
var port = 8080;

//use ejs and express Layouts
app.set('view engine', 'ejs');
app.use (expressLayouts);


//use body parser
app.use(bodyParser.urlencoded());


//route out app
var router =require ('./app/routes');
app.use('/', router);




//set static files (csss and images, etc) Location
app.use (express.static(__dirname + '/public'));

//start server
app.listen(port, function(){
	console.log ('app started');

});
