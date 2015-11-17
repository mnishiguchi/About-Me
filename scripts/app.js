(function() {

  // Module declaration.
  angular.module( "myApp", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "myApp" )
  .controller(
    "AppController", function() {
      // Empty.
    }
  );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "myApp" )
  .directive(
    'simpleTabPanel', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: 'views/simple-tab-panel.html',

      controllerAs: "vm",
      controller: ['$scope', function( $scope ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // State
        // Hold the current position of the tabs, initially 1
        vm.tab = 1;

        // Set the tab position
        vm.setTab = function(tab) {
          vm.tab = tab;
        };

        // Check if a tab is active
        vm.isSet = function(tab) {
          return (vm.tab === tab);
        };

      }] // end controller
    }; // end return
  }); // end directive

})();
