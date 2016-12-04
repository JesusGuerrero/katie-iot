var socket = io();

socket.on('event:hello', function(){
  console.log('Hello from server through socket');
});

angular.module('mahrio-motion-client', [])
  .controller('MainCtrl', ['$scope', function( $scope ) {
    $scope.button = false;
    socket.on('event:button', function( val ) {
      console.log('Motion in 22 is ' +(val ? 'ACTIVE' : 'INACTIVE'));
      $scope.$apply( function() {
        $scope.motion = val ? true : false;
      });
    });
  }]);