
#include <LiquidCrystal_I2C.h>

// Pin definitions
const int moisturePin = A5;     // Analog pin for soil moisture sensor
const int motorPin = 7;         // Digital pin for motor control
const int redLedPin = 8;        // Digital pin for red LED
const int greenLedPin = 9;      // Digital pin for green LED
const int threshold = 500;      // Adjust this value based on your soil sensor's readings

// Initialize the LCD (set the pins for your LCD)

LiquidCrystal_I2C lcd(0x27, 16, 2);
void setup() {
  // LCD setup
  lcd.begin(16, 2);
  lcd.backlight(); 
  lcd.print("Soil Moisture:");

  // Motor and LED setup
  pinMode(motorPin, OUTPUT);
  pinMode(redLedPin, OUTPUT);
  pinMode(greenLedPin, OUTPUT);
  digitalWrite(motorPin, LOW);     // Start with motor off
  digitalWrite(redLedPin, LOW);    // Start with red LED off
  digitalWrite(greenLedPin, LOW);  // Start with green LED off

  // Serial monitor for debugging
  Serial.begin(9600);
}

void loop() {
  int moistureValue = analogRead(moisturePin); // Read soil moisture level
  Serial.print("Moisture Level: ");
  Serial.println(moistureValue);

  // Check if soil is dry or wet
  if (moistureValue > threshold) {
    // Soil is dry
    digitalWrite(motorPin, HIGH);      // Turn on motor
    digitalWrite(greenLedPin, HIGH);   // Turn on green LED
    digitalWrite(redLedPin, LOW);      // Turn off red LED
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Water Level Low");
    lcd.setCursor(0, 1);
    lcd.print("Watering...");
  } else {
    // Soil is wet
    digitalWrite(motorPin, LOW);       // Turn off motor
    digitalWrite(greenLedPin, LOW);    // Turn off green LED
    digitalWrite(redLedPin, HIGH);     // Turn on red LED
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Water Level High");
    lcd.setCursor( 0, 1);
    lcd.print("No Watering");
  }

  delay(2000); // Delay to allow sensor reading and avoid flickering display
}
