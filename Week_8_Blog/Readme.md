#Weekly Network Everything Blog

##Image Links
- :100:[Rube Goldberg Device]()
- :non-potable_water:[Water Supply Network]()

###Rube Goldberg Device



#Tools Needed 
```
- pulley
- string 
- weight
- light sensor
- wedge
- Wooden beam
- Stand 
- Arduino
- Ethernet/Wifi Shield
- Screen with Audio
- Scissors
```


The Rube Goldberg device starts with a piece of wood being knocked down. The wood holds a pendulum which will then swing to hit a bigger ball below it. The bigger ball will roll down onto a lever which will put pressure on a scissor hand and cut a string holding weight. The weight has foil underneath it and when it reaches the ground, it connects a circuit. The circuit is connected to an analog read on an arduino Ethernet. The arduino will send a play video message to a server which will play mchammers hammertime for 10 seconds. On completion the arduino will receive a byte and send out a digital write on one of its pins.


### Networks

Every network has two main components. Nodes and links between nodes. The nodes are the entry/exit points of information while the links allow information to travel through the network. I am particularly fascinated by the links between a water system and the internet network infrastructure. We can think of every tap in a building to be similar to wifi connected device in a building. The taps, showers and all outlets are in this case the local/ room level nodes. They are connected to each other by the piping in the room. Each room will have a control switch which can cut off water supply to the room in case of a pipe burst in the room. These are analogous to wifi routers in the internet world. If a router is switched off, all devices connected to that router become disconnected to the outside world. Back in our building scenario, it would be wise to have control switches on the floor level. That is, each floor has its own switch which can allow you to cut off water flow to a particular floor in a building. This is similar to a gateway in the internet world. Finally, the floor pipes are connected to a main pipe which flows out of the building connecting it to the city's water grid in much the same way an ISP connects a campus to the internet. In short, large networks are a collection of smaller networks. The taps and showers are the smallest network in our case. the rooms on a floor form the next network. This is then superseded by the floor network which is then superseded by a building network.  