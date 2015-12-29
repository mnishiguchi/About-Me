/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  // none.


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "appHeader", {

      templateUrl: "app/layout/appHeader.html",
      controller: appHeaderController

    });


  /**
   * appHeaderController
   */
  appHeaderController.$inject = [ ];
  function appHeaderController() {

    // Initial state.
    this.css = {};

    // Expose the public methods.
    this.changeBackground = changeBackground;

    // Set the initial header color.
    this.changeBackground();


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * Change a navbar's background color with a random color.
     */
    function changeBackground() {

      this.css[ "backgroundColor" ] = getRandomRGBA();

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

      templateUrl: "app/layout/appFooter.html"

    });


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "tabs", {

      templateUrl: 'app/layout/tabs.html',
      controller: tabsController,

    });


  tabsController.$inject = [ ];
  function tabsController() {

    // Initial state.
    this.tabIndex = 0;
    this.tabNames = [
      "About me",
      "Background",
      "Projects",
      "Blog",
      "Resources",
      "Contact"
    ];

    var routes = [
      "#/",
      "#/background",
      "#/project",
      "#/blog",
      "#/resources",
      "#/contact",
    ]

    // Expose the public methods.
    this.isActive  = function(index) { return (this.tabIndex === index); };
    this.getRoutes = function(index) { return routes[ index ]; }
    this.setTab    = function(index) { this.tabIndex = index; };

  } // end tabsController


})();
