(function() {

  // Module declaration.
  angular.module( "mnApp", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "mnApp" )
  .controller(
    "AppController", function() {
      // Empty.
    }
  );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "mnApp" )
  .directive(
    'tabPanel', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: 'views/tab-panel.html',

      controllerAs: "vm",
      controller: ['$scope', function( $scope ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // State
        vm.tab = 0;  // Tab position initially 0;
        vm.tabNames = ['Home', 'About', 'Tools', 'Hobbies', 'Code', 'Contact'];
        vm.contentUrls = [
          "/views/content-1.html",
          "/views/content-2.html",
          "/views/content-3.html",
          "/views/content-4.html",
          "/views/content-5.html",
          "/views/content-6.html",
        ];

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


  angular.module( "mnApp" )
  .directive(
    'siteHeader', function () {

    return {
      restrict: "E",
      templateUrl: '/views/header.html',
    }; // end return
  }); // end directive


  angular.module( "mnApp" )
  .directive(
    'siteFooter', function () {

    return {
      restrict: "E",
      templateUrl: '/views/footer.html',
    }; // end return
  }); // end directive


})();
