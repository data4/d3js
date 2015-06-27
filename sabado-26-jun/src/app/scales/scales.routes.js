(function() {
  'use strict';

  angular
    .module('d3App')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('scales', {
        url: '/scales',
        templateUrl: 'app/scales/scales.html',
        controller: 'ScalesController',
        controllerAs: 'scales'
      });

  }

})();
