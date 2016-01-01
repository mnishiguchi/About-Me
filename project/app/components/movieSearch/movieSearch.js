/**
 * moviesearch
 * Fetches movie information based on the search term that is a full movie name.
 * http://www.omdbapi.com/
 */
(function() {

  angular
    .module( "app" )
    .component( "movieSearch", {

      templateUrl: "app/components/movieSearch/movieSearch.html",
      controller:  MovieSearchController,

    });

  MovieSearchController.$inject = [
    "$scope",
    "MovieDataService"
  ];
  function MovieSearchController( $scope, MovieDataService ) {

    var vm    = this;

    // Initial state.
    vm.loading   = false;
    vm.movieInfo = {};
    vm.searchKey = "";
    vm.topID     = "main-container";  // For anchorHashLink

    // Expose the public methods.
    vm.getData   = getData;
    vm.clearData = clearData;


    /**
     * Fetch movie data based on the searchKey.
     * The MovieDataService is required.
     */
    function getData() {

      vm.loading = true;

      MovieDataService.getData( vm.searchKey )
      .then   ( function(movieInfo) { vm.movieInfo = movieInfo; } )
      .finally( function()          { vm.loading   = false; } );

    } // end getData


    /**
     * Clear movie data and search key.
     */
    function clearData() {

      vm.searchKey = "";
      vm.movieInfo = {};

    }

  } // end MovieSearchController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "movie", {

      bindings: {
        info: "="  // bindToController
      },
      templateUrl: "app/components/movieSearch/movie.html",
      controller:  movieController,
    });

  movieController.$inject = [
    "$scope"
  ];
  function movieController( $scope ) {

    var vm  = this;

    // Initial state.
    vm.isDataAvailable = false;

    // Expose the public methods.
    vm.getAmazonUrl  = getAmazonUrl;
    vm.getPosterUrl  = getPosterUrl;
    vm.getYouTubeUrl = getYouTubeUrl;

    // Keep watch on vm.info.Response then update vm.isDataAvailable.
    // https://docs.angularjs.org/api/ng/type/$rootScope.Scope
    $scope.$watch(
      function() { return vm.info.Response; },
      function(newVal, oldVal) {

        if ( newVal !== oldVal ) {
          vm.isDataAvailable = (vm.info.Response === 'True');
        }

      }
    ); // end $scope.$watch


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * @return An URL for a poster based on the current info,
     *         a placeholder URL if the current info is empty.
     */
    function getPosterUrl() {

        return (vm.info.Poster == 'N/A')
                ? "http://placehold.it/200x200&text=N/A" // Placeholder.
                : vm.info.Poster;

    }


    /**
     * @return An URL for Amazon based on the current info.
     */
    function getAmazonUrl() {

      return "http://www.amazon.com/s/ref=nb_sb_noss_1/?url=search-alias%3Ddvd&field-keywords=" + vm.info.Title;

    }


    /**
     * @return An URL for YouTube based on the current info.
     */
    function getYouTubeUrl() {

      return "https://www.youtube.com/results/?search_query=" + vm.info.Title;

    }

  } // end movieController


})();
