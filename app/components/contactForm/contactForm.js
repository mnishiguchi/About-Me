/**
 * contactForm
 */
(function() {

  angular
    .module( "app" )
    .factory( "ContactEmailService", ContactEmailService );

  ContactEmailService.$inject = [
    "$window",
    "$rootScope"
  ];
  function ContactEmailService( $window, $rootScope ) {

    var service = {
      message: "",
      rating: 0,
      sendEmail: sendEmail,
      subscribe: subscribe
    };
    return service;


    /**
     * Issue "contact.update" event with updated data.
     * @param  data
     */
    function notifyUpdates( data ) {
      $rootScope.$broadcast( "contact.update", data );
    }


    /**
     * Register to subscribe "contact.update" event.
     * @param  fn A callback function.
     */
    function subscribe( fn ) {
      $rootScope.$on("contact.update", function ( e, data ) {
         fn( data );
      });
    }


    /**
     * Open the default email software with the specified data.
     */
    function sendEmail( to, cc, bcc, subject, body ) {

      $window.location.href = [
        "mailto:",   to,
        "?cc=",      cc,
        "&bcc=",     bcc,
        "&subject=", escape(subject),
        "&body=",    escape(body),
      ].join("");

      clearData();

    } // end sendEmail


    /**
     * Clear data.
     */
    function clearData() {

      service.message = "";
      service.rating  = 0;

      // Notify the subscribers that data was updated.
      notifyUpdates( service );

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
    vm.data = ContactEmailService;  // Reference to ContactEmailService.

    // Expose the public methods.
    vm.handleMessageSubmit = handleMessageSubmit;


    // ---
    // PUBLIC METHODS.
    // ---


    /**
     * Called when user submits the review.
     */
    function handleMessageSubmit() {

      // Send email.
      to      = "masatoshi.nishiguchi@udc.edu";
      subject = "Hello Masa - " + vm.data.rating + " stars";
      body    = vm.data.message;

      vm.data.sendEmail( to, "", "", subject, body )

      // Reset a form state.
      resetFormState();

    } // handleMessageSubmit


    // ---
    // PRIVATE METHODS.
    // ---


    /**
     * Reset a form state.
     */
    function resetFormState() {

      $scope.form_1.$setPristine();
      $scope.form_1.$setUntouched();

    } // end resetFormState

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
    vm.data = ContactEmailService;  // Reference to ContactEmailService.

    // Expose the public methods.
    vm.incrementStar = incrementStar;
    vm.decrementStar = decrementStar;
    vm.getIconClass  = getIconClass;

    // Listen for "contact.update" event and update the star count.
    vm.data.subscribe( function( data ) {
      vm.data.rating = data.rating;
    });


    // ---
    // PUBLIC METHODS
    // ---


    function incrementStar() {
      if ( vm.data.rating < 5 ) {
        vm.data.rating += 1;
      }
    };


    function decrementStar() {
      if ( vm.data.rating > 0 ) {
        vm.data.rating -= 1;
      }
    };


    function getIconClass( index ) {
      return ( index <= vm.data.rating ) ? 'fa fa-star' : 'fa fa-star-o';
    }

  } // end starsController


})();
