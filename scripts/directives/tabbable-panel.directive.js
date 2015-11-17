(function() {

  // This module contains the myTabbablePanel and myContentPane directives.
  // Used to create a taggable panel.
  angular.module("taggable", []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular.module("taggable").
  directive('myTabbablePanel', function() {

    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'views/tabbable-frame.html',

      controllerAs: "vm",
      controller: ['$scope', function( $scope ) {

        var vm    = this;
        var props = $scope.props = $scope;  // Alias for $scope

        // I hold the registered panes, initially [].
        vm.panes = [];

        // Expose the public methods.
        vm.updateSelection = updateSelection;
        vm.addPane         = addPane;


        // ---
        // PUBLIC METHODS.
        // ---


        // I update the selected tab and pane.
        function updateSelection(pane) {

          // Set all the panes to the "not selected" state.
          angular.forEach(vm.panes, function(pane) {
            pane.selected = false;
          });

          // Set the specified pane to the "selected" state.
          pane.selected = true;

        }


        // I register a pane.
        function addPane(pane) {

          // Select the first tab when the page is loaded.
          if (vm.panes.length === 0) {
            vm.updateSelection(pane);
          }

          // Add the specified pane to the list.
          vm.panes.push(pane);

        }

      }] // end controller
    }; // end return
  }); // end directive


  //
  angular.module("taggable")
  .directive('myContentPane', function() {

    return {
      require: '^myTabbablePanel',  // Mix in myTabbablePanel directive's controller.

      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      templateUrl: 'views/taggable-content-pane.html',

      link: function(scope, element, attrs, tabsCtrl) {

        // Call myTabbablePanel's addPane function.
        tabsCtrl.addPane(scope);

      }
    };

    // NOTE: When a directive requires a controller, its link function receives
    // that controller as the fourth argument of its link function.
    // Taking advantage of this, myContentPane can call the addPane function of myTabbablePanel.

  });


})();
