/**
 * Defines acronym-search related components.
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

        vm.pendingTask;

        if ($scope.search === undefined) {
          $scope.search = "Ninja";
          fetch();
        }

        $scope.change = function() {
          if (vm.pendingTask) {
            clearTimeout(vm.pendingTask);
          }
          vm.pendingTask = setTimeout(fetch, 800);
        };

        function fetch() {

          alert("fetch() was called");

          $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
            .success(function(response) {
                $scope.details = response;
                alert("fetch success");
            }).error(function(data, status, headers, config) {
                alert("fetch fail");
            });
        }

      }] // end controller
    }; // end return
  }); // end directive

})();





