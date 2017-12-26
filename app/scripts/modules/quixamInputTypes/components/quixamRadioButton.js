/**
 * Created by rakeshuvsn on 12/11/17.
 */
'use strict';

angular.module('quixam-input-types').component('quixamRadioButton', {
  bindings: {
    name: '=',
    model: '=',
    value: '=',
    textValue: '=',
    onChange: '&',
    isDisabled: '='
  },
  templateUrl: 'scripts/modules/quixamInputTypes/components/quixamRadioButton.html',
  controller: [radioButtonController]
});

function radioButtonController() {
  var ctrl = this;

  ctrl.onSelectOption = function() {
    ctrl.onChange({ctrl: ctrl});
  };
}
