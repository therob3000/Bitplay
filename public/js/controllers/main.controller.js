// public/js/controllers/main.controller.js

angular.module('MainController', []).controller('MainController',['$scope','Game', function($scope,Game) { 

	Game.get()
	.success(function(data) {
		$scope.prize = data.amount;
	});

	$scope.cost = .001;
	$scope.dealerpercent = .001 * 100;
	$scope.playerpercent = 100 - (.001 * 100);
	$scope.drawtime = '8:30pm UTC-5';
	$scope.sitename = 'BITPLAY';

}]);