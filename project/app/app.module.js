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
  ]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  mnApp.controller(
  "AppController",
  function( $scope ) {

  }); // end controller

})();
