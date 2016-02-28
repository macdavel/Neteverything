/****************************************
Example Sound Level Sketch for the 
Adafruit Microphone Amplifier
****************************************/
 
const int sampleWindow = 50; // Sample window width in mS (50 mS = 20Hz)
unsigned int sample;
bool lastRecordingState = false;
unsigned long secondsActive = 0;
unsigned long StartrecordingTime = 0;


char server[] = "192.168.1.198";
String value;
















 
#include <SPI.h>
#include <Ethernet.h>

// Enter a MAC address and IP address for your controller below.
// The IP address will be dependent on your local network:
byte mac[] = {
  0x90, 0xA2, 0xDA, 0x10, 0x2B, 0x27
};
IPAddress ip(192, 168, 1, 200);

// Initialize the Ethernet server library
// with the IP address and port you want to use
// (port 80 is default for HTTP):
//EthernetServer server(8081);

EthernetClient client;



unsigned long lastConnectionTime = 0;             // last time you connected to the server, in milliseconds
const unsigned long postingInterval = 10L * 1000L;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);

//  // start the Ethernet connection and the server:
  if (Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");
    // no point in carrying on, so do nothing forevermore:
    for(;;)
      ;
  }
//  Ethernet.begin(mac, ip);
//  server.begin(); // start the server

  // print out some info to the serial monitor
  Serial.print("My client IP is at ");
  Serial.println(Ethernet.localIP());
}


void loop() {
  // listen for incoming clients
  if (client.available()) {
    value = "";
    char c = client.read();
    Serial.write(c);
  }

  if (millis() - lastConnectionTime > postingInterval) {
    httpRequest();
  }
  updateSecondsActive();
}












double checkMicLevel(){


   unsigned long startMillis= millis();  // Start of sample window
   unsigned int peakToPeak = 0;   // peak-to-peak level
 
   unsigned int signalMax = 0;
   unsigned int signalMin = 1024;
 
   // collect data for 50 mS
   while (millis() - startMillis < sampleWindow)
   {
      sample = analogRead(0);
      if (sample < 1024)  // toss out spurious readings
      {
         if (sample > signalMax)
         {
            signalMax = sample;  // save just the max levels
         }
         else if (sample < signalMin)
         {
            signalMin = sample;  // save just the min levels
         }
      }
   }
   peakToPeak = signalMax - signalMin;  // max - min = peak-peak amplitude
   double volts = (peakToPeak * 3.3) / 1024;  // convert to volts
   return volts;
  }




void updateSecondsActive(){
  double micLevel = checkMicLevel();

//  Serial.println(micLevel);
  
  
  if(micLevel > 0.20 ){
      if (lastRecordingState == false){
          StartrecordingTime = millis();
          lastRecordingState = true;
        }
    }
   else if( micLevel <= 0.20 ){
        if(lastRecordingState == true){
            lastRecordingState = false;
            secondsActive += millis()-StartrecordingTime; 
          }
    } 

   Serial.println(secondsActive);

  
  }


 void httpRequest() {
  // close any connection before send a new request.
    client.stop();

  // if there's a successful connection:
  if (client.connect(server, 3000)) {
    Serial.println("connected.... ");
    // send the HTTP GET request:
    client.println("POST / HTTP/1.1"); 
    client.println("Host: 192.168.1.198"); // SERVER ADDRESS HERE TOO
    client.println("Content-Type: application/JSON charset=UTF-8"); 
    client.print("Content-Length: "); 
    client.println(secondsActive.length); 
    //client.print("data: "); 
    client.println(secondsActive); 
    client.println()

    // note the time that the connection was made:
    lastConnectionTime = millis();
  } else {
    // if you couldn't make a connection:
    Serial.println("connection failed");
    lastConnectionTime = millis();
  }
}






