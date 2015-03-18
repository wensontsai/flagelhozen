'use strict';

// var todoApp = angular.module('todoApp', []);

// function todoController($scope, $http){
//   $scope.formData = {};

//   // show ALL TODOS upon load
//   $http.get('../../models/todo.js')
//     .success(function(data){
//       $scope.todos = data;
//       console.log(data);
//     })
//     .error(function(data){
//       console.log('Error: ' + data);
//     });

angular.module('TodoApp')
  .controller('TodoCtrl', function ($scope, $rootScope, socket, $http, $moment, $window, $location, $stateParams){

    function todoController($scope, $http){
      // show ALL TODOS upon load
      $http.get('api/todos')
        .success(function(data){
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data){
          console.log('Error: ' + data);
        });

    })


};
