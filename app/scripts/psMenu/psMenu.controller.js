(function(){
    'use strict';

    angular.module('psMenu').controller('psMenuController', MenuController);

    MenuController.$inject = ['$scope', '$rootScope'];

    function MenuController($scope, $rootScope) {
        var vm = this;
        vm.isMenuVisible = true;
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

        $scope.$on('ps-menu-button-selected-event', function(evt, data){
            vm.isMenuVisible = data.isMenuVisible;
        });

    }


}())