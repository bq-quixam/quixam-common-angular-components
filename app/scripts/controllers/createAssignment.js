/**
 * Created by rakeshuvsn on 12/28/17.
 */
'use strict';

angular.module('quixamCommonAngularComponentsApp')
  .controller('createAssignment', function ($http) {
    var ctrl =this;

    getNavData();
    init();

    function getNavData() {
      $http.get('../../mockAssets/navData.json').then(function(success) {
        console.log(success);
        ctrl.navData = success.data;
      });
    }

    function init() {
      ctrl.isSelected = 'CUSTOM';
      setNextTabsToDisplay();
    }

    function setNextTabsToDisplay() {
      if(ctrl.isSelected === 'CUSTOM') {

      } else if (ctrl.isSelected === 'STANDARD'){

      }
    }

    ctrl.tabs = [
      {
        title: 'Exam Mode',
        templateUrl: '../views/templates/examMode.html',
        disabled: false
      },{
        title: 'Exam Creation',
        templateUrl: '../views/templates/customTemplates/examCreation.html',
        disabled: false
      },{
        title: 'Exam Settings',
        templateUrl: '../views/templates/examSettings.html',
        disabled: false
      }
    ];

    ctrl.onTabSelected = function(tab, index) {
      console.log(tab);
    };

    ctrl.onSelectOption = function(ctrl) {
      console.log(ctrl);
    };

    ctrl.selectOptions  = [
      {model : '10', color : 'red'},
      {model : '20', color : 'white'},
      {model : '30', color : 'black'}
    ];

  });
