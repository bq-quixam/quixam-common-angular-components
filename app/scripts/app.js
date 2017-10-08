'use strict';

/**
 * @ngdoc overview
 * @name quixamCommonAngularComponentsApp
 * @description
 * # quixamCommonAngularComponentsApp
 *
 * Main module of the application.
 */
angular
  .module('quixamCommonAngularComponentsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
