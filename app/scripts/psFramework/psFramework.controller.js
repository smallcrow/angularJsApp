(function(){
    'use strict';

    angular.module('psFramework').controller('psFrameworkController', FrameworkController);

    FrameworkController.$inject = ['$scope'];

    function FrameworkController($scope) {
        var vm = this;
        vm.hello='hello'

        $scope.$on('ps-menu-element-selected-event', function(evt, data){
            vm.routeString = data.route;
        });
    }

}());