/**
 * Created by rakeshuvsn on 12/19/17.
 */
'use strict';

angular.module('quixam-common-components').component('quixamAssignmentCard', {
  bindings:{
    assignmentData: '='
  },
  templateUrl: 'scripts/modules/common/components/quixamAssignmentCard.html',
  controller: [assignmentCardController],
  controllerAs: 'vm'
});

function assignmentCardController() {
  var vm = this;

  vm.$onInit = function() {
    setAssignmentCardStyles();
  };

  function setAssignmentCardStyles() {
    if(vm.assignmentData.status === 'Not started') {
      vm.assignmentData.statusColor = '#d22d6f';
    }else if(vm.assignmentData.status === 'In progress'){
      vm.assignmentData.statusColor = '#e68a00';
    }else if(vm.assignmentData.status === 'Completed') {
      vm.assignmentData.statusColor = '#6bf53d';
    }
  }
}
