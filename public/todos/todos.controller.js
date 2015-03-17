var todoApp = angular.module('todoApp', []);

function todoController($scope, $http){
  $scope.formData = {};

  // show ALL TODOS upon load
  $http.get('../../models/todo.js')
    .success(function(data){
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });


};
