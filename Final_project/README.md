#Network Everthing Final project


##Sounds of Sir Bani Yas. 

This project is a continoution of a project I worked on last summer (http://mdk353.imnyuad.com/sir_bani/) I created a virtual experience of Sirb Bani Yas Island. The sounds were a part of  ‘Professor Carlos Guedes's "Designing Sound for Scene and Screen" class which traveled to Sir Bani Yas Island which is best known as the UAE's largest wildlife preserve.The trip was part of a location recording exercise where the class managed to record number of free roaming animals and birds at different locations across the 87 km2 (34 sq mi) island with the help of biologist Bilal Kabeer.

For my final Network Everthing Class, I want to take the sights and sounds of Sir Bani Yas and create an interactive experience that provides a sneak peak into the wonders of the reserve. The idea of the project is to center the piece around the idea of exploration. I want people to explore and “Move around” in this virtual space.

##The User Story:

[Photo of Physical Box]() 

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
The installation will be primarily driven by a node server. The user interface will be written in HTML and Javascript and communicate with the arduino using sockets. Node will communicate serially with a bluetooth enabled arduino board which is connected to an RFID reader


##Thoughts on Building the Physical Interface

For most of my 2 year experience with interactive media, my curiousity to build came from a desire for all things coding. I approached it in the same way I had earlier approached my high school physics classes - brute focus on whether I could. Whether I could use a certain API or whether I could make arduino work with web sockets. It was algorithmic thinking - breaking down each task into smaller components, solving them and forcing them back together.
 I never stopped to ask whether I should or how I should go about designing an interaction. Interaction meant a working prototype. It was a series of actions dictated mostly by the technology I worked with. If a framework needed a click, I included a click, if it needed a switch I included one without much thought as to how that made a user think, feel and react. The code was the product. An engineering feat meant to inflate my beginner coder's ego. Through this method, I gained a deep understanding of technology. I can for the most part explain node and sockets and express and web frameworks. What I cannot explain is how to use them. They are tools, a brush in a painter's hand. Interaction, the painting. It takes discipline to move away from the technology and think through the interaction. To begin to understand how you want the user to feel and to experience an idea. The process becomes less about the technology and more about the message, the idea.
