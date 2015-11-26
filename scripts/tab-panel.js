/**
 * Defines tab-panel related components.
 */
(function() {

  // Module declaration.
  angular.module( "tabPanelComponents", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "tabPanelComponents" )
  .directive( 'tabPanel', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: '/views/tab-panel.html',

      controllerAs: "vm",
      controller: ['$scope', function( $scope ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // State
        vm.tab = 0;  // Tab position initially 0;
        vm.tabNames = [
          'Home',
          'About',
          'Tools',
          'Blog',
          'Movie search',
          'Contact'
        ];
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

})();
