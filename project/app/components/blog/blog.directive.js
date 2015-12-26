/**
 * Defines blog related components.
 */
(function() {

  // Module declaration.
  angular
    .module( "blogComponents", [
      "blogDataService"
    ]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "blogComponents" )
    .directive( 'blogPosts', blogPostsDirective );

  function blogPostsDirective() {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "app/components/blog/blogPosts.template.html",
      controller: blogPostsController,
      controllerAs: "vm"
    };
  }


  blogPostsController.$inject = [
    "$scope",
    "blogDataService"
  ];
  function blogPostsController( $scope, blogDataService ) {

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
     * Fetch blog posts from a public API.
     */
    function loadBlogPosts() {

      vm.loading = true;

      blogDataService.loadBlogPosts()
      .then(
        function successCallback(blogPosts) {
          vm.loading = false;
          vm.posts   = blogPosts;
        },
        function errorCallback(reason) {
          vm.loading = false;
        }
      ); // end then

    }; // end function

  } // end blogPostsController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "blogComponents" )
    .directive( 'blogPost', blogPostDirective );

  function blogPostDirective() {

    return {
      restrict: "E",
      scope: {
        post: "="
      },
      templateUrl: 'app/components/blog/blogPost.template.html',
      controller: blogPostController,
      controllerAs: "vm"
    };

  } // end blogPostDirective


  blogPostController.$inject = [
    "$scope",
    "$location",
    "$anchorScroll"
  ];
  function blogPostController( $scope, $location, $anchorScroll ) {

    var vm    = this;
    var props = $scope.props = $scope;  // Alias for $scope

    // State
    vm.isVisible = false;  // visibility initially false;
    vm.topId     = 'post-' + props.post.id;

    // Expose the public functions.
    vm.toggleVisibility = function() { vm.isVisible = !vm.isVisible; };

  } // end blogPostController


})();
