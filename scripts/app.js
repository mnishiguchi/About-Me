/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  angular.module( "mnApp", [ "tabPanelComponents",
                             "gravatarComponents",
                             "contactFormComponents",
                             "movieSearchComponents"
  ]);


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

          var red   = Math.floor(Math.random() * 255);
          var green = Math.floor(Math.random() * 255);
          var blue  = Math.floor(Math.random() * 255);

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

})();
