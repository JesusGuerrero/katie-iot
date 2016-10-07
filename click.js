var Gpio = require('onoff').Gpio,
	led = new Gpio(27, 'out'),
	ledState = 0,
	button = new Gpio(17, 'in', 'both');

button.watch(function (err,value) {
	console.log('Button is ' + (value ? 'ON' : 'OFF'));
	var light = function(){
		setInterval(function(){
			led.writeSnc( ledState );
			ledState = ledState ? 0 : 1
		}, 100);
	}
	light();

	led.writeSync(value);
});

process.on('SIGINT', function () {
	led.unexport();
	button.unexport();
});

button.watch(function (err,value) {
	if (button is ON){
		ledState = 0
	}
	
	else if (button is OFF){
		ledState = 1
	}
	
	else {
		console.log("SOMETHING IS WRONG")
	}
}
