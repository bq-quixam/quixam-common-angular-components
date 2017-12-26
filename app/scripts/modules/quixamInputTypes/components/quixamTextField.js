/**
 * Created by rakeshuvsn on 12/10/17.
 */
'use strict';


angular
  .module('quixam-input-types').component('quixamTextField', {
      bindings: {
          name: '=',
          regexType: '@',
          message: '=',
          caption: '=',
          onChange: '&',
          isDisabled: '='

      },
      templateUrl: 'scripts/modules/quixamInputTypes/components/quixamTextField.html',
      controller: [textFieldController]
  });

function textFieldController() {
  var ctrl = this;
  ctrl.onInputChange = function() {
    if(ctrl.model && ctrl.model.length){
      ctrl.isErrorDisplay = false;
    }else{
      ctrl.isErrorDisplay = true;
    }
    ctrl.onChange({ctrl: ctrl});
  };

  ctrl.$onInit = function() {
    if(ctrl.regexType) {
      setRegexPattern();
    }

    if(ctrl.regexType === 'password'){
      ctrl.inputType = 'password';
    }else {
      ctrl.inputType = 'text';
    }
  };

  function setRegexPattern() {
    if(ctrl.regexType === 'email') {
      ctrl.regexPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    }else if(ctrl.regexType === 'phone') {
      ctrl.regexPattern = /^([0-9]{10})$/;
    }else if(ctrl.regexType === 'password') {
      ctrl.regexPattern = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    }else {
      ctrl.regexPattern = null;
    }
  }
}
