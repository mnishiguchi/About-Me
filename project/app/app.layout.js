/**
 * app.layout
 */
(function() {

  angular
    .module( "app" )
    .component( "appHeader", {

      templateUrl: "app/layout/appHeader.html",
      controller: appHeaderController

    });

  appHeaderController.$inject = [ ];
  function appHeaderController() {

    var vm  = this;

    // Initial state.
    vm.css = {};

    // Expose the public methods.
    vm.changeBackground = changeBackground;

    // Set the initial header color.
    vm.changeBackground();


    /**
     * Change a navbar's background color with a random color.
     */
    function changeBackground() {

      vm.css[ "backgroundColor" ] = getRandomRGBA();

    }


    /**
     * Generate an random RGBA string.
     * @return an RGBA string. e.g., rgba(100, 50, 25, 0.5)
     */
    function getRandomRGBA() {

      var red   = Math.floor( Math.random() * 255 );
      var green = Math.floor( Math.random() * 255 );
      var blue  = Math.floor( Math.random() * 255 );

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

      bindings: {
        index: "="
      },
      templateUrl: 'app/layout/tabs.html',
      controller:  tabsController,

    });

  tabsController.$inject = [  ];
  function tabsController() {

    var vm  = this;

    // Initial state.
    // none.

    var tabNames = [
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
    vm.isActive   = function(index) { return (vm.index === index); };
    vm.getTabName = function(index) { return tabNames[ index ]; }
    vm.getRoute   = function(index) { return routes[ index ]; }
    vm.setTab     = function(index) { vm.index = index; };

  } // end tabsController


})();
