describe('testing angularjs test suite', function() {
  var suite;
  beforeEach(module('testingAngularApp'));
  beforeEach(inject(function(_$injector_) {
        suite = {};
        suite.$rootScope = _$injector_.get('$rootScope');
        suite.controllerScope = suite.$rootScope.new();
        _$injector_.get('$controller')('parent-controller', {$scope: suite.controllerScope});
    }));
  
  afterEach(function() {
    suite.controllerScope.$destroy();
    suite = null;
  });

  it('should initialize the title in the scope', function() {
    expect(suite.controllerScope.title).toBeDefined();
    expect(suite.controllerScope.title).toContain('testing');
  });

  it('should add 2 destinations', function() {
    expect(suite.controllerScope.destinations).toBeDefined();
    expect(suite.controllerScope.destinations.length).toBe(0);

    suite.controllerScope.newDestination = {
      city: 'London',
      country: 'England'
    }

    suite.controllerScope.addDestination(suite.controllerScope.newDestination);

    expect(suite.controllerScope.destinations.length).toBe(1);
    expect(suite.controllerScope.destinations[0].city).toBe('London');
    expect(suite.controllerScope.destinations[0].country).toBe('England');
  });

    it('check addDestination function to calls', function() {
      spyOn(suite.controllerScope, 'addDestinations');
      suite.controllerScope.clearDestinations(123);
      expect(suite.controllerScope.addDestinations).toHaveBeenCalled();
      expect(suite.controllerScope.addDestinations).toHaveBeenCalledWith(123);
    });
  
});