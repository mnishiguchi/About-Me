/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  angular
    .module( "app", [ "ngRoute" ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [ ];
  function AppController() {}


})();
