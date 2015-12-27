/**
 * tabPanel
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "tabPanel", {

      templateUrl: 'app/components/tabPanel/tabPanel.html',
      controller: tabPanelController,

    });


  tabPanelController.$inject = [
    "$window",  // $window.document
    "appContents"
  ];
  function tabPanelController( $window, appContents ) {

    var vm    = this;

    // Initial state.
    vm.tabIndex    = 0;  // Tab position initially 0;
    vm.tabNames    = appContents.tabTitles;
    vm.contentUrls = appContents.tabUrls;

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
      $window.document.title = vm.tabNames[ tabIndex ] + " | Masatoshi Nishiguchi";

    };

  } // end tabPanelController


})();
