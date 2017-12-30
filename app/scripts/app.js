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
    'angularMoment',
    'ngMaterialDatePicker',
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
    .when('/createAssignment', {
      templateUrl: 'views/createAssignment.html',
      controller: 'createAssignment',
      controllerAs: 'vm'
    })
    .when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'profileController',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
