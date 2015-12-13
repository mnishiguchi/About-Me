/**
 * Defines movie-search related components.
 * Fetches movie information based on the search term that is a full movie name.
 * http://www.omdbapi.com/
 */
(function() {

  // Module declaration.
  var module = angular.module(
  "movieSearchComponents",
  [
    "movieDataService"
  ]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.directive(
  'movieSearch',
  function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "app/components/movieSearch/movieSearch.template.html",

      controllerAs: "vm",
      controller:
      [
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


          /**
           * I fetch movie data based on the searchKey.
           * The movieDataService is required.
           */
          function fetchData() {

            vm.loading = true;
            movieDataService.fetchData( vm.searchKey )
            .then(
              function successCallback(movieInfo) {
                vm.loading   = false;
                vm.movieInfo = movieInfo;
              },
              // https://docs.angularjs.org/api/ng/service/$log
              function errorCallback(reason) {
                vm.loading = false;
                $log.error(reason);
              }
            ); // end then
          };

        } // end function
      ] // end controller
    }; // end return
  }); // end directive


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.directive(
  'movieInfo',
  function () {

    return {
      restrict: "E",
      scope: {
        info: "="
      },
      templateUrl: "app/components/movieSearch/movieInfo.template.html",

      controllerAs: "vm",
      controller:
      [
        '$scope',
        '$http',
        '$log',
        function( $scope, $http, $log ) {

          var vm    = this;
          var props = $scope.props = $scope;  // Alias for $scope

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

          //     var PLACEHOLDER_URL  = "http://placehold.it/150x220&text=N/A";
          //     var POSTER_BASE_URL  = "http://imdb.wemakesites.net/api/1.0/img/";

          //     return (props.info.Poster == 'N/A')
          //             ? PLACEHOLDER_URL
          //             : POSTER_BASE_URL + '?url=' + props.info.Poster;
          // }


          /**
           * @return An URL for Amazon based on the current info.
           */
          function getAmazonUrl() {

            var AMAZON_BASE_URL  = "http://www.amazon.com/s/ref=nb_sb_noss_1/?url=search-alias%3Ddvd&field-keywords=";
            return AMAZON_BASE_URL + props.info.Title;
          }


          /**
           * @return An URL for YouTube based on the current info.
           */
          function getYouTubeUrl() {

            var YOUTUBE_BASE_URL = "https://www.youtube.com/results/?search_query=";
            return YOUTUBE_BASE_URL + props.info.Title;
          }

        } // end function
      ] // end controller
    }; // end return
  }); // end directive

})();
