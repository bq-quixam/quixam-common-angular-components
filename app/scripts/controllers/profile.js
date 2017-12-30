/**
 * Created by rakeshuvsn on 12/29/17.
 */
'use strict';

angular.module('quixamCommonAngularComponentsApp')
  .controller('profileController', function($http) {

    var ctrl = this;
    getNavData();
    function getNavData() {
      $http.get('../../mockAssets/navData.json').then(function(success) {
        console.log(success);
        ctrl.navData = success.data;
      });
    }
  });
