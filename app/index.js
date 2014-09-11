(function () {

  "use strict";

  require('angular');
  require('angular-mocks');
  require('angular-route');

  return angular.module('exampleapp', ['ngRoute',
    require('./modules/layout/layout.js').name,
    require('./modules/header/header.js').name,
    require('./modules/navigation/navigation.js').name,
    require('./modules/examples/examples.js').name
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/examples'
      })
      .when('/examples', {
        templateUrl: './modules/examples/examples.html',
        controller: 'examplesController'
      })
      .otherwise({
        redirectTo: '/examples'
      });
  }]);

}());
