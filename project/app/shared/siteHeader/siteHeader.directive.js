/**
 *
 */
(function() {

  // Module declaration.
  var module = angular.module(
  "siteHeader",
  []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //



  module.directive(
  'siteHeader',
  function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: 'app/shared/siteHeader/siteHeader.template.html',

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

})();
