/**
 * tabs
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "tabs", {

      templateUrl: 'app/components/tabPanel/tabs.html',
      controller: tabsController,

    });


  tabsController.$inject = [ ];
  function tabsController() {

    var vm = this;

    // Initial state.
    vm.tabIndex = 0;
    vm.tabNames = [
      "About me",
      "Background",
      "Projects",
      "Blog",
      "Resources",
      "Contact"
    ];

    var routes = [
      "/",
      "/background",
      "/project",
      "/blog",
      "/resources",
      "/contact",
    ]

    // Expose the public methods.
    vm.isActive  = function(index) { return (vm.tabIndex === index); };
    vm.getRoutes = function(index) { return routes[ index ]; }
    vm.setTab    = function(index) { vm.tabIndex = index; };

  } // end tabsController


})();
