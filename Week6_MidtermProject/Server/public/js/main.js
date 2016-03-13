
var mic;
var measuringLevelLength = false
var startCount = 0
function setup(){
  mic = new p5.AudioIn();
  mic.start();
}


function draw(){
	console.log("I am drawing");
  micLevel = mic.getLevel();
  console.log(micLevel);
  if (micLevel > 0.1){
      console.log(micLevel);
  		startCount = millis();
  		measuringLevelLength = true		
  }

  if(measuringLevelLength == true && micLevel < 0.1){
  		var currTime = millis();
  		var length = currTime - startCount;
  		console.log("Your scream lasted for: "+length);
  		measuringLevelLength = false;
  		if(Math.floor(length)> 10){
  			socket.emit("addMoreSeconds",Math.floor(length));
  		}
  		

  }
 
}

var socket = io('http://localhost:3000');

socket.on('updateSeconds', function(seconds){
  string = 'Scream Seconds Left:'+String(seconds)+' Seconds'
  $('#secondsLeft').html(string);
})