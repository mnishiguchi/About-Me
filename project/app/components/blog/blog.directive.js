/**
 * Defines blog related components.
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .directive( 'blogPosts', blogPostsDirective );

  function blogPostsDirective() {

    var directive = {
      restrict: "E",
      scope: {},
      templateUrl: "app/components/blog/blogPosts.template.html",
      controller: blogPostsController,
      controllerAs: "vm"
    };
    return directive;

  } // end blogPostsDirective


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
      .then   ( function(blogPosts) { vm.posts   = blogPosts; } )
      .finally( function()          { vm.loading = false; } );

    }; // end function

  } // end blogPostsController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .directive( 'blogPost', blogPostDirective );

  function blogPostDirective() {

    var directive = {
      restrict: "E",
      scope: {
        post: "="
      },
      templateUrl: 'app/components/blog/blogPost.template.html',
      controller: blogPostController,
      controllerAs: "vm"
    };
    return directive;

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
