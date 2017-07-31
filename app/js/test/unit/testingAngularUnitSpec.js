describe('testing angularjs test suite', function() {
	var suite;
	beforeEach(module('testingAngularApp'));
	beforeEach(inject(function($controller, $rootScope) {
				suite = {};
				suite.scope = $rootScope.$new();
				$controller('testingAngularCtrl', {$scope: suite.scope});
		}));
	afterEach(function() {
		suite.scope.$destroy();
		suite = null;
	});

	it('should initialize the title in the scope', function() {
		expect(suite.scope.title).toBeDefined();
		expect(suite.scope.title).toContain('testing');
	});

	it('should add 2 destinations', function() {
		expect(suite.scope.destinations).toBeDefined();
		expect(suite.scope.destinations.length).toBe(0);

		suite.scope.newDestination = {
			city: 'London',
			country: 'England'
		}

		suite.scope.addDestination();

		expect(suite.scope.destinations.length).toBe(1);
		expect(suite.scope.destinations[0].city).toBe('London');
		expect(suite.scope.destinations[0].country).toBe('England');
	});

		it('check addDestination function to calls', function() {
			spyOn(suite.scope, 'addDestinations');
			suite.scope.addDestinations(123);
			expect(suite.scope.addDestinations).toHaveBeenCalled();
			expect(suite.scope.addDestinations).toHaveBeenCalledWith(123);
		});
	
});