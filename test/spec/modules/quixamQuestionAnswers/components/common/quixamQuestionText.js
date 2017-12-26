/**
 * Created by rakeshuvsn on 12/10/17.
 */
'use strict';

describe('Component: quixamQuestionText', function () {
  beforeEach(module('quixam-question-answers'));

  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<quixam-question-text question-text="questionText"> </quixam-question-text>');
    element = $compile(element)(scope);
    scope.questionText = 'What is the date that quixam go Live?';
    scope.$apply();
  }));

  it('should display question text', function() {
    var h3 = element.find('h3');
    expect(h3.text()).toBe('What is the date that quixam go Live?');
  });

});
