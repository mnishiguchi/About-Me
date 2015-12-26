/**
 * Defines tab-panel related components.
 */
(function() {

  // Module declaration.
  angular
    .module( "tabPanelComponents", [ ]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "tabPanelComponents")
    .directive( "tabPanel", tabPanelDirective );

  function tabPanelDirective() {

    return {
      restrict: "E",
      scope: {},
      templateUrl: 'app/components/tabPanel/tabPanel.template.html',

      controllerAs: "vm",
      controller: tabPanelController,

    }; // end return

  }; // end tabPanelDirective


  tabPanelController.$inject = [
    "$scope",
    "$window"
  ]
  function tabPanelController( $scope, $window ) {

    var vm    = this;
    var props = $scope.props = $scope;  // Alias for $scope

    // State
    vm.tabIndex = 0;  // Tab position initially 0;
    vm.tabNames = [
      'About me',
      'Background',
      "Projects",
      'Blog',
      "Resources",
      'Contact'
    ];
    vm.contentUrls = [
      "app/components/tabPanel/_about_me.template.html",
      "app/components/tabPanel/_background.template.html",
      "app/components/tabPanel/_projects.template.html",
      "app/components/tabPanel/_blog.template.html",
      "app/components/tabPanel/_resources.template.html",
      "app/components/tabPanel/_contact.template.html",
    ];

    // Expose the public methods.
    vm.isSet    = isSet;
    vm.setTab   = setTab;
    vm.setTitle = setTitle;


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * Set the tab position.
     * @param tabIndex  A tab index.
     */
    function setTab(tabIndex) {

      vm.tabIndex = tabIndex;

    };


    /**
     * Check if a tab is active
     * @param  tab  A tab index.
     * @return true if the specify tab index is currently set, else false.
     */
    function isSet(tabIndex) {

      return (vm.tabIndex === tabIndex);

    };


    /**
     * Set the page title.
     * @param tabIndex  A tab index.
     */
    function setTitle(tabIndex) {

      // Set the page title via $window.
      $window.document.title = vm.tabNames[ tabIndex ];

    };

  } // end tabPanelController


})();
