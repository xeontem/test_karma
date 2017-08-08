angular.module('testingAngularApp').factory('weatherServise', ['$http', function($http) {
  return {
    getWeather: function(conf) {
      return $http.jsonp(conf.url, conf.callback);
    }
  }
}]);