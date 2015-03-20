angular.module('TodoApp2', ['TodoApp2.filters', 'TodoApp2.services', 'TodoApp2.directives'
])
  .config(['$routeProvider', 'locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/todos2', {
        templateUrl: './index.html',
        controller: 'TodoController'
    })
      .when('/', {
        templateUrl: './index.html',
        controller: 'TodoController'
    })
      .when('/', {
        templateUrl: './index.html',
        controller: 'TodoController'
    })
      .otherwise({
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
