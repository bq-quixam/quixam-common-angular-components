/**
 * Created by rakeshuvsn on 12/15/17.
 */
'use strict';

angular
  .module('quixamCommonAngularComponentsApp')
  .controller('quixamVisualization', function($timeout) {
    var vm = this;

    vm.$onInit = function() {

    };

    vm.openLoader = function() {
      vm.isLoading = true;

      $timeout(function() {
        vm.isLoading = false;
      }, 3000);
    };

  });
