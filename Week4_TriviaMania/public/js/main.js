

var buzzerSound;

var winnerSound;


var music = ['94686925','26299470','162022719','151640044','141483353','154899511']

SC.initialize({
		  client_id: 'a93bdb6a3ee57264e5ce88a2edc34f27'
		});

SC.stream("/tracks/34497598", function(sound){
		  sound.play({
		    loops:3
		  });
});


SC.stream("/tracks/31771435", function(sound){
		  buzzerSound = sound;
});





SC.stream("/tracks/209602033", function(sound){
		  winnerSound = sound;
});







$(document).ready(function(){
	var globalCorrectAnswer;
	var score = 0;
	var lives = 3;
	function getQuestion(){
	$.ajax({
		
		type: 'GET',
		headers: {"X-Mashape-Key": "J0B4x1ly5LmshoPr9mClANzKhxFJp1GBiJ8jsnqTg6e0MaBP10"},
		beforeSend: function(xhr){
			xhr.setRequestHeader("X-Mashape-Key", "J0B4x1ly5LmshoPr9mClANzKhxFJp1GBiJ8jsnqTg6e0MaBP10");
		},
		url: "https://pareshchouhan-trivia-v1.p.mashape.com/v1/getRandomQuestion",
		dataType: 'json',
		error: itFailed,
		success: itWorked
	});

}

	getQuestion();


	$("#question-title").click(function(){
		getQuestion();

	})

	function itWorked(data){

		console.log("Worked!");
		console.log(data);
		console.log(data.q_text);
		$("#question-body").replaceWith('<div id = "question-body">'+data.q_text+'</div>');

		var correct_option = data.q_correct_option;
		var options_array = [1,2,3,4];
		var index = options_array.indexOf(correct_option);
		options_array.splice(index,1);
		var second_option = options_array[Math.floor(Math.random() * 3)] ;
		var correct_answer = data['q_options_'+correct_option];
		var second_answer = data['q_options_'+second_option];

		var randomiser = Math.floor(Math.random() * 2)

		if ( randomiser == 0){
			globalCorrectAnswer = "optionA";
			$("#a-text").replaceWith('<div class = "option-body" id = "a-text" val ="correct">'+correct_answer+'</div>')
			$("#b-text").replaceWith('<div class = "option-body" id = "b-text" val= "wrong">'+second_answer+'</div>')
		}
		else{
			globalCorrectAnswer = "optionB";
			$("#a-text").replaceWith('<div class = "option-body" id = "a-text" val="wrong" >'+second_answer+'</div>')
			$("#b-text").replaceWith('<div class = "option-body" id = "b-text" val="correct">'+correct_answer+'</div>')
		}

	}
	//An "error" or "fail" function
	function itFailed(data){
		console.log("Failed");
		console.log(data);
	}


	var socket = io('http://localhost:3000');

	socket.on('padPressed', function (data) {

  		if(data == 'padA'){
  			console.log("Pad A Pressed")
  			if(globalCorrectAnswer == "optionA"){
  				score += 10;
  				winnerSound.play();
  				$("#score").html("Score: "+String(score));
  				$("#lives-left").html("Lives Left: "+String(lives));
  				getQuestion();
  			}
  			else{
  				lives -= 1;
  				buzzerSound.play();
  				$("#lives-left").html("Lives Left: "+String(lives));
  				getQuestion();
  				if(lives <= 0){
  					console.log("Game Over");
  				}
  			}

  		}

  		else{
  			console.log("padB pressed");
  			if(globalCorrectAnswer == "optionB"){
  				score += 10;
  				winnerSound.play();
  				$("#score").html("Score: "+String(score));
  				$("#lives-left").html("Lives Left: "+String(lives));
  				getQuestion();

  			}
  			else{
  				lives -= 1;
  				buzzerSound.play();
  				$("#lives-left").html("Lives Left: "+String(lives));
  				getQuestion();
  				if(lives <= 0){
  					console.log("Game Over");
  				}
  			}

  		}



	})


})