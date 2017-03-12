(function(){
    'use strict';

    angular.module('psMenu').directive('psMenu', Menu);

    function Menu() {
        return {
            transclude: true,
            scope: {
            },
            controller: 'psMenuController',
            controllerAs: 'menuCtrl',
            bindToController: true, 
            templateUrl: '/scripts/psMenu/psMenu.template.html'
        }
    }
}());