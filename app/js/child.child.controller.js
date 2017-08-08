angular.module('testingAngularApp')
	.controller('child-child-controller', ['$scope', function($scope) {
		//------------------------------ emitted event ---------------------------------------
		$scope.childCustomEmittedValue = '';
		$scope.childStoreEmittedValue = function(e, val) {
			console.log('myEvent catched in child scope. Value is: ', val);
			$scope.childCustomEmittedValue = val;
		};
		$scope.$on('myEvent', $scope.childStoreEmittedValue);

		//------------------------------ broadcasted event ---------------------------------------
		$scope.childCustomBroadcastedValue = '';
		$scope.childStoreBroadcastedValue = function(e, val) {
			console.log('myEvent2 catched in child scope. Value is: ', val);
			$scope.childCustomBroadcastedValue = val;
		};
		$scope.$on('myEvent2', $scope.childStoreBroadcastedValue);

		//-------------------- child child custom event --------------------------------
		$scope.emitEvent = function() {
			$scope.$emit('childChildEvent', 'hello from child child');
		};

		$scope.fromChildChildEvent = '';
		$scope.$on('childChildEvent', function(e, val) {
			$scope.fromChildChildEvent = val;
		});
	}]);