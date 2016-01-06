describe( 'filters', function () {

  // Pattern 1
  // - Get an instance of specific filter before test.
  describe( 'htmlFilter', function() {

    var theFilter;

    beforeEach( module( 'app' ) );

    beforeEach( function() {

      inject( function( $injector ) {
        theFilter = $injector.get( '$filter' )( 'htmlFilter' );
      });
    });

    it( 'should have htmlFilter', function() {
      expect( theFilter ).not.toBeNull();
    });
  });

  // Pattern 2
  // - Make a createFilter function before test.
  describe( 'htmlFilter', function() {

    var createFilter;

    beforeEach( module( 'app' ) );

    beforeEach( inject( function( $filter ) {
      createFilter = function() {
        return $filter( 'htmlFilter' );
      };
    }));

    it( 'should have htmlFilter', function() {
      var filter = createFilter();
      expect( filter( "htmlFilter" ) ).not.toBeNull();
    });
  });
});
