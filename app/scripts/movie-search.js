/**
 * Defines movie-search related components.
 * Fetches movie information based on the search term that is a full movie name.
 * http://www.omdbapi.com/
 */
(function() {

  // Module declaration.
  var module = angular.module( "movieSearchComponents", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module
  .directive(
  'movieSearch', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "/views/movie-search.html",

      controllerAs: "vm",
      controller: [
      '$scope',
      '$http',
      '$log',
      'movieDataService',
      function( $scope, $http, $log, movieDataService ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // Initial state.
        vm.searchKey = "";
        vm.movieInfo = {};
        vm.loading   = false;

        // Expose the public methods.
        vm.fetchData = fetchData;


        // ---
        // PUBLIC METHODS.
        // ---


        function fetchData() {

          vm.loading = true;
          movieDataService.fetchData( vm.searchKey )
          .then(
            function successCallback(response) {
              vm.loading = false;
              vm.movieInfo = response;
            },
            // https://docs.angularjs.org/api/ng/service/$log
            function errorCallback(reason) {
              vm.loading = false;
              $log.error(reason);
            }
          ); // end then
        };

      }] // end controller
    }; // end return
  }); // end directive


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module
  .directive(
  'movieInfo', function () {

    return {
      restrict: "E",
      scope: {
        info: "="
      },
      templateUrl: "/views/movie-info.html",

      controllerAs: "vm",
      controller: [
      '$scope', '$http', '$log',
      function( $scope, $http, $log ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // Constants.
        // var POSTER_BASE_URL  = "http://imdb.wemakesites.net/api/1.0/img/";
        var PLACEHOLDER_URL  = "http://placehold.it/150x220&text=N/A";
        var AMAZON_BASE_URL  = "http://www.amazon.in/s/ref=nb_sb_noss_1/";
        var YOUTUBE_BASE_URL = "https://www.youtube.com/results/";

        // Initial state.
        // None

        // Expose the public methods.
        // vm.getMoviePosterUrl = getMoviePosterUrl;
        vm.getYouTubeUrl     = getYouTubeUrl;
        vm.getAmazonUrl      = getAmazonUrl;


        // ---
        // PUBLIC METHODS.
        // ---


        // I provide an URL for a poster based on the current info.
        // If the current info is empty, I provide a placeholder.
        // function getMoviePosterUrl() {

        //     return (props.info.Poster == 'N/A')
        //             ? PLACEHOLDER_URL
        //             : POSTER_BASE_URL + '?url=' + props.info.Poster;
        // }

        // I provide an URL for a amazon based on the current info.
        function getAmazonUrl() {

          return AMAZON_BASE_URL + "?url=search-alias%3Ddvd&field-keywords="
                                   + props.info.Title;
        }

        // I provide an URL for a YouTube based on the current info.
        function getYouTubeUrl() {

          return YOUTUBE_BASE_URL + "?search_query=" + props.info.Title;
        }

      }] // end controller
    }; // end return
  }); // end directive


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module
  .factory(
  'movieDataService',
  function($http, $q) {

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

  }); // end factory

})();
