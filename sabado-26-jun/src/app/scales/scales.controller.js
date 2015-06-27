(function() {
  'use strict';

  angular
    .module('d3App')
    .controller('ScalesController', ScalesController);

  /** @ngInject */
  function ScalesController() {
    var vm = this;

    console.log('scales controller')
  }
})();
