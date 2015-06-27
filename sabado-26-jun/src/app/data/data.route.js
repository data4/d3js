(function() {
  'use strict';

  angular
    .module('d3App')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('data', {
        url: '/data',
        templateUrl: 'app/data/data.html',
        // controller: 'SelectionsController',
        // controllerAs: 'ctrl'
      });
  }

})();
