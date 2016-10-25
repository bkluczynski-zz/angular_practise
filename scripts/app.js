angular.module("todoListApp",[])

.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log('Hello there! This is the hello world controller function in the mainCtrl');
  };
})

.controller('coolController', function($scope){
  $scope.WhoAmI = function(){
    console.log('This is not the main controller, it is cool Controller talkin');
  }

  $scope.helloWorld = function(){
    console.log('This is the coolController hello world, inheritance is not gonna happen, cause i am defined here')
  };
})

.controller('iAmSybling', function($scope){
  $scope.foobar = 1234;
});
