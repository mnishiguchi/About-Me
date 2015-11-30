/**
 * Defines gravatar related components.
 */
(function() {

  // Module declaration.
  angular.module( "gravatarComponents", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "gravatarComponents" )
  .directive(
  'gravatarForm', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "/views/gravatar-form.html",

      controllerAs: "vm",
      controller: [
      '$scope',
      function( $scope ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // State : none

      }] // end controller
    }; // end return
  }); // end directive


  angular.module( "mnApp" )
  .directive(
  'gravatar', function () {

    return {
      restrict: "E",
      scope: {
        email: "=",
        size:  "="
      },
      templateUrl: "/views/gravatar.html",

      controllerAs: "vm",
      controller: ['$scope', function( $scope ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // State
        vm.url = "";

        // Expose the public functions.
        vm.gravatarUrl = gravatarUrl;

        // Get the initial image.
        vm.url = vm.gravatarUrl(props.email, props.size);

        // Keep watch for changes.
        $scope.$watch(
          'props.email',
          function(newVal, oldVal) {

            if (newVal !== oldVal) {
              vm.url = vm.gravatarUrl(newVal, props.size);
            }

          }
        );


        // ---
        // PUBLIC METHODS.
        // ---


        // I generate a garavater url for the specified email and size.
        function gravatarUrl(email, size) {

          // Standadize on the lowercase email.
          email = angular.isString(email) ? angular.lowercase(email) : "";

          return 'https://secure.gravatar.com/avatar/' + md5(email) + "?s=" + size;
        }

      }] // end controller
    }; // end return
  }); // end directive

})();
