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




  function AcronymApiService( $http ) {
    this.$http    = $http;
    this.url      = "/acronym";
    //this.BASE_URL = "http://www.nactem.ac.uk/software/acromine/dictionary.py/";
  };


  // I fetch acronym data from the API.
  // Inject me the into the controller which will display this information.
  angular.module( "acronymSearchComponents" )
  .service( 'acronymApiService', AcronymApiService );

  // ---
  // PUBLIC METHODS.
  // ---


  /**
   * @param  searchKey
   * @return promise for controller to use.
   */
  AcronymApiService.prototype.getAcronym = function(searchKey) {

    return this.$http.get( this.url + "?sf=" + searchKey );
  };


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "acronymSearchComponents" )
  .directive( 'acronymSearch', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "/views/acronym-search.html",

      controllerAs: "vm",
      controller: ['$scope', '$log', 'acronymApiService',
                  function( $scope, $log, acronymApiService ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // Initial state
        vm.searchKey   = "";
        vm.acronymInfo = [];
        vm.loading     = false;

        // Expose the public methods.
        vm.fetchData = fetchData;


        // ---
        // PUBLIC METHODS.
        // ---


        // I fetch acronym info from a public API.
        function fetchData() {

          // Clear the info if there is no search key.
          if (vm.searchKey === "") {
            vm.acronymInfo = [];
            return;
          }

          // GET request for the info.
          vm.loading = true;
          acronymApiService.getAcronym(vm.searchKey)
          .then(
            function successCallback(response) {
              vm.loading     = false;
              vm.acronymInfo = response.data[0].lfs;
              $log.info( response.data );
            },
            function errorCallback(response) {
              vm.loading = false;
              alert("Error fetching data");
              $log.error( response.statusText );
            }
          ); // end then
        } // end fetchData

      }] // end controller
    }; // end return
  }); // end directive

})();
