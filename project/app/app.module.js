/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  var mnApp = angular.module(
  "mnApp",
  [
    "siteHeader",
    "siteFooter",
    "tabPanelComponents",
    "contactFormComponents",
    "movieSearchComponents",
    "blogComponents",
    "customFilters",
    "anchorHashLink",
  ]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  mnApp.controller(
  "AppController",
  function( $scope ) {

    $scope.title = "Masatoshi Nishiguchi";

  }); // end controller

})();
