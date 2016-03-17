#include "SocketIOClient.h"
#include "Ethernet.h"
#include "SPI.h"

SocketIOClient client;


byte mac[] = { 0x90, 0xA2, 0xDA, 0x10, 0x2B, 0x27 };
char hostname[] = "10.225.91.49";
int port = 3000;

extern String RID;    //socket ID/ message channel
extern String Rname;  
extern String Rcontent; //socket content


int communicationPin = 8;





void ondata(SocketIOClient client, String data)
{
    Serial.println("Recieved Data");
    evaluateString(data);
}





void setup() {
  pinMode(10, OUTPUT);    //for some ethernet shield on the mega : disables the SD and enables the W5100
  digitalWrite(10, LOW);
  pinMode(4, OUTPUT);
  digitalWrite(4, HIGH);
  Serial.begin(9600);

  Serial.println("Ethernet Arduino Here");

  Ethernet.begin(mac);

  
  pinMode(communicationPin,OUTPUT); //pin used for communication with arduino 2

  client.setDataArrivedDelegate(ondata);



  //Connecting to SocketIO Server
    
  if (!client.connect(hostname, port))
    Serial.println(F("Not connected."));
  if (client.connected())
  {
    client.send("connection", "message", "Connected !!!!");
  }
  else
  {
    Serial.println("Connection Error");
    while(1);
  }
  delay(1000);
  
}

void loop()
{
  client.monitor();

}




void evaluateString(String rcvdmsg){
  
  RID = rcvdmsg.substring(4, rcvdmsg.indexOf("\","));
  Rname = rcvdmsg.substring(rcvdmsg.indexOf("\",") + 4, rcvdmsg.indexOf("\":"));
  Rcontent = rcvdmsg.substring(rcvdmsg.indexOf("\":") + 3, rcvdmsg.indexOf("\"}"));

  String string = processString(Rcontent);

  

  
    
 if (RID == "Switch")
    {
      if(string.indexOf("on")> -1 ){     
      Serial.println("switched circuit on");
      digitalWrite(communicationPin, HIGH);
      }
     else if(string.indexOf("off")>-1){
        Serial.println("Switched Circuit off!");
        digitalWrite(communicationPin, LOW);
      }
     
    }
  
 }


//helper function to evaluateString 

String processString(String rawString){
  
    String temp = rawString.substring(rawString.indexOf(',')+1);
    String finalVar = temp.substring(0,temp.indexOf(']'));
    Serial.println(finalVar);
    finalVar.trim();
    return finalVar;
  }
