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
		console.log(new Date().getTime());
if( io ) {
    io.sockets.emit('event:button',state);
  }
	} else {
		console.log("buttonA off");
	}
	  
});

buttonB.watch(function(err,state){
	if(state == 1){
		console.log("buttonB on");
		function main(server){
			io = require('socket.io').listen(server.listener);
	
			io.on('connection', function(socket){
				console.log('socket listening ...' + socket.id);
				socket.emit('event:buttonB');
				socket.on('disconnect', function(){
					console.log('goodbye socket...' + socket.id);
				});
			});
		}
	} else {
		console.log("buttonB off");
	}
});

buttonC.watch(function(err,state){
	if(state == 1){
		console.log("buttonC on");
		io.sockets.emit('event: button C', state);
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