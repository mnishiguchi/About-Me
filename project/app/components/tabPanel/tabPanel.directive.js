/**
 * Defines tab-panel related components.
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .directive( "tabPanel", tabPanelDirective );

  function tabPanelDirective() {

    var directive = {
      restrict: "E",
      scope: {},
      templateUrl: 'app/components/tabPanel/tabPanel.template.html',
      controller: tabPanelController,
      controllerAs: "vm",
    };
    return directive;

  }; // end tabPanelDirective


  tabPanelController.$inject = [
    "$window",  // For $window.document
    "appInfo"
  ];
  function tabPanelController( $window, appInfo ) {

    var vm    = this;

    // State
    vm.tabIndex    = 0;  // Tab position initially 0;
    vm.tabNames    = appInfo.tabTitles;
    vm.contentUrls = appInfo.tabUrls;

    // Expose the public methods.
    vm.isSet    = isSet;
    vm.setTab   = setTab;
    vm.setTitle = setTitle;


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * Set the tab position.
     * @param tabIndex
     */
    function setTab(tabIndex) {

      vm.tabIndex = tabIndex;

    };


    /**
     * Check if a tab is active
     * @param tabIndex
     * @return true if the specify tab index is currently set, else false.
     */
    function isSet(tabIndex) {

      return (vm.tabIndex === tabIndex);

    };


    /**
     * Set the page title.
     * @param tabIndex
     */
    function setTitle(tabIndex) {

      // Set the page title via $window.
      $window.document.title = vm.tabNames[ tabIndex ];

    };

  } // end tabPanelController


})();
