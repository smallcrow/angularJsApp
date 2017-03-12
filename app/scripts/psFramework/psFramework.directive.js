(function () {
  'use strict';

  angular.module('psFramework').directive('psFramework', Framework);

  function Framework() {
    return {
      transclude: true,
      scope: {
        iconFile : '@',
        logoTitle : '@',
        logoSubtitle : '@'
      },
      controller: 'psFrameworkController',
      controllerAs: 'frameworkCtrl',
      bindToController: true, // two-way binding problem, solve in angular 1.3 https://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html
      templateUrl: '/scripts/psFramework/psFramework.template.html'
      }
  }

}());
