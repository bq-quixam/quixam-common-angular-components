'use strict';

/**
 * @ngdoc function
 * @name quixamCommonAngularComponentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quixamCommonAngularComponentsApp
 */
angular.module('quixamCommonAngularComponentsApp')
  .controller('MainCtrl', function ($http) {
    var ctrl = this;
    ctrl.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    getAssignmentsData();
    getNavData();

    function getAssignmentsData() {
      $http.get('../../mockAssets/assignmentsData.json').then(function(success) {
        console.log(success);
        ctrl.assignments = success.data;
      });
    }

    function getNavData() {
      $http.get('../../mockAssets/navData.json').then(function(success) {
        console.log(success);
        ctrl.navData = success.data;
      });
    }



    ctrl.filterOptions = [{
      name: 'Due today',
      wanted: false,
    }, {
      name: 'Due next 7 days',
      wanted: false,
    },{
      name: 'In progress assignments',
      wanted: false,
    }, {
      name: 'Completed assignments',
      wanted: false,
    }];


  });
