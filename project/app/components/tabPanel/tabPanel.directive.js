/**
 * Defines tab-panel related components.
 */
(function() {

  // Module declaration.
  var module = angular.module( "tabPanelComponents", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.directive(
  'tabPanel',
  function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: 'app/components/tabPanel/tabPanel.template.html',

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
          "Things I've Learned",
          "Projects",
          'Blog',
          'Contact'
        ];
        vm.contentUrls = [
          "app/components/tabPanel/panel_1.template.html",
          "app/components/tabPanel/panel_2.template.html",
          "app/components/tabPanel/panel_3.template.html",
          "app/components/tabPanel/panel_4.template.html",
          "app/components/tabPanel/panel_5.template.html",
          "app/components/tabPanel/panel_6.template.html",
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
