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

    var templateDir = "app/contents/";

    $routeProvider

      .when("/", {
        tabIndex: 0,
        title:       "About me",
        templateUrl: templateDir + "about_me.html",
        controller:  function() {}
      })
      .when("/background", {

        tabIndex: 1,
        title:       "Background",
        templateUrl: templateDir + "background.html",
        controller:  function() {}
      })
      .when("/project", {

        tabIndex: 2,
        title:       "Projects",
        templateUrl: templateDir + "projects.html",
        controller:  function() {}
      })
      .when("/blog", {

        tabIndex: 3,
        title:       "Blog",
        templateUrl: templateDir + "blog.html",
        controller:  "blogController as blog",
        resolve: {
          blogPosts: function( blogService ) {

            return blogService.load();

          }
        }
      })
      .when("/resources", {

        tabIndex: 4,
        title:       "Resources",
        templateUrl: templateDir + "resources.html",
        controller:  function() {}
      })
      .when("/contact", {

        tabIndex: 5,
        title:       "Contact",
        templateUrl: templateDir + "contact.html",
        controller:  function() {}
      })
      .otherwise({
        redirectTo: "/"
      });

  } // end config


  // ---
  // blogService
  // ---


  angular
    .module( "app" )
    .factory( "blogService", blogService )

  blogService.$inject = [
    "$http"
  ];
  function blogService( $http ) {

    var service = {

      load: load

    };
    return service;


    /**
     * Make a GET request to the blogger for blog data.
     * @return A promise of this GET request.
     */
    function load() {

      var url = "https://www.googleapis.com/blogger/v3/blogs/" +
        "1351147858586990175/posts?key=AIzaSyAjac0SRkV6lY2-P1syIZ_oI74bCQyFcZU";

      var promise = $http.get( url ).then(
          function successCallback( response ) {
            return response.data.items;
          },
          function errorCallback( reason ) {
            console.log( "Error fetching movie data: " + reason);
          }
      ); // end promise

      return promise;
    };

  } // end blogService


  // ---
  // blogController
  // ---


  angular
    .module( "app" )
    .controller("blogController", blogController)

  blogController.$inject = [
    "blogPosts"
  ];
  function blogController( blogPosts ) {

    this.posts = blogPosts;

  } // end blogController


  // ---
  // run
  // ---


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
