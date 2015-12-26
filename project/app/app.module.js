/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  angular
    .module( "app", [ ]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [ "$scope" ];

  function AppController( $scope ) {

    // Currently empty.

  }


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "app" )
  .directive( "appHeader", appHeaderDirective );

  function appHeaderDirective() {

    var directive = {
      restrict: "E",
      scope: {},
      templateUrl: "app/app.header.template.html",
      controller: appHeaderController,
      controllerAs: "vm"
    };

    return directive;

  } // end appHeaderDirective


  /**
   * appHeaderController
   */
  appHeaderController.$inject = [
    "$scope"
  ];
  function appHeaderController( $scope ) {

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


    /**
     * Change a navbar's background color with a random color.
     */
    function changeBackgroundColor() {

      vm.css[ "backgroundColor" ] = getRandomRGBA();

    }


    // ---
    // PRIVATE METHODS.
    // ---


    /**
     * Generate an random RGBA string.
     * @return an RGBA string. e.g., rgba(100, 50, 25, 0.5)
     */
    function getRandomRGBA() {

      var red   = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue  = Math.floor(Math.random() * 255);

      return 'rgba(' + red + ',' + green + ',' + blue + ',0.5)';

    }

  } // end appHeaderController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .directive(
    "appFooter", appFooterDirective);

  function appFooterDirective() {

    var directive = {
      restrict: "E",
      templateUrl: "app/app.footer.template.html",
    };

    return directive;

  } // end appFooterDirective


})();
