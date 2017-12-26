/**
 * Created by rakeshuvsn on 12/13/17.
 */
'use strict';

angular
  .module('quixam-question-answers')
  .component('quixamMultipleChoice',{
      bindings: {
        questionData: '='
      },
      templateUrl: 'scripts/modules/quixamQuestionAnswers/components/quixamMultipleChoice.html',
      controller: [multipleChoiceController]
  });

function multipleChoiceController () {
  var ctrl = this;

  ctrl.$onInit = function() {

  };
}
