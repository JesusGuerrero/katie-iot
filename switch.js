console.log("button test is running")

var Gpio = require('onoff').Gpio,	//onoff module (use npm install onoff)
  buttonA = new Gpio(4, 'in', 'both');	//setup GPIO4 as output
  buttonB = new Gpio(22, 'in', 'both');	//setup GPIO22 as output
  buttonC = new Gpio(26, 'in', 'both');	//setup GPIO26 as output

var pressA = 0;
var pressB = 0;
var pressC = 0;
<<<<<<< HEAD
=======
var start = 0;
>>>>>>> e56270e6171bfb3ef9c98d91ee551951b8ec5964

buttonA.setActiveLow( true );
buttonB.setActiveLow( true );
buttonC.setActiveLow( true );

buttonA.watch(function(err,state){
	if(state == 1){
<<<<<<< HEAD
		pressA++;
		console.log("button A pressed " + pressA + " time(s)");
	} else {
		console.log("button A off");
=======
		pressA++
		console.log("button A pressed " + pressA + " time(s)");
		start = new Date().getTime();
	} else {
		console.log("button A off");
		var elapsed = (new Date().getTime() - start)/1000;
		console.log("button pressed for " + elapsed);
		start = 0;
>>>>>>> e56270e6171bfb3ef9c98d91ee551951b8ec5964
	}
});

buttonB.watch(function(err,state){
	if(state == 1){
		pressB++
		console.log("button B pressed " + pressB + " time(s)");
<<<<<<< HEAD
	} else {
		console.log("button B off");
=======
		start = new Date().getTime();
	} else {
		console.log("button B off");
		var elapsed = (new Date().getTime() - start)/1000;
		console.log("button pressed for " + elapsed);
		start = 0;
>>>>>>> e56270e6171bfb3ef9c98d91ee551951b8ec5964
	}
});

buttonC.watch(function(err,state){
	if(state == 1){
		pressC++
		console.log("button C pressed " + pressC + " time(s)");
<<<<<<< HEAD
	} else {
		console.log("button C off");
=======
		start = new Date().getTime();
	} else {
		console.log("button C off");
		var elapsed = (new Date().getTime() - start)/1000;
		console.log("button pressed for " + elapsed);
		start = 0;
>>>>>>> e56270e6171bfb3ef9c98d91ee551951b8ec5964
	}
});

process.on('SIGINT', function(){
  buttonA.unexport();
  buttonB.unexport();
  buttonC.unexport();
  process.exit();
});