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




var portName = 'COM8'; 

var myPort = new SerialPort(portName, { 
   baudRate: 115200,
   // look for return and newline at the end of each data packet:
   parser: serialport.parsers.readline("\r\n")
 }); 

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}

function saveLatestData(data) {



    console.log(data);
    console.log(typeof(data));



    if(data == 'end game'){
        console.log('received end request');
        socket.emit('game ended', 'end the game');
    }
   socket.emit('news', data);


}

function showPortClose() {
   console.log('port closed.');
}

function showError(error) {
   console.log('Serial port error: ' + error);
}



myPort.on('open', showPortOpen);  
// myPort.on('data', saveLatestData); 
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

// app.get("*", function(req,res){
//     res.redirect("/");
// });


// Start the server

var port = process.env.PORT || 3000; 

server.listen(port);
console.log('Express started on port ' + port); 





// function checkPinStatus(current_state_1, prevState, padNumber, socket){

//     if( current_state_1 > 100){
//             console.log(prevState);
//             if (prevState === false){
//                 console.log("Pin has been Pressed");
//                 // console.log(current_state_1);
//                 console.log(prevState);
//                 socket.emit('padPressed',padNumber)
//                 prevState = true;
//             }
//         }
//     else{
//         prevState = false;
//     }
// }


// prev_state_pin_1 = 0;
// prev_state_pin_2 = 0;





io.on('connection', function (socket) {
    socket.emit('news','handshake is done');
    // console.log("shake news sent");
    prevState1 = false;
    prevState2 = false;

    
    myPort.on('data', function(data){

        console.log(data);

        temp_list = data.split("\n");
        console.log(temp_list);

        // temp_list[0]

        if(data == "Begin"){
            console.log("Received start request");
        }

        if (data == "padA"){
            socket.emit('padPressed',"padA")
        }

        if (data == 'padB'){
            socket.emit('padPressed',"padB")
        }

        




    }); 

  
  socket.on('padPressed', function (data) {
    // myPort.write("start\n",function(err, results){
    //     // console.log("results: "+results)
    //     // console.log('Error: '+err);
    // });
    console.log('received request from client');
    console.log(data);
  });
});




;









