/**
 * customFilters
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  // I decode paragraphs that include unicode and escape sequence.
  // https://docs.angularjs.org/api/ng/service/$sce
  angular
    .module( "app" )
    .filter( "htmlFilter", htmlFilter );

  htmlFilter.$inject = [
    "$sce"
  ];
  function htmlFilter( $sce ) {

    var filter = function( input ) {
        return $sce.trustAsHtml( input );
    };

    return filter;

  } // end htmlFilter


})();
