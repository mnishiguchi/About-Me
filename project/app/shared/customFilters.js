/**
 * I define custom filters.
 */
(function() {

  // Module declaration.
  var module = angular.module(
  "customFilters",
  []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  // I decode paragraphs that include unicode and escape sequence.
  // https://docs.angularjs.org/api/ng/service/$sce
  module.filter(
  'htmlFilter',
  [
    "$sce",
    function( $sce ) {

      return function( input ) {
          return $sce.trustAsHtml( input );

      }; // end return
    } // end function
  ]); // end filter

})();
