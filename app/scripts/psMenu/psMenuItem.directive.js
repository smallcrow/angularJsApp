(function(){
    'use strict';

    angular.module('psMenu').directive('psMenuItem', MenuItem);

    function MenuItem() {
        return {
            require: '^psMenu',
            scope: {
                label: '@',
                icon: '@'
            },
            templateUrl: '/scripts/psMenu/psMenuItem.template.html'
        }
    }
}());