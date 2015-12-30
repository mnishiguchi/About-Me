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
      controller:  blogPostsController,
    });

  blogPostsController.$inject = [
    "$filter"
  ];
  function blogPostsController( $filter ) {

    var vm = this;

    // Initial state.
    vm.filteredPosts = vm.posts;

    // Expose the public methods.
    vm.filterData = function ( filterKey ) {

      var filtered = $filter( "filter" )( vm.posts, filterKey );
      vm.filteredPosts = filtered;

    }

  } // end blogPostsController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "blogPost", {

      bindings: {
        post: "="  // bindToController
      },
      templateUrl: "app/components/blog/blogPost.html",
      controller:  blogPostController,

    });

  blogPostController.$inject = [
    "$location",
    "$anchorScroll"
  ];
  function blogPostController( $location, $anchorScroll ) {

    var vm = this;

    // Initial state.
    vm.isVisible = false;                // visibility initially false;
    vm.topId     = "post-" + vm.post.id; // For anchorScroll

    // Expose the public methods.
    vm.toggleVisibility = function() { vm.isVisible = !vm.isVisible; };

  } // end blogPostController


})();
