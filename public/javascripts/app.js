'use strict';

angular.module('polls', [


])


.config('$routeProvider', function($routeProvider){
    $routeProvider
      .when('/polls', {
        templateUrl: 'partials/list.html', controller: PollListCtrl
      })
      .when('/poll/:pollid', {
        templateUrl: 'partials/item.html', controller: PollItemCtrl
      })
      .when('/poll/:pollid', {
        templateUrl: 'partials/new.html', controller: PollNewCtrl
      })
      .otherwise({ redirectTo: '/polls'
    });
  });
