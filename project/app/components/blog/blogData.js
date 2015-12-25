/**
 * Defines blog related components.
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .factory( "blogDataService", blogDataService );

  blogDataService.$inject = [
    "$http",
    "$q"
  ];
  function blogDataService( $http, $q ) {

    var service = {

      loadBlogPosts: loadBlogPosts

    };
    return service;


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * I make a GET request to the blogger for my blog data.
     * @return A promise of this GET request.
     */
    function loadBlogPosts() {

      // Creates a Deferred object which represents a task which will finish in the future.
      // https://docs.angularjs.org/api/ng/service/$q
      var deferred = $q.defer();
      var url      = "https://www.googleapis.com/blogger/v3/blogs/" +
        "1351147858586990175/posts?key=AIzaSyAjac0SRkV6lY2-P1syIZ_oI74bCQyFcZU";

      $http.get( url )
      .then(
        function successCallback(response) {
          // NOTE: response.data.items is an array of blog posts.
          deferred.resolve( response.data.items );
        },
        function errorCallback(reason) {
          deferred.reject( "Error fetching movie data: " + reason);
        }
      ); // end then

      return deferred.promise;

    };

  } // end blogDataService


})();
