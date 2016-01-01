/**
 * contactForm
 */
(function() {

  angular
    .module( "app" )
    .factory( "ContactEmailService", ContactEmailService );

  ContactEmailService.$inject = [
    "$window"
  ];
  function ContactEmailService( $window ) {

    var service = {
      clearData: clearData,
      message: "",
      stars: 0,
      sendEmail: sendEmail,
    };
    return service;


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

    } // end sendEmail


    /**
     * Clear data.
     */
    function clearData() {

      service.message = "";
      service.stars   = 0;

    } // clearData


  } // end ContactEmailService


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
    "ContactEmailService"
  ];
  function contactFormController( $scope, ContactEmailService ) {

    var vm = this;

    // Initial state.
    vm.message = ContactEmailService.message;
    vm.stars   = ContactEmailService.stars;

    // Expose the public methods.
    vm.handleMessageSubmit = handleMessageSubmit;

    // Keep watch on ContactEmailService.stars
    // Ensure that vm.stars === ContactEmailService.stars
    $scope.$watch(
      function () { return ContactEmailService.stars; },
      function (newVal, oldVal) {
        if (newVal !== vm.stars) {
          vm.stars = ContactEmailService.stars;
        }
      }); // end $watch


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * Called when user submits the review.
     */
    function handleMessageSubmit() {

      // Send email.
      to      = "masatoshi.nishiguchi@udc.edu";
      subject = "Hello Masa - " + vm.stars + " stars";
      body    = vm.message;

      ContactEmailService.sendEmail( to, "", "", subject, body )

      // Clear the fields
      clearFields();

    } // handleMessageSubmit


    /**
     * Clear form fields.
     */
    function clearFields() {

      // Clear the central data store.
      ContactEmailService.clearData();

      // Reset the variables.
      vm.message = ContactEmailService.message;
      vm.stars   = ContactEmailService.stars;

      // Reset the form's state
      $scope.form_1.$setPristine();
      $scope.form_1.$setUntouched();

    } // end clearFields

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
    "ContactEmailService"
  ];
  function starsController( $scope, ContactEmailService ) {

    var vm = this;

    // Initial state.
    vm.count = ContactEmailService.stars;

    // Expose the public methods.
    vm.incrementStar = function() {
      if ( vm.count < 5 ) {
        ContactEmailService.stars += 1;
      }
    };

    vm.decrementStar = function() {
      if ( vm.count > 0 ) {
        ContactEmailService.stars -= 1;
      }
    };

    vm.getIconClass = function( index ) {
      return ( index <= vm.count ) ? 'fa fa-star' : 'fa fa-star-o';
    }

    // Keep watch on ContactEmailService.stars
    // Ensure that vm.count === ContactEmailService.stars
    $scope.$watch(

      function () { return ContactEmailService.stars; },
      function ( newVal, oldVal ) {
        if ( newVal !== vm.count ) {
          vm.count = ContactEmailService.stars;
        }

      }); // end $watch

  } // end starsController


})();
