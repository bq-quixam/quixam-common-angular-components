/**
 * Created by rakeshuvsn on 12/23/17.
 */
'use strict';

angular
  .module('quixam-common-components')
  .component('quixamNavigation', {
      bindings:{
        navData: '<'
      },
      templateUrl: 'scripts/modules/common/components/quixamNavigation.html',
      controller: ['$document',navigationController],
      controllerAs:'vm'
  });

function navigationController($document) {
  var vm = this;

  vm.openDropdown =  function() {
    vm.isDropdownShown = !vm.isDropdownShown;
  };

  vm.openSideNav = function() {
    vm.sideNavWidth = '250px';
  };

  vm.closeSideNav = function() {
    vm.sideNavWidth = '0px';
  };

  $document.bind('click', function() {
    if(vm.isDropdownShown){
      vm.isDropdownShown = false;
    }

    if(vm.sideNavWidth === '250px'){
      vm.sideNavWidth = '0px';
    }
  });

  vm.$onInit = function() {
    console.log(vm.navData);
    if(vm.navData && vm.navData.sideNavItems) {
      vm.sideNavItems = vm.navData.sideNavItems;
      vm.navDropdownItems = vm.navData.navDropdownItems;
    }
  };

  vm.$onChanges = function(changes) {
    if(changes.navData){
      if(vm.navData && vm.navData.sideNavItems){
        vm.sideNavItems = vm.navData.sideNavItems;
        vm.navDropdownItems = vm.navData.navDropdownItems;
      }
    }
  };


}
