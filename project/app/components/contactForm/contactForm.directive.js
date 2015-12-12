/**
 * Defines contact-form related components.
 */
(function() {

  // Module declaration.
  var module = angular.module( "contactFormComponents", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.directive(
  'contactForm',
  function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "app/components/contactForm/contactForm.template.html",

      controllerAs: "vm",
      controller: [
      '$scope',
      function( $scope ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // State
        // Current state of the message field
        vm.message = ""; // Bound to the fields
        vm.stars   = 0;

        // Expose the public methods.
        vm.handleMessageSubmit = handleMessageSubmit;


        // ---
        // PUBLIC METHODS.
        // ---


        // Called when user submits the review
        function handleMessageSubmit() {

          // Send email.
          to      = "masatoshi.nishiguchi@udc.edu";
          subject = "Hello Masa - " + vm.stars + " stars";
          body    = vm.message;
          sendEmail( to, "", "", subject, body )

          // Clear the fields
          vm.message = "";
          vm.stars   = 0;

          // Reset the form's state
          $scope.messageForm.$setPristine();
          $scope.messageForm.$setUntouched();
        }


        // ---
        // PRIVATE METHODS.
        // ---


        // I open the default email software with the specified data.
        function sendEmail(to, cc, bcc, subject, body) {
          window.location.href = "mailto:" + to
            + "?cc="  + cc
            + "&bcc=" + bcc
            + "&subject=" + escape(subject)
            + "&body="    + escape(body)
          ; // end window.location.href
        }

      }] // end controller
    }; // end return
  }); // end directive

})();
