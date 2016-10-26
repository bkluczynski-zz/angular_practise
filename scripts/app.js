angular.module("todoListApp",[])

.controller('mainCtrl', function($scope, dataService){



  $scope.helloWorld = function(){
    console.log('Hello there! This is the hello world controller function in the mainCtrl');
  };

  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos = response.data;
});

  $scope.deleteTodo = function(todo, $index){
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  }

})
.service('dataService',function($http){

  this.helloConsole = function(){
    console.log('this is the hello console service!')
  };
    this.getTodos = function(callback){ $http.get('mock/todos.json')
    .then(callback)
  };

  this.deleteTodo = function(todo){
    console.log("the" + todo.name + " has been deleted")
    //other logic
  };

  this.saveTodos = function(todo){
    console.log("the" + todo.name + "has been saved")
    //other logic
  };


});
