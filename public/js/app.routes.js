// public/js/app.routes.js

angular.module('AppRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

	// home page
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainController'
	})

	.when('/play', {
		templateUrl: 'views/play.html',
		controller: 'GameController'
	})
	/*
	.when('/winners', {
		templateUrl: 'views/winners.html',
		controller: 'WinnersController'
	})
	*/
	.when('/contact', {
		templateUrl: '/views/contact.html'
	})

	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);

}]);