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
  var module = angular.module(
  "anchorHashLink",
  []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.directive(
  'anchorHashLink',
  function() {

    return {
      restrict: "A",

      controller:
      [
        '$scope',
        '$location',
        '$anchorScroll',
        function( $scope, $location, $anchorScroll ) {

          /**
           * I scroll to the element with the specified id.
           * @param  id The id to which we want to link the element.
           */
          $scope.scrollTo = function( id ) {

            var old = $location.hash();
            $location.hash(id);
            $anchorScroll();

            // Reset to old to keep any additional routing logic from kicking in.
            $location.hash(old);
          }
        }

      ] // end controller
    }; // end return
  }); // end directive

})();
