angular.module('testingAngularApp')
	.controller('child-controller', ['$scope', function($scope, changeStringTitle) {
		$scope.title = 'child scope title';
		$scope.destinations = [];

		//-------------------------- emit custom event --------------------------------------
		$scope.customEmittedValue = '';
		$scope.emitCustomEvent = function() {
			$scope.$emit('myEvent', $scope.emitValue);
		};

		$scope.storeEmittedValue = function(e, val) {
			console.log('myEvent catched in same scope. Value is: ', val);
			$scope.customEmittedValue = val;
		};
		$scope.$on('myEvent', $scope.storeEmittedValue);

		//-------------------------- broadcast custom event --------------------------------------
		$scope.customBroadcastedValue = '';
		$scope.broadcastCustomEvent = function() {
			$scope.$broadcast('myEvent2', $scope.broadcastValue);
		};
		$scope.storeBroadcastedValue = function(e ,val) {
			console.log('myEvent2 catched in same scope. Value is: ', val);
			$scope.customBroadcastedValue = val;
		};
		$scope.$on('myEvent2', $scope.storeBroadcastedValue);

		//-----------------------subscribe on child event -------------------------------
		$scope.fromChildVal = '';
		$scope.$on('childChildEvent', function(e, val) {
			$scope.fromChildVal = val;
		});
		//--------------------------------------------------------------------------------

		$scope.addDestination = function(dest) {
			if(!dest.city) dest.city = 'empty';
			if(!dest.country) dest.country = 'empty';
			$scope.destinations.push({
				index: dest.index,
				city: dest.city,
				country: dest.country
			});
			$scope.city = null;
			$scope.country = null;
		};

		$scope.changeStringTitle = function() {
			$scope.title += '+';
		}

		$scope.clearDestinations = function() {
			$scope.destinations = [];
		};

		$scope.removeDestination = function(index) {
			console.log('removeDestination called');
			let dests = $scope.destinations.slice(0, index);
			dests = dests.concat($scope.destinations.slice(index+1));
			dests.map((dest, i) => {
				dest.index = i;
			})
			$scope.destinations = dests;
		}

	}]);