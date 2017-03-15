(function(){
    'use strict';

    angular.module('psFramework').controller('psFrameworkController', FrameworkController);

    FrameworkController.$inject = ['$scope', '$window', '$rootScope', '$timeout'];

    function FrameworkController($scope, $window, $rootScope, $timeout) {
        var vm = this;
        vm.showMenuButton = showMenuButton;

        // angular.element($window).bind('resize', function(){
        //     $scope.$apply(function(){
        //         checkWidth();
        //     });
        // });

        $($window).on('resize.psFramework', function(){
            $scope.$apply(function(){
                 checkWidth();
             });
        });

        $scope.$on('destroy', function(){
            $($window).off('resize.psFramework');
        })

        function showMenuButton() {
            vm.isMenuButtonVisible = false;
            vm.isMenuVisible = true;
            broadcastMenuState();
        }

        function broadcastMenuState() {
            $rootScope.$broadcast('ps-menu-button-selected-event', {isMenuVisible: vm.isMenuVisible});
        }

        function checkWidth() {
            var width = $window.innerWidth;
            if(width < 768) {
                vm.isMenuButtonVisible = true;
            } else {
                vm.isMenuButtonVisible = false;
            }
            vm.isMenuVisible = !vm.isMenuButtonVisible;
            broadcastMenuState();
        }

        $scope.$on('ps-menu-element-selected-event', function(evt, data){
            vm.routeString = data.route;
        });

        $timeout(function(){
            checkWidth();
        }, 0);
    }

}());