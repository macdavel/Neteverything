#Midterm Project Update:

Working with sound and the Arduino. 

I began the midterm project with the plan of incorporating some audio into the project. Our idea was to wire the arduino to an MP3 shield and a microphone, record audio and transmit the audio to the server as an attempt to "spy" on people working in the IM lab. Unfortunately the process of using the MP3 shield for recording is not very well documented hence I was unable to get any recording on the SD card in the Adafruit MP3 Shield. 

As a result, my lab partner, Adley and I begun thinking of other ways of incorporating audio into our project. We both love the moive Monster's Inc and we thought it would be cool to "power" our circuit with screams. We thus turned our spy box into a scream box! 

We have a node server connected to clients via sockets and adding seconds (read "power") to our circuit everytime the mic level of the client browser exceeds a certain shreshold.

