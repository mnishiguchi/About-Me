/**
 * AppController
 * TODO
 */
xdescribe('app.controller', function() {

  // Declare variables.
  var controller, $scope;

  // Load the module.
  beforeEach( angular.mock.module('mnApp'));

  // Inject the dependencies.
  beforeEach(function() {
    angular.mock.inject( function( $rootScope, $controller ) {

      $scope = $rootScope.$new();

      controller = $controller('AppController', {
        $scope: $scope
      });

    }); // end inject
  }); // end beforeEach


  /**
   * Page title
   */
  xdescribe('title', function() {

    it('should reject a wrong title', function() {
      expect($scope.title).not.toBe('Wrong title');
    });

    it('should be \'Masatoshi Nishiguchi\' initially', function() {
      expect($scope.title).toBe('Masatoshi Nishiguchi');
    });

  }); // end describe

}); // end describe
