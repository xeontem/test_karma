angular.module('testingAngularApp').directive('test', function(fromService, fromProvider, fromFactory, $timeout) {
	return {
		scope: true,
		restrict: "E",
		templateUrl: 'template3.html',
		link: function(scope) {
			scope.sendMessage = fromFactory.sendMessage;
			scope.text = fromService.getMessage();
			scope.arr = [scope.text, scope.sendMessage('this is from factory'), fromProvider.message];
			scope.change = fromService.changeMessage;
			scope.$watch(function() {
				return fromService.getMessage();
			}, function(newValue, oldValue) {
				scope.arr[0] = newValue || oldValue;
				scope.text = newValue || oldValue;
			});
			scope.saved = localStorage['tasks'] ? JSON.parse(localStorage['tasks']) : [];
			scope.saveToLocalStorage = function(task) {
				if(event.which == 13) {
					scope.saved.push(task);
					console.log(scope.saved);
					localStorage['tasks'] = JSON.stringify(scope.saved);
					scope.task = '';
				}
			};
			scope.reset = function() {
				localStorage.removeItem('tasks');
				scope.saved = localStorage['tasks'] ? JSON.parse(localStorage['tasks']) : [];
			}
		}
	}
});

angular.module('testingAngularApp').config(function(fromProviderProvider, fromFactoryProvider, fromServiceProvider) {
	fromProviderProvider.changeMess('Good Day');
	fromProviderProvider.greet('ARTSIOM!');
});