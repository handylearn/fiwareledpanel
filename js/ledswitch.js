/* 
 * ledswich.js
 * @author Karsten Meier
 */
var handylearn_ledpanel = {
    nr_leds: 10,
    max_input: 10,
    
    /**
     * swith a led on or off by selcting the led-lement and changing the class
     * @param {number} nr led to change, 0-based index
     * @param {boolean} state 
     * @returns {void}
     */
    switch_led: function (nr, state){
        var ledid = "led" + nr;
        var div = document.getElementById(ledid);
        if (state){
            div.className = "led on";
        }
        else {
            div.className = "led off";        
        }
    },
    /**
     * transforms the input range so that a value max_input will switch on all LEDs.
     */
    normalize_value: function(input){
        return (input * nr_leds / max_input);
    },
    /**
     * switches so many LEDs on as the input value, switches the other LEDs off.
     * @param {number} input number of LEDS to switch on
     * @returns {void}
     */
     set_panel_value: function(input){
        var value = input; /** put in normalize here */ 
        var i;
        for(i=0; i<10; i++){
            this.switch_led(i, value > i);
        }
    }
};

/* handylearn_ledpanel.switch_led(3, true); */

handylearn_ledpanel.set_panel_value(4);

/**
 * the call back funtion for the input connectors
 * controlls the LED PAnel according the input
 * @param {number} value
 * @returns {undefined}
 */
function input_gotten(value){
    /* console.log('reveived value:' + value); */
    handylearn_ledpanel.set_panel_value(value);    
}

function wire_input(){
   if (typeof MashupPlatform === 'undefined') {
       console.log('No Mashup loaded, so no input possible:');
   }
   else {
        MashupPlatform.wiring.registerCallback("inputvalue", input_gotten);
    }    
}
window.addEventListener("DOMContentLoaded", wire_input, false);