/**
 * Defines tab-panel related components.
 */
(function() {

  // Module declaration.
  angular.module( "tabPanelComponents", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "tabPanelComponents" )
  .directive(
  'tabPanel', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: '/views/tab-panel.html',

      controllerAs: "vm",
      controller: [
      '$scope',
      "$window",
      function( $scope, $window ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // State
        vm.tab = 0;  // Tab position initially 0;
        vm.tabNames = [
          'Home',
          'About',
          'Tools',
          'Blog',
          'Projects',
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

        // Expose the public methods.
        vm.setTab = setTab;
        vm.isSet  = isSet;


        // ---
        // PUBLIC METHODS.
        // ---


        /**
         * Set the tab position and the page title.
         * @param tab  A tab index.
         */
        function setTab(tab) {
          vm.tab = tab;

          // Set the page title via $window.
          $window.document.title = vm.tabNames[ tab ] + " | Masatoshi Nishiguchi";

        };


        /**
         * Check if a tab is active
         * @param  tab  A tab index.
         * @return true if the specify tab index is currently set, else false.
         */
        function isSet(tab) {

          return (vm.tab === tab);

        };

      }] // end controller
    }; // end return
  }); // end directive

})();
