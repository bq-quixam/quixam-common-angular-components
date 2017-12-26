/**
 * Created by rakeshuvsn on 12/13/17.
 */
'use strict';

angular
  .module('quixam-input-types')
  .component('quixamCheckBox', {
      bindings: {
        name: '=',
        model: '=',
        value: '=',
        onChange: '&',
        isDisabled: '=',
        textValue: '='
      },
      templateUrl: 'scripts/modules/quixamInputTypes/components/quixamCheckBox.html',
      controller: [checkBoxController]
  });

function checkBoxController() {
    var ctrl = this;

    ctrl.onSelectOption = function() {
      ctrl.onChange({ctrl: ctrl});
    };
}
