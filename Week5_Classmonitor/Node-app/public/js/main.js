

var buzzerSound;

var winnerSound;

$(document).ready(function(){
	var globalCorrectAnswer;
	var score = 0;
	var lives = 3;
	function getQuestion(){
	$.ajax({
		
		type: 'GET',
		url: "/API",
		dataType: 'jsonp',
		error: itFailed,
		success: itWorked
	});

	}


	(function poll() {
	    setTimeout(function() {
	        $.ajax({
	            url: "/API",
	            type: "GET",
	            success: itWorked,
	            dataType: "json",
	            complete: poll,
	            timeout: 2000
	        })
	    }, 5000);
	})()

	getQuestion();


	
	function itWorked(data){

		console.log("Worked!");
		console.log(data);
		var minutesActive = data.secondsActive/60000
		$('#noiseVar').replaceWith('<h1 id="noiseVar">'+String(minutesActive)+' minutes</h1>')

	}
	//An "error" or "fail" function
	function itFailed(data){
		console.log("Failed");
		console.log(data);
	}



})