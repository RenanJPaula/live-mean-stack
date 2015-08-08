(function(angular, undefined) {
	'use strict';

	angular.module('megaStore').config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider
			.when('/clients', {
				templateUrl: 'view/client-list.html',
				controller: 'ClientController',
				controllerAs: 'vm'
			}).when('/clients/persist', {
				templateUrl: 'view/client-persist.html',
				controller: 'ClientController',
				controllerAs: 'vm'
			});
	}

})(angular);
