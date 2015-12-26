/**
 * anchorHashLink
 *
 *  USAGE
 *  1. Inject this to the app module.
 *
 *  2.
 *    <!-- Link to top of this article -->
 *    <a
 *      ng-show="vm.isVisible"
 *      ng-click="scrollTo( vm.topId )"
 *      anchor-hash-link>
 *      [Top]
 *    </a>
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .directive( "anchorHashLink", anchorHashLinkDirective );

  function anchorHashLinkDirective() {

    var directive = {
      restrict: "A",
      controller: anchorHashLinkController,
    };

    return directive;

  } // end anchorHashLinkDirective


  anchorHashLinkController.$inject = [
    "$scope",
    "$location",
    "$anchorScroll"
  ]
  function anchorHashLinkController( $scope, $location, $anchorScroll ) {

    $scope.scrollTo = scrollTo;

    /**
     * Scroll to the element with the specified id.
     * @param  id The id to which we want to link the element.
     */
    function scrollTo( id ) {

      var old = $location.hash();

      $location.hash(id);
      $anchorScroll();

      // Reset to old to keep any additional routing logic from kicking in.
      $location.hash(old);

    }

  } // end anchorHashLinkController


})();
