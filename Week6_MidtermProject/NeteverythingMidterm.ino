#include <Servo.h>
#include <SPI.h>
#include <Adafruit_PN532.h>

#define PN532_SCK (2)
#define PN532_MOSI (3)
#define PN532_SS (4)
#define PN532_MISO (5)


Adafruit_PN532 nfc(PN532_SCK, PN532_MISO, PN532_MOSI, PN532_SS);

long lastID = 0;
long AdleyID = 2218912319;
long MacID = 2480740761;


Servo servolock;

Servo screamServo;





//variables for updatin the state of the ciruit based on serial input
int ledState = HIGH;
String inputString = "";         // a string to hold incoming data
boolean stringComplete = false;  // whether the string is complete
bool circuitState = true;





//micsketch variables used for activating emergency kit

const int sampleWindow = 50; // Sample window width in mS (50 mS = 20Hz)
unsigned int sample;
bool lastRecordingState = false;
unsigned long secondsActive = 0;
unsigned long StartrecordingTime = 0;



//emergencybox variables
bool emergencyActivated = false;











void setup() {
  // initialize serial:
  Serial.begin(9600);
  // reserve 200 bytes for the inputString:
  inputString.reserve(200);



  //Servo setup
  servolock.attach(9); //attach servo
  servolock.write(90); //set servo position to lock

  screamServo.attach(10);
  screamServo.write(0);


  //configure nfc board


  nfc.begin(); //start reader
  uint32_t versiondata = nfc.getFirmwareVersion();
  if(! versiondata){
    Serial.print("PN53x board not found.");
    while(1);
  }
  nfc.SAMConfig();
  Serial.println("Board is Ready");
  
}

void loop() {
  // Check What the input command from the serial port
  double micLevel = checkMicLevel();
  Serial.println(micLevel);
  checkCircuitState();
  
  if(micLevel > 0.4){
      screamServo.write(120);
      servolock.write(90);
  }
  
  if(circuitState == true){
      checkCardID();
    }
  

}




void checkCircuitState(){
  if (stringComplete) {
    if (inputString == "on\n"){
         circuitState = true;
         ledState =HIGH;
      }
     else if(inputString == "off\n"){
        circuitState = false; 
        ledState =LOW;
      }
    // clear the string:
    inputString = "";
    stringComplete = false;
  }

}









void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
    // add it to the inputString:
    inputString += inChar;
    // if the incoming character is a newline, set a flag
    // so the main loop can do something about it:
    if (inChar == '\n') {
      stringComplete = true;
    }
  }
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




void checkCardID(){
  int thisID; //ID being read
  int success; //successful reading
  uint8_t uid[] = {0,0,0,0,0,0,0}; //buffer to store returned UID
  uint8_t uidLength; //length of UID
  success = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, uid, &uidLength);

  if(success){
    if(uidLength == 4){
      unsigned long cardid = uid[0];
      cardid <<= 8;
      cardid |= uid[1];
      cardid <<= 8;
      cardid |= uid[2];
      cardid <<= 8;
      cardid |= uid[3];            
      thisID = cardid;     
      
      
    if(thisID != lastID){

      if(thisID == AdleyID||MacID){
          Serial.println("Unlocking Device");
          servolock.write(180); //unlock
          screamServo.write(0);
      }

      
//      servolock.write(90); //relock
    }

    lastID = thisID;
    }
  }
}




