angular.module('GameService', []).factory('Game',['$http', function($http){
	return {

		// call to get game data
		get: function() {
			return $http.get('/api/games');
		},

		// call to POST and create a new game
		create: function(gameData) {
			return $http.post('/api/games', gameData);
		},

		// call to POST and update the existing game
		update: function(gameData) {
			return $http.post('/api/games', gameData);
		}
	}

}]);