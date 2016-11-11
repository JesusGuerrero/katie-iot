console.log("button test is running")

var Gpio = require('onoff').Gpio,	//onoff module (use npm install onoff)
  button = new Gpio(22, 'in', 'both');	//setup GPIO22 as output

if (button == "Gpio " + 22){
console.log("working");
}

button.watch(function(err,state){
	if(state == 1){
		console.log("buttonB on");
	} else {
		console.log("buttonB off");
	}
});

process.on('SIGINT', function(){
  button.unexport();
  process.exit();
});