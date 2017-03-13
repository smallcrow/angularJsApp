(function(){
    'use strict';

    angular.module('psMenu').controller('psMenuController', MenuController);

    MenuController.$inject = ['$scope', '$rootScope'];

    function MenuController($scope, $rootScope) {
        var vm = this;
        var activeElement = null;

        vm.setActiveElement = function(element) {
            activeElement = element;
        }

        vm.getActiveElement = function() {
            return activeElement;
        }

        vm.setRoute = function(route) {
            $rootScope.$broadcast('ps-menu-element-selected-event', {route: route})
        }

    }


}())