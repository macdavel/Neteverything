var express = require('express');
var path = require('path');
var util = require('util');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var session = require ('express-session');
// _ = require('underscore');
var Request = require('request');
var http = require('http');



var serialport = require("serialport");
var SerialPort = serialport.SerialPort;




var portName = 'COM5'; 

var myPort = new SerialPort(portName, { 
   baudRate: 115200,
   // look for return and newline at the end of each data packet:
   parser: serialport.parsers.readline("\r\n")
 }); 

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}





myPort.on('open', showPortOpen);  
// myPort.on('data', saveLatestData); 
// myPort.on('close', showPortClose);
// myPort.on('error', showError);


var app = express();

//Uncomment to run sockets

var server = require('http').Server(app);
var io = require('socket.io')(server);



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
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));





//ROUTES
app.get("/", function(req, res){
    res.render('index.html');
});






//****************************************//

// app.get("*", function(req,res){
//     res.redirect("/");
// });


// Start the server

var port = process.env.PORT || 3000; 

server.listen(port);
console.log('Express started on port ' + port); 


// uncomment for IO Communication

var rfid_list =  ["73995853", "3677276793"]

io.on('connection', function (socket) {
    socket.emit('news','handshake is done');
    console.log("shake news sent");


    myPort.on('data', function(data){

        console.log(data);

        temp_list = data.split("\n");
        console.log(temp_list);

        for (var i = 0; i < rfid_list.length; i++) {
        	if (data.indexOf(rfid_list[i])>-1){
        		socket.emit("playsong", rfid_list[i])
        	}
        };

     })



});











