'use strict';

/**
 * @ngdoc overview
 * @name kleineHeldenApp
 * @description
 * # kleineHeldenApp
 *
 * Main module of the application.
 */
angular
  .module('kleineHeldenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAria',
    'ngMaterial',
    'angular-flippy'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
