'use strict';

/**
 * @ngdoc directive
 * @name kleineHeldenApp.directive:cards
 * @description
 * # cards
 */
angular.module('kleineHeldenApp')
    .directive('khCards', function($timeout, $window) {
        return {
            templateUrl: 'views/cards.html',
            restrict: 'E',
            scope: {
                heroes: '='
            },
            link: function postLink(scope, element) {


                angular.element($window).bind('resize', function() {
                    scope.getHeight();
                });

                scope.getHeight = function() {

                    scope.width = 0;
                    scope.height = element.prop('offsetHeight');


                    function init() {

                        var result = element[0].getElementsByClassName('theImage');
                        for (var i = 0; i < 1; i++) {
                            scope.height = result[i].scrollHeight;
                        }

                    }


                    $timeout(init, false);




                };







                scope.$watch('val', function(newValue, oldValue) {
                    $timeout(function() { scope.getHeight() }, 1000);

                });







            }
        };
    });
