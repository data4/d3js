(function() {
  'use strict';

  angular
    .module('d3App')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
