/**
 * breakpointSetter
 */
(function() {

  // Module declaration.
  angular.module( "breakpointSetterComponents", []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "breakpointSetterComponents" )
  .directive('breakpointSetter', function( $window ) {

    // The range of medium size.
    var breakpoint_upper = 770;
    var breakpoint_lower = 320;

    return function(scope, elem, attrs) {

      // Listen for window resizing.
      angular.element( $window ).on('resize', function() {

        // Update the isLarge variable.
        scope.$apply(function()  {
          var screenWidth    = $window.innerWidth;
          scope.isLarge      = (screenWidth > breakpoint_upper) ? true : false;
          scope.isExtraSmall = (screenWidth < breakpoint_lower) ? true : false;
        })
      });
    }; // end return
  }); // end directive

})();
