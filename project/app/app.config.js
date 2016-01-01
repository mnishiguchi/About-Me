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

    $routeProvider

      .when("/", {
          tabIndex: 0,
          title:       "About me",
          templateUrl: "app/partials/about_me.html",
          controller:  "PageController as page"
      })
      .when("/background", {
          tabIndex: 1,
          title:       "Background",
          templateUrl: "app/partials/background.html",
          controller:  "PageController as page"
      })
      .when("/project", {
          tabIndex: 2,
          title:       "Projects",
          templateUrl: "app/partials/projects.html",
          controller:  "PageController as page"
      })
      .when("/blog", {
          tabIndex: 3,
          title:       "Blog",
          templateUrl: "app/partials/blog.html",
          controller:  "BlogController as page",
          resolve:     BlogController.resolve
      })
      .when("/resources", {
          tabIndex: 4,
          title:       "Resources",
          templateUrl: "app/partials/resources.html",
          controller:  "PageController as page"
      })
      .when("/contact", {
          tabIndex: 5,
          title:       "Contact",
          templateUrl: "app/partials/contact.html",
          controller:  "PageController as page"
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
    .controller("BlogController", BlogController)

  BlogController.resolve = {
    _blogPosts: function( BlogService ) {
      return BlogService.getData();
    }
  };

  BlogController.$inject = [
    "_blogPosts"
  ];
  function BlogController( _blogPosts ) {

    this.posts = _blogPosts;

  } // end BlogController


  angular
    .module( "app" )
    .controller("PageController", PageController)

  PageController.$inject = [ ];
  function PageController() {}


  // ---
  // run
  // ---


  angular
    .module( "app" )
    .run( run );

  run.$inject = [
    "$rootScope",  // To pass data to tabs.
    "$route",      // To access route data.
    "$window"      // To access window.document
  ];
  function run( $rootScope, $route, $window ) {

    // Set isStateLoading flag.
    // $rootScope.$on( "$routeChangeStart", function() {
    //   $rootScope.isStateLoading = true;
    // });

    var baseTitle   = " | Masatoshi Nishiguchi";

    $rootScope.$on( "$routeChangeSuccess", function() {

      // Set page title.
      if ( $route.current.title ) {
        $window.document.title = $route.current.title + baseTitle;
      }

      // Update tabIndex that is used by tabs.
      $rootScope.tabIndex = $route.current.tabIndex;

      // Reset isStateLoading flag.
      // $rootScope.isStateLoading = false;
    });

  } // end run


})();
