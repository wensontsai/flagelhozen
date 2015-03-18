'use strict';

angular.module('todoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todos', {
        url: '/todos_ng',
        templateUrl: 'public/todos/todos.html',
        controller: 'TodosCtrl'
      })
      .state('todos.edit', {
        url: '/edit/:id',
        // templateUrl: 'public/todos/updateTodo.html'
        controller: 'TodosCtrl'
      })
  });
