angular.module('testingAngularApp')
  .directive('car', function() {
    return {
      restrict: 'E',
      scope: {
            model: '='
      },
      transclude: true,
      replace: true,
      templateUrl: "template1.html",
      compile: function() {
      },
      controller: function($scope) {
            $scope.features = ['is a car'];
            this.addFeature = function(feature) {
                  $scope.features.push(feature);
            }
      },
      link: function(scope, element, attrs) {
      }
    };
  })
  .directive('brakes', function() {
    return {
      restrict: 'A',
      require: '^car',
      link: function(scope, element, attrs, carController) {
        carController.addFeature('has brakes');
      }
    };
  })
  .directive('wheels', function() {
    return {
      restrict: 'A',
      require: '^car',
      link: function(scope, element, attrs, carController) {
        carController.addFeature('has wheels');
      }
    };
  })
  .directive('doors', function() {
    return {
      restrict: 'A',
      require: '^car',
      link: function(scope, element, attrs, carController) {
        carController.addFeature('has doors');
      }
    };
  });