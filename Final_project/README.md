#Network Everthing Final project


##Sounds of Sir Bani Yas. 

This project is a continoution of a project I worked on last summer (http://mdk353.imnyuad.com/sir_bani/) I created a virtual experience of Sirb Bani Yas Island. The sounds were a part of  ‘Professor Carlos Guedes's "Designing Sound for Scene and Screen" class which traveled to Sir Bani Yas Island which is best known as the UAE's largest wildlife preserve.The trip was part of a location recording exercise where the class managed to record number of free roaming animals and birds at different locations across the 87 km2 (34 sq mi) island with the help of biologist Bilal Kabeer.

For my final Network Everthing Class, I want to take the sights and sounds of Sir Bani Yas and create an interactive experience that provides a sneak peak into the wonders of the reserve. The idea of the project is to center the piece around the idea of exploration. I want people to explore and “Move around” in this virtual space.

##The User Story:

The user will walk to a display containing embedded NFC tags. The display will have a simple animation of Sir Bani Yas island playing.  The user will then be presented with 2 “Cups”  - one containing the NFC tag reader (hence forth referred to as reader-cup ) and the other containing a bluetooth speaker (speaker-cup) - tied together by string. The user places the speaker-cup next to their ear and tries to find the “hidden” NFC tags on the display. Once the user hovers over an NFC tag, they begin to hear sounds from that particular location.


##Building the Installation:
'''
- The Equipment Needed:
- Table
- RFID cards
- Pico Projector
- Speakers
- Arduino Bluetooth module
- Arduino
- Computer Running a Node Server
'''


##[Putting it all together](https://lh3.googleusercontent.com/wcZVFCg902OuJ6xat5NR_y98651oMhs62qnuJP9bbS-nP4I8nGr85LjNaycgPETDyWMyvGdkrYkcxG1pDch9nxmfmvClIXMSvhX4ybE2U0MuOtBNC3gWGFd8987JQzlCFQz6wgEgpoFl0s-miFBYX6_UvZOn0H3N49AHbg99qzM_Scqq0hQsoM5jkVGNPfEDmKCqsZ-IY8A5LsHe_uDkjGkmK9KVoSBHBghEaDeFNwyR8LHeBfMC1VAVc-lNROzMxqHKMdixtpu7KdGcSfXM1iLk4xsBylLLGgUIexU3dZ4av9VJlAATk-8iVXu_zIvjhvl57nJV9JK-w-aSpBftmkUGt5EunR7QUFeFT94c7ElQceiQmUBJs_Nc8f5z3lRX_4jcpHQJFNnWcliAqFAKpLWiyL-ghGriNGTHJhKIZaI28KvgBrs25k8PD68gE0T0d-h1ChPANYLgbqszT-uqYmk1j4aRDhjQV6NO1q81rGtVKhFn4T3nXnSbcqvX8Y77hNMpqtIa5wFcuFgnLH53pln8H5IhHDTw9gJyBiurPHtuGTWO0ilk6BZF_p4WvMG8QKGmOuldp-mMDYJZvFizB668SnQk4X8=w890-h667-no): 
The installation will be primarily driven by a node server. The user interfac will be written in HTML and Javascript and communicate with the arduino using sockets.  
