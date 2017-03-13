(function(){
    'use strict';

    angular.module('psMenu').directive('psMenuItem', MenuItem);

    function MenuItem() {
        return {
            require: '^psMenu',
            scope: {
                label: '@',
                icon: '@',
                route: '@'
            },
            templateUrl: '/scripts/psMenu/psMenuItem.template.html',
            link: function(scope, el, attr, ctrl) {
                scope.isActive = function() {
                    return ctrl.getActiveElement() === el;
                }
                el.on('click', function(evt){
                    evt.stopPropagation();
                    evt.preventDefault();
                    scope.$apply(function(){
                        ctrl.setActiveElement(el);
                        ctrl.setRoute(scope.route);
                    });
                });
            }
        }
    }
}());