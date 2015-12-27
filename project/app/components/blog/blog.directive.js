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
    .component( 'blogPosts', {

      templateUrl: "app/components/blog/blogPosts.template.html",
      controller: blogPostsController,

    });


  blogPostsController.$inject = [
    "blogDataService"
  ];
  function blogPostsController( blogDataService ) {

    var vm    = this;

    // Expose the state.
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
    .component( 'blogPost', {

      bindings: {
        post: "="  // bindToController
      },
      templateUrl: 'app/components/blog/blogPost.template.html',
      controller: blogPostController,

    });


  blogPostController.$inject = [
    "$location",
    "$anchorScroll"
  ];
  function blogPostController( $location, $anchorScroll ) {

    var vm = this;

    // Expose the state.
    vm.isVisible = false;  // visibility initially false;
    vm.topId     = 'post-' + vm.post.id;

    // Expose the public methods.
    vm.toggleVisibility = function() { vm.isVisible = !vm.isVisible; };

  } // end blogPostController


})();
