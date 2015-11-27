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
  .directive( 'movieSearch', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "/views/movie-search.html",

      controllerAs: "vm",
      controller: ['$scope', '$http', function( $scope, $http ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // Initial state
        vm.search      = "";
        vm.movieInfo   = {};
        vm.searching   = false;

        // Expose the public methods.
        vm.fetchInfo         = fetchInfo;
        vm.getMoviePosterUrl = getMoviePosterUrl;
        vm.getYouTubeUrl     = getYouTubeUrl;
        vm.getAmazonUrl      = getAmazonUrl;


        // ---
        // PUBLIC METHODS.
        // ---


        // I provide an URL for a poster based on the current info.
        // If the current info is empty, I provide a placeholder.
        function getMoviePosterUrl() {

            return (vm.movieInfo.Poster == 'N/A')
                    ? 'http://placehold.it/150x220&text=N/A'
                    : 'http://imdb.wemakesites.net/api/1.0/img/?url=' + vm.movieInfo.Poster;
        }

        // I provide an URL for a amazon based on the current info.
        function getAmazonUrl() {

            return "http://www.amazon.in/s/ref=nb_sb_noss_1" +
                   "?url=search-alias%3Ddvd&field-keywords=" + vm.movieInfo.Title;
        }

        // I provide an URL for a YouTube based on the current info.
        function getYouTubeUrl() {

            return "https://www.youtube.com/results?search_query=" + vm.movieInfo.Title;
        }

        // I fetch movie info from a public API.
        function fetchInfo() {

          // Clear the info if there is no search key.
          if (vm.search === "") {
            vm.movieInfo = {};
            return;
          }

          // GET request for the info.
          vm.searching = true;
          var promise = $http.get("http://www.omdbapi.com/?t=" + vm.search
                        + "&tomatoes=true&plot=full");

          promise.success(function(response) {
              vm.searching = false;
              vm.movieInfo = response;
          });

          promise.error(function(data, status, headers, config) {
              vm.searching = false;
              alert("Error fetching the info");
          });
        }

      }] // end controller
    }; // end return
  }); // end directive

})();





