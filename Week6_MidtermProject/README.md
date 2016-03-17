#Midterm Project Update:

##Working with sound and the Arduino. 

I began the midterm project with the plan of incorporating some audio into the project. Our idea was to wire the arduino to an MP3 shield and a microphone, record audio and transmit the audio to the server as an attempt to "spy" on people working in the IM lab. Unfortunately the process of using the MP3 shield for recording is not very well documented hence I was unable to get any recording on the SD card in the Adafruit MP3 Shield. 

As a result, my lab partner, Adley and I begun thinking of other ways of incorporating audio into our project. We both love the movie Monster's Inc and we thought it would be cool to "power" our circuit with screams. We thus turned our spy box into a scream box! 

We have a node server connected to clients via sockets and adding seconds (read "power") to our circuit every time the mic level of the client browser exceeds a certain threshold. When the seconds run out, the server communicates with the Ethernet Shield and shuts down the circuit.

###Possible Applications:

One possible application for the system we have built could be to incorporate it in a connected medicine cabinet. In cases of emergencies where the parents are not home, parents could remotely open a medicine cabinet for the babysitter to administer required medication and then lock it back when the babysitter was done. In so doing, parents restrict access to medicine which could be dangerous for kids while making it easily accessible in times of need.

###Challenges in Developing the Circuit

The structure of the application is relatively simple. We are running 2 arduinos primarily because of the hardware we have to wire as well as the memory requirements of the libraries we are using in the arduino scripts. Our main line of communication with the arduinos is through the ethernet shield. The shield connects to the a SocketIO server and relays its on/off commands to the second arduino via digitalPins.

###Working with Sockets on the Arduino

Bill Roy wrote a [Socket.IO library](https://github.com/billroy/socket.io-arduino-client) that allows the Arduino to communicate with SOcket.IO servers. I used a version of Bill Roy's library by [Washo4ever](http://github.com/washo4evr/Socket.io-v1.x-Library). Washo4ver's version allows communication with socket.IO's latest version [1.X] while Bill Roy's library is built for Socket.IO versions below 1.0. 

Washo4eva's library incorrectly implemented some of the methods of the original library. Hence, I took the liberty to modify the Source code. My version of the Socket.IO library [can be found here](https://github.com/macdavel/ArduinoSocketIO). In particular, the library forgot to instantiate the SetDataArriveDelegate method which allows you to develop custom functions to process the raw data from the socket connection. Tinkering with the library gave me greater insight into the architecture of socket connections. It is fascinating and I hope to push my changes to the main library so hopefully other people can benefit from my contribution. 

