/**
 * Fetches movie information based on the search term that is a full movie name.
 * http://www.omdbapi.com/
 */
(function() {

  // Module declaration.
  var module = angular.module(
  "movieDataService",
  []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.factory(
  'movieDataService',
  [
    "$http",
    "$q",
    function( $http, $q ) {

      // The service object.
      var service = {};

      // Add properties to the service.
      service.fetchData = fetchData;


      // ---
      // PUBLIC METHODS.
      // ---


      /**
       * I make a GET request to the Open Movie Database for a movie data.
       * @param  title  A search key.
       * @return A promise of this GET request.
       */
      function fetchData(title) {

        // Creates a Deferred object which represents a task which will finish in the future.
        // https://docs.angularjs.org/api/ng/service/$q
        var deferred = $q.defer();
        var url      = makeUrl( title );

        $http.get( url )
        .then(
          function successCallback(response) {
            deferred.resolve( response.data );
          },
          function errorCallback(reason) {
            deferred.reject( "Error fetching movie data: " + reason);
          }
        ); // end then

        return deferred.promise;

      };


      // ---
      // PRIVATE METHODS.
      // ---


      /**
       * I make a URL for requesting movie data of the specified movie title.
       * @param title
       * @return A url for requesting data of the movie specified by title.
       */
      function makeUrl(title) {

        var OMDB_BASE_URL = "http://www.omdbapi.com/?plot=full&t=";
        return OMDB_BASE_URL + title;

      };


      // Finally return the service object.
      return service;

    } // end function
  ]); // end factory

})();
