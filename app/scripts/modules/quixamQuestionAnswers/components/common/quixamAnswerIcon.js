/**
 * Created by rakeshuvsn on 12/19/17.
 */
'use strict';

angular.module('quixam-question-answers').component('quixamAnswerIcon', {
  bindings: {
    isCorrectIcon: '='
  },
  templateUrl: 'scripts/modules/quixamQuestionAnswers/components/common/quixamAnswerIcon.html',
  controller: [answerIconController],
  controllerAs: 'vm'
});

function answerIconController() {
  var vm = this;

}
