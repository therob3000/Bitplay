angular.module('TicketService', []).factory('Ticket',['$http', function($http){
	return {

		// call to get all tickets
		get: function() {
			return $http.get('/api/tickets');
		},

		// call to POST and create a new ticket
		create: function(ticketData) {
			return $http.post('/api/tickets', ticketData);
		}
	}

}]);