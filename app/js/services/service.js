angular.module('testingAngularApp').service('fromService', function() {
	var message = "hello";
	this.changeMessage = (mess) => {
		message = mess;
	}

	this.getMessage = function() { 
		return message;
	}
});

angular.module('testingAngularApp').factory('fromFactory', function() {
	var factory = {};
	factory.sendMessage = (message) => message;
	return factory;
});

angular.module('testingAngularApp').provider('fromProvider', function() {
	
	var message = "";
	
	var obj = {};
	obj.$get = () => {return {message}};
	obj.greet = (name) => {	message += ` ${name}`};
	obj.changeMess = (mess) => {message = mess};
	return obj;
});