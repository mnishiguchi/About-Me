/**
 * blog
 */
(function() {

  angular
    .module( "app" )
    .component( "blogPosts", {

      bindings: {
        posts: "="  // bindToController
      },
      templateUrl: "app/components/blog/blogPosts.html",
      controller:  BlogPostsController,
    });

  BlogPostsController.$inject = [
    "$filter"
  ];
  function BlogPostsController( $filter ) {

    var vm = this;

    // Initial state.
    vm.filteredPosts = vm.posts;

    // Expose the public methods.
    vm.filterData = function ( filterKey ) {

      var filtered = $filter( "filter" )( vm.posts, filterKey );
      vm.filteredPosts = filtered;

    }

  } // end BlogPostsController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "blogPost", {

      bindings: {
        post: "="  // bindToController
      },
      templateUrl: "app/components/blog/blogPost.html",
      controller:  BlogPostController,

    });

  BlogPostController.$inject = [
    "$location",
    "$anchorScroll"
  ];
  function BlogPostController( $location, $anchorScroll ) {

    var vm = this;

    // Initial state.
    vm.isVisible = false;
    vm.topId     = "post-" + vm.post.id; // For anchorScroll

    // Expose the public methods.
    vm.toggleVisibility = function() { vm.isVisible = !vm.isVisible; };

  } // end BlogPostController


})();
