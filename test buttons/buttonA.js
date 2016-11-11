var gpio = require('onoff').Gpio
	, buttonB = new gpio(4, 'in', 'both');
console.log('working?');

buttonB.watch( function(err, val){
	if(err){console.log('Motion in 4 Error'); return;}
	console.log('Motion in 4 is ' + (val ? 'ACTIVE' : 'INACTIVE')+': ' + new Date().toLocaleString() );
});

process.on('SIGINT', function(){
	buttonB.unexport();
	process.exit();
});
