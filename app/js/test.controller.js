angular.module('testingAngularApp')
	.controller('parent-controller', ['$scope', '$interval', function($scope, $interval) {
		

		//------------------------------ emitted event ---------------------------------------
		$scope.parentCustomEmittedValue = '';
		$scope.parentStoreEmittedValue = function(e, val) {
			console.log('myEvent catched in parent scope. Value is: ', val);
			$scope.parentCustomEmittedValue = val;
		};
		$scope.$on('myEvent', $scope.parentStoreEmittedValue);

		//------------------------------ broadcasted event ---------------------------------------
		$scope.parentCustomBroadcastedValue = '';
		$scope.$on('myEvent2', $scope.parentStoreBroadcastedValue);
		$scope.parentStoreBroadcastedValue = function(e, val) {
			console.log('myEvent2 catched in parent scope. Value is: ', val);
			$scope.parentCustomBroadcastedValue = val;
		};

		//-----------------------subscribe on child child event -------------------------------
		$scope.fromChildChildVal = '';
		$scope.$on('childChildEvent', function(e, val) {
			$scope.fromChildChildVal = val;
		});
		//--------------------------------------------------------------------------------

		$scope.title = 'parent scope title';
		$scope.obj = {
			title: 'parent scope title'
		}

		$scope.applyt = function(title) {
			let f = t => t+='+';
			$scope.title = f(title);
		}


		$scope.changeObjTitle = function() {
			$scope.obj.title += '+';
		};

		// $interval(function() {
		// 	$scope.changeStringTitle()
		// }, 3000);

		
	}]);