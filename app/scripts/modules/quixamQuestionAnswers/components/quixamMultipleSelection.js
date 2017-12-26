/**
 * Created by rakeshuvsn on 12/13/17.
 */
'use strict';

angular
.module('quixam-question-answers')
.component('quixamMultipleSelection',{
  bindings: {
    questionData:'='
  },
  templateUrl: 'scripts/modules/quixamQuestionAnswers/components/quixamMultipleSelection.html',
  controller: [multipleSelectionController]
});

function multipleSelectionController() {
  var ctrl = this;

  ctrl.$onInit = function() {

  };
}
