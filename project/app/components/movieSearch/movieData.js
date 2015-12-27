/**
 * Fetches movie information based on the search term that is a full movie name.
 * http://www.omdbapi.com/
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .factory( "movieDataService", movieDataService );

  movieDataService.$inject = [
    "$http",
    "$q"
  ];
  function movieDataService( $http, $q ) {

    var service = {

      fetchData: fetchData

    };
    return service;


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * Make a GET request to the Open Movie Database for a movie data.
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
          // NOTE: response.data is an object of movie data.
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
     * Make a URL for requesting movie data of the specified movie title.
     * @param title
     * @return A url for requesting data of the movie specified by title.
     */
    function makeUrl(title) {

      return "http://www.omdbapi.com/?plot=full&t=" + title;

    };

  } // end movieDataService


})();
