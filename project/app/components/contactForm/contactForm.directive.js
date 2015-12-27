/**
 * Defines contact-form related components.
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .factory( "contactMeService", contactMeService );

  contactMeService.$inject = [
    "$window"
  ];
  function contactMeService( $window ) {

    var service = {
      message: "",
      stars: 0,
      sendEmail: sendEmail,

    };
    return service;


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * Open the default email software with the specified data.
     */
    function sendEmail(to, cc, bcc, subject, body) {

      $window.location.href = "mailto:" + to
        + "?cc="  + cc
        + "&bcc=" + bcc
        + "&subject=" + escape(subject)
        + "&body="    + escape(body)
        ; // end window.location.href

    }


  } // end contactMeService


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .directive( "contactForm", contactFormDirective );

  function contactFormDirective() {

    var directive = {
      restrict: "E",
      scope: {},
      templateUrl: "app/components/contactForm/contactForm.template.html",
      controller: contactFormController,
      controllerAs: "vm"
    };
    return directive;

  }; // end contactFormDirective


  contactFormController.$inject = [
    "$scope",  // For $scope.$watch
    "contactMeService"
  ];
  function contactFormController( $scope, contactMeService ) {

    var vm    = this;

    // State
    vm.message = contactMeService.message; // Bound to the fields
    vm.stars   = contactMeService.stars;

    // Expose the public methods.
    vm.handleMessageSubmit = handleMessageSubmit;

    // Keep watch on contactMeService.stars
    $scope.$watch(
      function () { return contactMeService.stars; },
      function (newVal, oldVal) {
        if (typeof newVal !== 'undefined') {
          vm.stars   = contactMeService.stars;
        }
    });


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * Called when user submits the review
     */
    function handleMessageSubmit() {

      // Send email.
      to      = "masatoshi.nishiguchi@udc.edu";
      subject = "Hello Masa - " + vm.stars + " stars";
      body    = vm.message;
      contactMeService.sendEmail( to, "", "", subject, body )

      // Clear the fields
      vm.message = "";
      vm.stars   = 0;

      // Reset the form's state
      $scope.messageForm.$setPristine();
      $scope.messageForm.$setUntouched();

    }

  } // end contactFormController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .directive( "stars", starsDirective );

  function starsDirective() {

    var directive = {
      restrict: "E",
      scope: {},
      templateUrl: "app/components/contactForm/stars.template.html",
      controller: starsController,
      controllerAs: "vm"
    };
    return directive;

  }; // end starsDirective


  starsController.$inject = [
    "contactMeService"
  ];
  function starsController( contactMeService ) {

    var vm    = this;

    // State
    vm.stars   = contactMeService.stars;

    // Expose the public methods.
    vm.incrementStar = function() {
      if (vm.stars < 5) {
        contactMeService.stars += 1;
        vm.stars   = contactMeService.stars;
      }
    }
    vm.decrementStar = function() {
      if (vm.stars > 0) {
        contactMeService.stars -= 1;
        vm.stars   = contactMeService.stars;
      }
    }

  } // end starsController


})();
