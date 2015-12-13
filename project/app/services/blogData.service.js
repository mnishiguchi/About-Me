/**
 * Defines blog related components.
 */
(function() {

  // Module declaration.
  var module = angular.module(
  "blogDataService",
  []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.factory(
  'blogDataService',
  [
    "$http",
    "$q",
    function( $http, $q ) {

      // The service object.
      var service = {};

      // Add properties to the service.
      service.loadBlogPosts = loadBlogPosts;


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


      // Finally return the service object.
      return service;

    } // end function
  ]); // end factory

})();
