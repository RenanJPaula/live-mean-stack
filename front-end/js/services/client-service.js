(function(angular, undefined) {
	'use strict';

	angular.module('megaStore').factory('ClientService', environmentService);

	environmentService.$inject = ['$http', 'api'];

	function environmentService($http, api) {
		return {
			getClients: getClients,
			save: save
		};

		function getClients() {
			return $http.get(api.clients);
		}

		function save(client) {
			if(client._id) {
				return $http.put(api.clients + '/' + client._id, client);
			} else {
				return $http.post(api.clients, client);
			}
		}

	}

})(angular);