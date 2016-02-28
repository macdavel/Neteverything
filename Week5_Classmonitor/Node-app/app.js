var express = require('express');
var path = require('path');
var sys = require('sys');
var util = require('util');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require ('express-session');
var http = require('http');
var nunjucks = require('nunjucks')



var app = express();

var server = require('http').Server(app);


var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var routes = require('./routes/index');
var users = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.use(cookieParser());
app.use(session({secret: 'sessionSecret', cookie: { maxAge: 100000 }, resave: true, saveUninitialized: true}));

// // uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));







//ROUTES
app.get("/", function(req, res){
    res.render('index.html');
});

app.post('/', function (req, res) {
  console.log(req.headers);
  console.log(req.body);
  // res.send('POST request to the homepage');
});


//****************************************//

// app.get("*", function(req,res){
//     res.redirect("/");
// });


// Start the server

var port = process.env.PORT || 3000; 

server.listen(port);
console.log('Express started on port ' + port); 




