angular.module('testingAngularApp')
	.directive('myDirective', function() {
		return {
			restrict: 'E',
      scope: {
      	collapse1: '@collapse',
      	collapse2: '=collapse',
      	collapse3: '&collapse',
      	title: '=',
      	applyt: '&'
      },
      transclude: true,
      replace: true,
      templateUrl: "template2.html",
      controller: function($scope) {

      },

      link: function(scope, element, attrs) {
        //------------------------------ emitted event ---------------------------------------
        scope.siblingCustomEmittedValue = '';
        scope.childStoreEmittedValue = function(e, val) {
              console.log('myEvent catched in sibling scope. Value is: ', val);
              scope.siblingCustomEmittedValue = val;
        };
        scope.$on('myEvent', scope.childStoreEmittedValue);

        //------------------------------ broadcasted event ---------------------------------------
        scope.siblingCustomBroadcastedValue = '';
        scope.childStoreBroadcastedValue = function(e, val) {
              console.log('myEvent2 catched in sibling scope. Value is: ', val);
              scope.siblingCustomBroadcastedValue = val;
        };
        scope.$on('myEvent2', scope.childStoreBroadcastedValue);
      }
		};
	});