/**
 *
 */
(function() {

  // Module declaration.
  var module = angular.module( "siteFooter", []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.directive(
  'siteFooter', function () {

    return {
      restrict: "E",
      templateUrl: 'app/shared/siteFooter/siteFooter.template.html',
    }; // end return
  }); // end directive

})();
