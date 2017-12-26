/**
 * Created by rakeshuvsn on 12/9/17.
 */
'use strict';

angular
  .module('quixam-question-answers')
  .component('quixamQuestionText', {
      bindings: {
        questionText: '='
      },
      template: '<h3 class="q-question-text" ng-bind-html="$ctrl.questionText"></h3>',
      controller: ['$sce',questionTextController]
  });

function questionTextController($sce) {
    var ctrl = this;

    ctrl.questionText = $sce.trustAsHtml(ctrl.questionText);
}
