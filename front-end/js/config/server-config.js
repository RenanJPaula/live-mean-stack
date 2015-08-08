(function(angular, undefined) {
	'use strict';

	var _baseUrl = "http://localhost:3000/api/v1/";

	angular.module('megaStore').constant('api', {
		clients: resourceOf('clients')
	});

	function resourceOf(resourceName) {
		return _baseUrl + resourceName;
	}

})(angular);
