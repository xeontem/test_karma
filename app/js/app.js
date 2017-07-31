var testaaa1 = angular.module('testingAngularApp', []);

testaaa1.controller('testingAngularCtrl', ['$scope', function($scope) {
	$scope.title = 'testing angular';
	$scope.destinations = [];

	$scope.newDestination = {
		city: undefined,
		country: undefined
	};

	$scope.addDestination = function() {
		$scope.destinations.push({
			city: $scope.newDestination.city,
			country: $scope.newDestination.country
		});
	}
	$scope.addDestinations = function() {};
}]);