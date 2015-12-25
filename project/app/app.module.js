/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  angular
    .module( "app", [ ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [ ];
  function AppController() {

    // Currently empty.

  }


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "appHeader", {

      templateUrl: "app/app.header.html",
      controller: appHeaderController

    });


  /**
   * appHeaderController
   */
  appHeaderController.$inject = [ ];
  function appHeaderController() {

    var vm = this;

    // Initial state.
    vm.css = {};

    // Expose the public methods.
    vm.changeBackground = changeBackground;

    // Set the initial header color.
    vm.changeBackground();


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * Change a navbar's background color with a random color.
     */
    function changeBackground() {

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
    .component( "appFooter", {

      templateUrl: "app/app.footer.html"

    });


})();
