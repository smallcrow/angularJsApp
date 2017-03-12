(function () {
   'use strict';

/**
 * @ngdoc overview
 * @name angularJsAppApp
 * @description
 * # angularJsAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsAppApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'psFramework'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(LoggingDecorator);

  function LoggingDecorator($provide) {
    $provide.decorator('$exceptionHandler', ['$delegate', function($delegate){
		return function(exception, cause){
			$delegate(exception, cause);
			alert(exception.message);
		}
    }]);
  }

  }());