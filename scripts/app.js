/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  angular.module( "mnApp", [ "tabPanelComponents",
                             "gravatarComponents",
                             "contactFormComponents",
                             "movieSearchComponents",
                             "breakpointSetterComponents",
                             "acronymSearchComponents"
  ]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  // angular.module( "mnApp" )
  // .config(['$httpProvider', function ($httpProvider) {
  //   //Reset headers to avoid OPTIONS request (aka preflight)
  //   $httpProvider.defaults.headers.common = {};
  //   $httpProvider.defaults.headers.post = {};
  //   $httpProvider.defaults.headers.put = {};
  //   $httpProvider.defaults.headers.patch = {};
  // }]);

  // angular.module( "mnApp" )
  // .config(['$httpProvider', function ( $httpProvider ) {

  //   //Enable cross domain calls
  //   $httpProvider.defaults.useXDomain = true;
  //   //Remove the header used to identify ajax call that would prevent CORS from working
  //   delete $httpProvider.defaults.headers.common['X-Requested-With'];

  // }]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "mnApp" )
  .controller( "AppController", function( $scope ) {

  }); // end controller


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "mnApp" )
  .directive( 'siteHeader', function () {

    return {
      restrict: "E",
      scope: {},
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
        // PUBLIC METHODS.
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
