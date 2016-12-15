var socket = io();

socket.on('event:hello', function(){
  console.log('Hello from server through socket');
});

socket.on('event:buttonA', function(){
  console.log('button A pressed');
});

socket.on('event:buttonB', function(){
  console.log('button B pressed');
});

socket.on('event:buttonC', function(){
  console.log('button C pressed');
});

