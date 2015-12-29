/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  angular
    .module( "app", [ "ngRoute" ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [ ];
  function AppController() { }


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .config( config )
    .run( run );


  // ---
  // config
  // ---


  config.$inject = [
    "$routeProvider"
  ];
  function config( $routeProvider ) {

    var baseTitle = "Masatoshi Nishiguchi";

    var titles = [
        "About me | "   + baseTitle,
        "Background | " + baseTitle,
        "Projects | "   + baseTitle,
        "Blog | "       + baseTitle,
        "Resources | "  + baseTitle,
        "Contact | "    + baseTitle,
    ];

    var urls = [
        "app/contents/_about_me.html",
        "app/contents/_background.html",
        "app/contents/_projects.html",
        "app/contents/_blog.html",
        "app/contents/_resources.html",
        "app/contents/_contact.html",
    ];

    $routeProvider.

      when("/", {
        title :      titles[0],
        templateUrl: urls[0],
        controller: function() {}
      })
      .when("/background", {
        title :      titles[1],
        templateUrl: urls[1],
        controller: function() {}
      })
      .when("/project", {
        title :      titles[2],
        templateUrl: urls[2],
        controller: function() {}
      })
      .when("/blog", {
        title :      titles[3],
        templateUrl: urls[3],
        controller: function() {}
      })
      .when("/resources", {
        title :      titles[4],
        templateUrl: urls[4],
        controller: function() {}
      })
      .when("/contact", {
        title :      titles[5],
        templateUrl: urls[5],
        controller: function() {}
      })
      .otherwise({
        redirectTo: "/"
      });
  }


  // ---
  // run
  // ---


  run.$inject = [
    "$rootScope",
    "$route"
  ];
  function run( $rootScope, $route ) {

    $rootScope.$on( "$routeChangeSuccess", function() {
        document.title = $route.current.title;
    });

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
