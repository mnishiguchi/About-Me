/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  var app = angular.module(
  "app",
  [
    "tabPanelComponents",
    "contactFormComponents",
    "movieSearchComponents",
    "blogComponents",
    "customFilters",
    "anchorHashLink",
  ]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  app.controller(
  "AppController",
  function( $scope ) {

    $scope.title = "Masatoshi Nishiguchi";

  }); // end controller


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  app.directive(
  'appHeader',
  function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: 'app/app.header.template.html',

      controllerAs: "vm",
      controller: [
      '$scope',
      function( $scope ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // Initial state.
        vm.css   = {};

        // Expose the public methods.
        vm.changeBackgroundColor = changeBackgroundColor;

        // Set the initial header color.
        vm.changeBackgroundColor();


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


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  app.directive(
  'appFooter', function () {

    return {
      restrict: "E",
      templateUrl: 'app/app.footer.template.html',
    }; // end return
  }); // end directive


})();
