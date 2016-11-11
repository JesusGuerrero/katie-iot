console.log("button test is running")

var Gpio = require('onoff').Gpio,	//onoff module (use npm install onoff)
  button = new Gpio(26, 'in', 'both');	//setup GPIO26 as output

button.watch(function(err,state){
	if(state == 1){
		console.log("buttonC on");
	} else {
		console.log("buttonC off");
	}
});

process.on('SIGINT', function(){
  button.unexport();
  process.exit();
});