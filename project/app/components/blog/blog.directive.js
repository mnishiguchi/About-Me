/**
 * Defines blog related components.
 */
(function() {

  // Module declaration.
  var module = angular.module(
  "blogComponents",
  [
    "blogDataService"
  ]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.directive(
  'blogPosts',
  function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "app/components/blog/blogPosts.template.html",

      controllerAs: "vm",
      controller:
      [
        '$scope',
        '$http',
        '$log',
        "blogDataService",
        function( $scope, $http, $log, blogDataService ) {

          var vm    = this;
          var props = $scope.props = $scope;  // Alias for $scope

          // Initial state.
          vm.posts   = {}; // Bound to the fields.
          vm.loading = false;

          // Expose the public methods.
          vm.loadBlogPosts = loadBlogPosts;

          // Load the blog posts data.
          vm.loadBlogPosts();


          // ---
          // PUBLIC METHODS.
          // ---


          /**
           * I fetch blog posts from a public API.
           */
          function loadBlogPosts() {

            vm.loading = true;
            blogDataService.loadBlogPosts()
            .then(
              function successCallback(blogPosts) {
                vm.loading = false;
                vm.posts   = blogPosts;
              },
              // https://docs.angularjs.org/api/ng/service/$log
              function errorCallback(reason) {
                vm.loading = false;
                $log.error(reason);
              }
            ); // end then
          }; // end function

        } // end function
      ] // end controller
    }; // end return
  }); // end directive


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.directive(
  'blogPost',
  function() {

    return {
      restrict: "E",
      scope: {
        post: "="
      },
      templateUrl: 'app/components/blog/blogPost.template.html',

      controllerAs: "vm",
      controller:
      [
        '$scope',
        "$location",
        "$anchorScroll",
        function( $scope, $location, $anchorScroll ) {

          var vm    = this;
          var props = $scope.props = $scope;  // Alias for $scope

          // State
          vm.isVisible = false;  // visibility initially false;
          vm.topId     = 'post-' + props.post.id;

          // Expose the public functions.
          vm.toggleVisibility = toggleVisibility;


          // ---
          // PUBLIC METHODS.
          // ---


          // I set visibility
          function toggleVisibility() {

            vm.isVisible = !vm.isVisible;

          }; // end function

        } // end function
      ] // end controller
    }; // end return
  }); // end directive

})();
