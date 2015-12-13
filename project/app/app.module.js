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
    "gravatarComponents",
    "contactFormComponents",
    "movieSearchComponents",
    "breakpointSetter",
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
