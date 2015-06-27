(function() {
  'use strict';

  angular
    .module('d3App')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('selections', {
        url: '/selections',
        templateUrl: 'app/selections/selections.html',
        // controller: 'SelectionsController',
        // controllerAs: 'ctrl'
      });
  }

})();
