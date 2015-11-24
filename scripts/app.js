/**
 *
 *
 */
(function() {

  // Module declaration.
  angular.module( "mnApp", [ "tabPanelComponents",
                             "gravatarComponents",
                             "contactFormComponents" ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "mnApp" )
  .controller( "AppController", function( $scope ) {

    }
  );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "mnApp" )
  .directive( 'siteHeader', function () {

    return {
      restrict: "E",
      templateUrl: '/views/header.html',
      controllerAs: "vm",
      controller: ['$scope', function( $scope ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // State
        vm.css = {};

        // Expose the public methods.
        vm.changeBackgroundColor = changeBackgroundColor;


        // ---
        // PUBLIC METHODS.
        // ---


        // I change a navbar's background color with a random color.
        function changeBackgroundColor() {
          vm.css["backgroundColor"] = getRandomRGBA();
        }


        // ---
        // PRIVATE METHODS.
        // ---


        // I generate a random RGBA string. e.g., rgba(100, 50, 25, 0.5)
        function getRandomRGBA() {

          // Generate random values for RGB
          var red   = Math.floor(Math.random() * 255);
          var green = Math.floor(Math.random() * 255);
          var blue  = Math.floor(Math.random() * 255);

          // Prepare a CSS RGBA value as a string
          return 'rgba(' + red + ',' + green + ',' + blue + ',0.5)';

        }

      }] // end controller
    }; // end return
  }); // end directive


  angular.module( "mnApp" )
  .directive( 'siteFooter', function () {

    return {
      restrict: "E",
      templateUrl: '/views/footer.html',
    }; // end return
  }); // end directive


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


})();
