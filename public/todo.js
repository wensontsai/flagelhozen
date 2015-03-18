var TodoApp2 = angular.module('TodoApp2', []);

function mainController($scope, $http) {
  $scope.formData = {};

  // get all todos and show in view
  $http.get('/api/todos')
    .success(function(data){
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });

  // for adding new todo
  $scope.createTodo = function(){
    $http.post('/api/todos', $scope.formData)
      .success(function(data){
        $scope.formData = {}; // clear form so it can be repopulated

        $scope.todos = data;
        console.log(data);
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id){
    $http.delete('/api/todos/' + id)
      .success(function(data){
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
  };


}
