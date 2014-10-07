// public/js/services/player.service.js

angular.module('PlayerService', []).factory('Player',['$http', function($http) {

	return {
		
		// call to get all players
		get: function(address) {
			return $http.get('/api/players/' + address);
		},

		// call to POST and create a new player
		create: function(playerData) {
			return $http.post('/api/players', playerData);
		}
		
	}

}]);