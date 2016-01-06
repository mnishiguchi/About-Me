/**
 * BlogService
 */
(function() {

  angular
    .module( "app" )
    .factory( "BlogService", BlogService )

  BlogService.$inject = [
    "$http"
  ];
  function BlogService( $http ) {

    var service = {

      getData: getData

    };
    return service;


    /**
     * Make a GET request to the blogger for blog data.
     * @return A promise of this GET request.
     */
    function getData() {

      var url = "https://www.googleapis.com/blogger/v3/blogs/" +
        "1351147858586990175/posts?key=AIzaSyAjac0SRkV6lY2-P1syIZ_oI74bCQyFcZU";

      var promise = $http.get( url )
        .then(
          function ( response ) {
            return response.data.items;
          }) // end then
        .catch(
          function ( reason ) {
            console.log( "Error fetching movie data: " + reason);
          }); // end catch

      return promise;
    };

  } // end BlogService

})();
