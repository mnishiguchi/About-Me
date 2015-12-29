/**
 * app.config
 */
(function() {

  angular
    .module( "app" )
    .config( config )

  config.$inject = [
    "$routeProvider"
  ];
  function config( $routeProvider ) {

    var templateDir = "app/contents/";

    $routeProvider

      .when("/", {
          tabIndex: 0,
          title:       "About me",
          templateUrl: templateDir + "about_me.html",
          controller:  "pageController as page"
      })
      .when("/background", {
          tabIndex: 1,
          title:       "Background",
          templateUrl: templateDir + "background.html",
          controller:  "pageController as page"
      })
      .when("/project", {
          tabIndex: 2,
          title:       "Projects",
          templateUrl: templateDir + "projects.html",
          controller:  "pageController as page"
      })
      .when("/blog", {
          tabIndex: 3,
          title:       "Blog",
          templateUrl: templateDir + "blog.html",
          controller:  "blogController as page",
          resolve:     blogController.resolve
      })
      .when("/resources", {
          tabIndex: 4,
          title:       "Resources",
          templateUrl: templateDir + "resources.html",
          controller:  "pageController as page"
      })
      .when("/contact", {
          tabIndex: 5,
          title:       "Contact",
          templateUrl: templateDir + "contact.html",
          controller:  "pageController as page"
      })
      .otherwise({
          redirectTo: "/"
      });

  } // end config


  // ---
  // controllers
  // - Note: These controllers create scope for templates that are inserted into ng-view.
  // ---


  angular
    .module( "app" )
    .controller("blogController", blogController)

  blogController.resolve = {
    _blogPosts: function( blogService ) {
      return blogService.load();
    }
  };

  blogController.$inject = [
    "_blogPosts"
  ];
  function blogController( _blogPosts ) {

    this.posts = _blogPosts;

  } // end blogController


  angular
    .module( "app" )
    .controller("pageController", pageController)

  pageController.$inject = [ ];
  function pageController() {}


  // ---
  // run
  // ---


  angular
    .module( "app" )
    .run( run );

  run.$inject = [
    "$rootScope",  // To pass data to tabs.
    "$route"       // To access route data.
  ];
  function run( $rootScope, $route ) {

    var baseTitle   = " | Masatoshi Nishiguchi";

    $rootScope.$on( "$routeChangeSuccess", function() {

        // Set page title.
        document.title      = $route.current.title + baseTitle;

        // Update tabIndex that is used by tabs.
        $rootScope.tabIndex = $route.current.tabIndex;
    });

  } // end run


})();
