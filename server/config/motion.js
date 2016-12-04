var gpio = require('onoff').Gpio,
  motion = new gpio(21, 'in', 'both'),
  io = null;

motion.watch( function(err, val) {
  if( err ) { console.log('Motion in 22 Error'); return; }

  console.log('Motion in 22 is ' +(val ? 'ACTIVE' : 'INACTIVE') + ' : ' + new Date().toLocaleString() );
  if( io ) {
    io.sockets.emit('event:button', val);
  }

});
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
	} else {
		console.log("buttonA off");
	}
	  if( io ) {
    io.sockets.emit('event:button', val);
  }
});

buttonB.watch(function(err,state){
	if(state == 1){
		console.log("buttonB on");
	} else {
		console.log("buttonB off");
	}
});

buttonC.watch(function(err,state){
	if(state == 1){
		console.log("buttonC on");
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