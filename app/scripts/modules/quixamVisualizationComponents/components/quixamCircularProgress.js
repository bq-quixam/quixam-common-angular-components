/**
 * Created by rakeshuvsn on 12/14/17.
 */
'use strict';

angular
  .module('quixam-visualization')
  .component('quixamCircularProgress', {
    bindings: {
      progressValue: '=',
      strokeWidth: '='
    },
    templateUrl: 'scripts/modules/quixamVisualizationComponents/components/quixamCircularProgress.html',
    controller: [circularProgressController]
  });

function circularProgressController() {
  var vm = this;

  vm.$onInit = function() {
      vm.bgColor = '#DDDD';
      if(vm.progressValue <= 30) {
          vm.color = '#FF4136';
      }else if(vm.progressValue > 30  &&  vm.progressValue <= 75){
          vm.color = '#0074D9';
      }else if(vm.progressValue > 75) {
          vm.color = '#2ECC40';
      }
  };
}
