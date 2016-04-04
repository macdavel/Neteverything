#Weekly Network Everything Blog

##Image Links
- :100:[Rube Goldberg Device](https://lh3.googleusercontent.com/JCvsXHVanM8Ius7SR_Ttw_adwMBDN_zhpbr2uyeRLav4DWO-dCJ4IiSkDH1sC0kGjzhOBsTSUAAXJhix-xPd9C7pcBBhpB2zOCH9DjcWc7dfH22WNOhgqWPOPjoO7ygvHVLuHKgrxjr6KB655MdBYHtqqkBete9pGHfXECVO0Vv2i-Va30eYxAjMN0rKMHau9pkBeudQCw0XO1HE-DNF7OvjTv1bIzkeO22FSDnYu12-P5kGEMk8csNQruNSthyvTEvEzNVHujzHo1qQ21oD2Dv4TVS7nc7ZO_7E1mdZ3xrQC6f1UBLiihqgqca-oiawLpuUiMIK0h2xX2kJ8YyC1kv8k77Kxth45kwdtGlmBEpnoIuzXrY0j594X3M0Xr0uzci5-DyFb-VsPunrkhuNQjKd74ZLCRXe6UD2BNc2NNYnem_LCCuDSum5HhvNC4AH1FFjEgLNZINpqFzXm-dk6SBOtQAFCWQzGAfscsSLw8alJAOBgnzrpgd0uGwbQVaK_zUS02LIn-2nH-NNK34chANcFKH85lFA_ZZHxZuCv99sNXD0LbZcu99Ud0fmrRtF6H-M=w468-h623-no)
- :non-potable_water:[Water Supply Network](https://lh3.googleusercontent.com/j8GqUD--L2ISWOQN7BafhnUkENkk0MtbZcN8lSUkI95QAuBSwcecqEiCwIjdXr6fqpGbT-5If0Ik8_BLJ45NbPCXwvLcKerTwJAa4_sFcK2w_TZ8YpFTkOus5fzUvCWsKlIPBOnp01Ylhn1EXw4LWsWdxSnBO8Lode5QNFS_cJ5rDnP68KsH7r4L-8iSr3r88GwGyiO5725aQOV_PkEJ4qo_KU0n7ohptsQnBE2Yh4RWaZ7hH_KQ0jHJDFg6Gxun9xplNdS-JHG6DShgs8FvZXHopPsSBtuVp8QlOrKbs4rDdNHrnjmbYf3cGLpf361vRGo9lsWR0Ub_XzW36ZllITaqErGW26cbZOPGmoPzYZqygUIQfHJYD1fA30WT9ihgI4JEFs4ME-eQpjXImY1SH_gHeqh9mWAAX99yhRM8V4Er1cmjLqTJoqCxN66Q_5ucQ80ECl_DyF3dIhEhlf_CTZWehlmEBpP3p--L5uXlqnVQmVkyAGmJRVJIj6EpJOolCyP81lr8sIC5pHCG7YbY_uee3GuQttna1D55Usi9wZBbS1Ys6zREjspVJd9EUW1zhlb8=w468-h623-no)

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