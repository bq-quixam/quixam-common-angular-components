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
    'ngTouch',
    'quixam-common-components'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/quixamInputs', {
        templateUrl: 'views/quixamInputs.html',
        controller: 'quixamInputs',
        controllerAs: 'vm'
      })
    .when('/questionAnswers', {
      templateUrl: 'views/questionAnswers.html',
      controller: 'questionAnswers',
      controllerAs: 'vm'
    })
    .when('/quixamVisualization', {
      templateUrl: 'views/quixamVisualization.html',
      controller: 'quixamVisualization',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
