/**
 * Defines acronym-search related components.
 * Fetches acronym information based on the search term that is a full acronym name.
 *
 * Documentation: http://www.nactem.ac.uk/software/acromine/rest.html
 * Example API URL: http://www.nactem.ac.uk/software/acromine/dictionary.py?sf=API
 */

/*
  Data structure of the response:
    data[ 0 ].sf
    data[ 0 ].lfs[ i ].lf
    data[ 0 ].lfs[ i ].freq
    data[ 0 ].lfs[ i ].since
    data[ 0 ].lfs[ i ].vars.[ j ].lf
    data[ 0 ].lfs[ i ].vars.[ j ].freq
    data[ 0 ].lfs[ i ].vars.[ j ].since

  Empty result: [ ]
 */


(function() {

  // Module declaration.
  angular.module( "acronymSearchComponents", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "acronymSearchComponents" )
  .directive( 'acronymSearch', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "/views/acronym-search.html",

      controllerAs: "vm",
      controller: ['$scope', '$http', function( $scope, $http ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // Initial state
        vm.searchKey   = "";
        vm.acronymInfo = [];
        vm.searching   = false;

        // Expose the public methods.
        vm.fetchInfo = fetchInfo;


        // ---
        // PUBLIC METHODS.
        // ---


        // I fetch acronym info from a public API.
        function fetchInfo() {

          // Clear the info if there is no search key.
          if (vm.searchKey === "") {
            vm.acronymInfo = [];
            return;
          }

          // GET request for the info.
          vm.searching = true;
          var promise = $http.get("http://www.nactem.ac.uk/software/acromine/dictionary.py?sf="
                        + vm.searchKey);

          promise.then(
            function successCallback(response) {
              vm.searching   = false;
              vm.acronymInfo = response.data[0].lfs;
            },
            function errorCallback(response) {
              vm.searching = false;
              alert("Error fetching data");
            }
          ); // end then
        } // end fetchInfo

      }] // end controller
    }; // end return
  }); // end directive

})();
