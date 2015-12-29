/**
 * Defines blog related components.
 */
(function() {

  angular
    .module( "app" )
    .component( "blogPosts", {

      bindings: {
        posts: "="  // bindToController
      },
      templateUrl: "app/components/blog/blogPosts.html",
    });


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "blogPost", {

      bindings: {
        post: "="  // bindToController
      },
      templateUrl: 'app/components/blog/blogPost.html',
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
