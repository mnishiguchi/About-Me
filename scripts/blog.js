/**
 * Defines blog related components.
 */
(function() {

  // Module declaration.
  angular.module( "blogComponents", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module( "blogComponents" )
  .directive( 'blogPreview', function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "/views/blog-preview.html",

      controllerAs: "vm",
      controller: ['$scope', function( $scope ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // State
        // Current state of the message field
        vm.posts = {}; // Bound to the fields

        // Expose the public methods.
        vm.loadPostPreviews = loadPostPreviews;

        // Load posts preview data.
        vm.loadPostPreviews()


        // ---
        // PUBLIC METHODS.
        // ---


        // I load post previews from the API.
        function loadPostPreviews() {

          return vm.posts = [
            {
              title: "RUBY ON RAILS",
              subtitle: "オープンソースのWebアプリケーションフレームワークである。RoRまたは単にRailsと呼ばれる。その名にも示されているようにRubyで書かれている。",
              author: "Masatoshi Nishiguchi",
              author_url: "",
              article_url: "",
              posted_on: "1288323623006"
            },
            {
              title: "Ruby",
              subtitle: "まつもとゆきひろ（通称 Matz）により開発されたオブジェクト指向スクリプト言語であり、スクリプト言語が用いられてきた領域でのオブジェクト指向プログラミングを実現する。",
              author: "Masatoshi Nishiguchi",
              author_url: "",
              article_url: "",
              posted_on: "1288323623006"
            },
            {
              title: "俳句（はいく）",
              subtitle: "五・七・五の十七音から成る日本語の定型詩である。",
              author: "Masatoshi Nishiguchi",
              author_url: "",
              article_url: "",
              posted_on: "1288323623006"
            },
          ]

        } // end loadPostPreviews

      }] // end controller
    }; // end return
  }); // end directive

})();
