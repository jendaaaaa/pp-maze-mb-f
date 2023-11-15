// GROUP MB-F
// laser L1, gate G3

// PINOUT
let PIN_SERVO = AnalogPin.P0;
let PIN_PHOTO = DigitalPin.P1;

// INIT
radio.setGroup(8);

// VARIABLES
let value = 0;
let servo = 45;

// CONSTANTS
let SERVO_OPEN = 85
let SERVO_CLOSE = 10

// RADIO
let RADIO_RESET = 1;

// INTERRUPT
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber === RADIO_RESET) {
        resetState();
    }
})

// MAIN
basic.forever(function () {
    value = pins.digitalReadPin(PIN_PHOTO);
})

basic.forever(function () {
    if (!value) {
        gateOpen();
    } else {
        gateClose();
    }
    pins.servoWritePin(PIN_SERVO, servo);
})

// FUNCTIONS
function resetState() {
    gateClose();
}

function gateOpen(){
    servo = SERVO_OPEN;
}

function gateClose(){
    servo = SERVO_CLOSE;
}