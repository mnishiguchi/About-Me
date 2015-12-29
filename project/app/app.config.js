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
    .config( config )
    .run( run );


  // ---
  // config
  // ---


  config.$inject = [
    "$routeProvider"
  ];
  function config( $routeProvider ) {

    var baseTitle   = " | Masatoshi Nishiguchi";
    var templateDir = "app/contents/";

    $routeProvider.

      when("/", {
        title :      "About me" + baseTitle,
        templateUrl: templateDir + "_about_me.html",
        controller:  function() {}
      })
      .when("/background", {
        title :      "Background" + baseTitle,
        templateUrl: templateDir + "_background.html",
        controller: function() {}
      })
      .when("/project", {
        title :      "Projects" + baseTitle,
        templateUrl: templateDir + "_projects.html",
        controller: function() {}
      })
      .when("/blog", {
        title :      "Blog" + baseTitle,
        templateUrl: templateDir + "_blog.html",
        controller: function() {}
      })
      .when("/resources", {
        title :      "Resources" + baseTitle,
        templateUrl: templateDir + "_resources.html",
        controller: function() {}
      })
      .when("/contact", {
        title :      "Contact" + baseTitle,
        templateUrl: templateDir + "_contact.html",
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


})();
