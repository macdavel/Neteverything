var express = require('express');
var path = require('path');
var sys = require('sys');
var util = require('util');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var session = require ('express-session');
_ = require('underscore');
var Request = require('request');
var http = require('http');



var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);


var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var routes = require('./routes/index');
var users = require('./routes/users');




var portName = 'COM14'; 
var portOpened = false;

var myPort = new SerialPort(portName, { 
   baudRate: 9600,
   // look for return and newline at the end of each data packet:
   parser: serialport.parsers.readline("\r\n")
 }); 

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
   portOpened =true;
}


function showPortClose() {
   console.log('port closed.');
}

function showError(error) {
   console.log('Serial port error: ' + error);
}



myPort.on('open', showPortOpen);  
myPort.on('close', showPortClose);
myPort.on('error', showError);

































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




// Start the server

var port = process.env.PORT || 3000; 

server.listen(port);
console.log('Express started on port ' + port); 




myPort.on('data', function(data){
})



var donatedSeconds = 1000;





io.on('connection', function (socket) {
    socket.emit('news','handshake is done');
    // console.log("shake news sent");
    prevState1 = false;
    prevState2 = false;

  var countDown = setInterval(function() {

    if(portOpened){
      if(donatedSeconds >0){
        donatedSeconds--;
        myPort.write('on\n');
      }
      else if(donatedSeconds == 0){
        myPort.write('off\n');
      }

    }


    socket.emit('updateSeconds', donatedSeconds);

  },1000);

  
  socket.on('addMoreSeconds', function (data) {

    donatedSeconds += int(data);
    console.log("adding More seconds: "+ data);
    if (portOpened){

    }
  });



});













