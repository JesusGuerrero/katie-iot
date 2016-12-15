var Gpio = require('onoff').Gpio,	//onoff module (use npm install onoff)
  buttonA = new Gpio(4, 'in', 'both');	//setup GPIO26 as output
  buttonB = new Gpio(22, 'in', 'both');	//setup GPIO26 as output
  buttonC = new Gpio(26, 'in', 'both');	//setup GPIO26 as output,
  io = null;

buttonA.setActiveLow( true );
buttonB.setActiveLow( true );
buttonC.setActiveLow( true );

buttonA.watch(function(err,state){
	if(state == 1){
		console.log("buttonA on");
		
		if(io){io.sockets.emit('event:buttonA');}
	} else {
		console.log("buttonA off");
	}
	  
});

buttonB.watch(function(err,state){
	if(state == 1){
		console.log("buttonB on");
		
		if(io){io.sockets.emit('event:buttonB');}
	} else {
		console.log("buttonB off");
	}
});

buttonC.watch(function(err,state){
	if(state == 1){
		console.log("buttonC on");

		
		if(io){io.sockets.emit('event:buttonC');}
	} else {
		console.log("buttonC off");
	}
});

process.on('SIGINT', function(){
  buttonA.unexport();
  buttonB.unexport();
  buttonC.unexport();
  process.exit();
});
module.exports = function( ioInstance ) {
  io = ioInstance;
}