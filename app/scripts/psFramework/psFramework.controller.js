(function(){
    'use strict';

    angular.module('psFramework').controller('psFrameworkController', FrameworkController);

    FrameworkController.$inject = ['$scope'];

    function FrameworkController() {
        this.hello='hello'
    }

}());