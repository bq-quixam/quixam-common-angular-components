'use strict';

/**
 * @ngdoc function
 * @name quixamCommonAngularComponentsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quixamCommonAngularComponentsApp
 */
angular.module('quixamCommonAngularComponentsApp')
  .controller('quixamInputs', function () {
    var ctrl = this;
    ctrl.selectOptions  = [
      {model : 'Ford Mustang', color : 'red'},
      {model : 'Fiat 500', color : 'white'},
      {model : 'Volvo XC90', color : 'black'}
    ];

    ctrl.answers = [{
      id:1,
      value: 'answer1'
    },{
      id:2,
      value: 'answer2'
    }];

    ctrl.checkboxAnswers = [{
      id:1,
      value: 'answer3'
    },{
      id:2,
      value: 'answer4'
    }];

    ctrl.onInputChange = function(model) {
      console.log(model);
    };

    ctrl.onSelectChange = function(model) {
      console.log(model);
    };

    ctrl.onSelectOption = function(ctrl) {
      console.log(ctrl);
    };

    ctrl.onSelectCheckBox = function(ctrl) {
      console.log(ctrl);
    };
  });
