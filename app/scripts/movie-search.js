/**
 * Defines movie-search related components.
 * Fetches movie information based on the search term that is a full movie name.
 *
 * Example API URL: http://www.omdbapi.com/?t=ninja&tomatoes=true&plot=full
 */
(function() {

  // Module declaration.
  angular.module( "movieSearchComponents", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "movieSearchComponents" )
  .directive(
  'movieSearch', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "/views/movie-search.html",

      controllerAs: "vm",
      controller: ['$scope', '$http', '$log', function( $scope, $http, $log ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // Constants.
        var OMDB_BASE_URL = "http://www.omdbapi.com/";

        // Initial state.
        vm.searchKey = "Trading places";
        vm.movieInfo = {};
        vm.loading   = false;

        // Expose the public methods.
        vm.fetchData = fetchData;

        // Fetch the initial data.
        fetchData();


        // ---
        // PUBLIC METHODS.
        // ---


        // I fetch movie info from a public API.
        function fetchData() {

          // Clear the info if there is no search key.
          if (vm.searchKey === "") {
            vm.movieInfo = {};
            return;
          }

          // GET request for the info.
          // https://docs.angularjs.org/api/ng/service/$http
          vm.loading = true;
          var url = OMDB_BASE_URL + "?t=" + vm.searchKey + "&tomatoes=true&plot=full"
          $http.get(url)
          .then(
            function successCallback(response) {
              vm.loading   = false;
              vm.movieInfo = response.data;
              $log.info( response.data );
            },
            function errorCallback(response) {
              vm.loading = false;
              $log.error( response.statusText );
            }
          ); // end then
        } // end fetchData

      }] // end controller
    }; // end return
  }); // end directive


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "movieSearchComponents" )
  .directive(
  'movieInfo', function () {

    return {
      restrict: "E",
      scope: {
        info: "="
      },
      templateUrl: "/views/movie-info.html",

      controllerAs: "vm",
      controller: ['$scope', '$http', '$log', function( $scope, $http, $log ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // Constants.
        var POSTER_BASE_URL  = "http://imdb.wemakesites.net/api/1.0/img/";
        var PLACEHOLDER_URL  = "http://placehold.it/150x220&text=N/A";
        var AMAZON_BASE_URL  = "http://www.amazon.in/s/ref=nb_sb_noss_1/";
        var YOUTUBE_BASE_URL = "https://www.youtube.com/results/";

        // Initial state.
        // None

        // Expose the public methods.
        vm.getMoviePosterUrl = getMoviePosterUrl;
        vm.getYouTubeUrl     = getYouTubeUrl;
        vm.getAmazonUrl      = getAmazonUrl;


        // ---
        // PUBLIC METHODS.
        // ---


        // I provide an URL for a poster based on the current info.
        // If the current info is empty, I provide a placeholder.
        function getMoviePosterUrl() {

            return (props.info.Poster == 'N/A')
                    ? PLACEHOLDER_URL
                    : POSTER_BASE_URL + '?url=' + props.info.Poster;
        }

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

})();