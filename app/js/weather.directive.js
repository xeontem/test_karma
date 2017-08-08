'use strict';

angular.module('testingAngularApp').directive('weather', function(weatherServise) {
  return {
    restrict: 'E',
    scope: {},
    replace: true,
    templateUrl: "weather.html",
    link: function(scope, elem, attrs) {
      scope.sendReq = function() {
        var url = `https://api.darksky.net/forecast/773ad7bb1620c4dff531ac6d5484f2e8/${scope.cities[scope.city]}?format=jsonp&callback=JSON_CALLBACK`;
        var conf = {
          url, callback: { jsonpCallbackParam: 'callback'}
        };
        weatherServise.getWeather(conf).success(function(data) {
          console.dir(data);
          scope.arrCityWeathers.push({
            temperature: parseInt((data.currently.temperature-32)*5/9),
            timezone: data.timezone,
            summary: data.daily.summary
          });
        });
      };
      scope.city = 'losAngeles';
      scope.cities = {
        losAngeles: '37.8267,-122.4233',
        minsk: '53.9,27.5667',
        moscow: '55.751244,37.618423',
        dublin: '53.350140,-6.266155',
        dakar: '14.6937,-17.44406'
      };
      scope.removeWeather = function(timezone) {
        var index;
        scope.arrCityWeathers.map(function(item, i) {
          if(item.timezone == timezone) {
            index = i;
          }
        });
        console.log(index);
        var arrCityWeathers = scope.arrCityWeathers.slice(0, index);
        arrCityWeathers = arrCityWeathers.concat(scope.arrCityWeathers.slice(index+1));
        scope.arrCityWeathers = arrCityWeathers;
      }
      scope.arrCityWeathers = [];
    }
  }
});