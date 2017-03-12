(function(){
    'use strict';

    angular.module('psFramework').controller('psFrameworkController', FrameworkController);

    FrameworkController.$inject = ['$scope'];

    function FrameworkController() {
        var vm = this;
        vm.hello='hello'
    }

}());