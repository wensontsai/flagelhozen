'use strict';

angular.module('todoApp', [


])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: './todos/todos',
      controller: 'TodoController'
    }).otherwise({
        rediretTo: '/'
    });

  })

  .factory('Todo', function($resource){
    return $resource("/api/todos/:id", { id: "@_id" },
    {
      'create': { method: 'POST'},
      'index':  { method: 'GET', isArray: true },
      'show':   { method: 'GET', isArray: false },
      'update': { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
      );
  })
