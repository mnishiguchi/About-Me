/**
 * contactForm
 */
(function() {

  angular
    .module( "app" )
    .factory( "contactMeService", contactMeService );

  contactMeService.$inject = [
    "$window"
  ];
  function contactMeService( $window ) {

    var service = {
      clearData: clearData,
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

      $window.location.href = [
        "mailto:",   to,
        "?cc=",      cc,
        "&bcc=",     bcc,
        "&subject=", escape(subject),
        "&body=",    escape(body),
      ].join("");

    }


    /**
     * [clearData description]
     */
    function clearData() {
      service.message = "";
      service.stars   = 0;
    }


  } // end contactMeService


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "contactForm", {

      templateUrl: "app/components/contactForm/contactForm.html",
      controller: contactFormController,

    });

  contactFormController.$inject = [
    "$scope",           // $scope.$watch and form validation.
    "contactMeService"
  ];
  function contactFormController( $scope, contactMeService ) {

    var vm = this;

    // Initial state.
    vm.message = contactMeService.message;
    vm.stars   = contactMeService.stars;

    // Expose the public methods.
    vm.handleMessageSubmit = handleMessageSubmit;

    // Keep watch on contactMeService.stars
    // Ensure that vm.stars === contactMeService.stars
    $scope.$watch(
      function () { return contactMeService.stars; },
      function (newVal, oldVal) {
        if (newVal !== vm.stars) {
          vm.stars = contactMeService.stars;
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
      clearFields();
    }


    /**
     * [clearFields description]
     */
    function clearFields() {

      // Clear the central data store.
      contactMeService.clearData();

      // Re-bind to contactMeService.
      vm.message = contactMeService.message;
      vm.stars   = contactMeService.stars;

      // Reset the form's state
      $scope.messageField.$setPristine();
      $scope.messageField.$setUntouched();
    }

  } // end contactFormController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "stars", {

      templateUrl: "app/components/contactForm/stars.html",
      controller: starsController,

    });

  starsController.$inject = [
    "$scope",
    "contactMeService"
  ];
  function starsController( $scope, contactMeService ) {

    var vm = this;

    // Initial state.
    vm.count = contactMeService.stars;

    // Expose the public methods.
    vm.incrementStar = function() {
      if (vm.count < 5) { contactMeService.stars += 1; }
    };
    vm.decrementStar = function() {
      if (vm.count > 0) { contactMeService.stars -= 1; }
    };

    // Keep watch on contactMeService.stars
    // Ensure that vm.count === contactMeService.stars
    $scope.$watch(
      function () { return contactMeService.stars; },
      function (newVal, oldVal) {
        if (newVal !== vm.count) {
          vm.count = contactMeService.stars;
        }
    });

  } // end starsController


})();
