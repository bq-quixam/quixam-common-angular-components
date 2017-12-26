/**
 * Created by rakeshuvsn on 12/10/17.
 */
'use strict';


angular
.module('quixam-input-types').component('quixamSelectField', {
  bindings: {
    name: '=',
    options: '=',
    caption: '=',
    model: '=?',
    onChange: '&',
    isDisabled: '='
  },
  templateUrl: 'scripts/modules/quixamInputTypes/components/quixamSelectField.html',
  controller: [selectFieldController]
});

function selectFieldController() {
  var ctrl = this;

  ctrl.$onInit = function() {
  };

  ctrl.onSelectChange = function() {
    ctrl.onChange({ctrl: ctrl});
  };

}
