/**
 * Created by rakeshuvsn on 12/10/17.
 */
'use strict';
angular
  .module('quixamCommonAngularComponentsApp')
  .controller('questionAnswers', function($http) {

    var ctrl = this;

    function setMultipleChoiceData() {
      $http.get('../../mockAssets/multipleChoice.json').then(function(success) {
        console.log(success);
        ctrl.multipleChoiceData = success.data.questionData;
      });
    }

    function setMultipleSelectionData() {
      $http.get('../../mockAssets/multipleSelection.json').then(function(success) {
        console.log(success);
        ctrl.multipleSelectionData = success.data.questionData;
      });
    }

    setMultipleChoiceData();
    setMultipleSelectionData();
  });
