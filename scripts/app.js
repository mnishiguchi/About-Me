(function() {

  // Module declaration.
  angular.module( "mnApp", [ "tabPanelComponents",
                             "gravatarComponents",
                             "contactFormComponents" ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "mnApp" )
  .controller( "AppController", function( $scope ) {

    }
  );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "mnApp" )
  .directive( 'siteHeader', function () {

    return {
      restrict: "E",
      templateUrl: '/views/header.html',
    }; // end return
  }); // end directive


  angular.module( "mnApp" )
  .directive( 'siteFooter', function () {

    return {
      restrict: "E",
      templateUrl: '/views/footer.html',
    }; // end return
  }); // end directive


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


})();
