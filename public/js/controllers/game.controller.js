angular.module('GameController',[])
	.controller('GameController',['$scope', 'Player','Ticket', 'Game', function($scope,Player,Ticket,Game){

		$scope.createGame = function() {

			if($scope.address != null) {

				var player_data = null;
				var player_id = null;
				var draw_date = null;
				var btc = 0.0001; // btc amount to be deducted from the player and added to the pot
				var game_id = null;
				var game_amount = null;

				// first check if this btc address already exists
				Player.get($scope.address)
				.success(function(data, status) {
					player_data = data;
				}).error(function(err) {
					console.log(err);
				});

				if(player_data == null) {

					// insert btc address to Player collection
					Player.create({
						address: $scope.address
					})
					.success(function(data, status) {
						
						// retrieve player data from Player collection
						Player.get(data.address)
						.success(function(data) {

							player_id = data._id;

							// get the draw date of the game from Prize collection
							Game.get()
							.success(function(data) {

								draw_date = data.draw_date;
								game_id = data._id;
								game_amount = data.amount;	

								// create a ticket to Tickets collection
								Ticket.create({
									player : player_id,
									game: game_id,
									amount : btc
								})
								.success(function(data, status) {
									
									// Todo: update game pot prize
									Game.update({
										_id : game_id,
										amount : game_amount + btc
									})
									.success(function(data, status) {
										console.log(data);
									});

								});								

							});	

						});

					})
					.error(function(err, status) {
						console.log(err);
					});

				} else {

					// retrieve player data from Player collection
					Player.get(data.address)
					.success(function(data) {
						
						player_id = data._id;

						// get the draw date of the game from Prize collection
						Game.get()
						.success(function(data) {

							draw_date = data.draw_date;
							game_id = data._id;
							game_amount = data.amount;	

							// create a ticket to Tickets collection
							Ticket.create({
								player : player_id,
								game: game_id,
								amount : btc
							})
							.success(function(data, status) {
								
								// Todo: update game pot prize
								Game.update({
									_id : game_id,
									amount : game_amount + btc
								})
								.success(function(data, status) {
									console.log(data);// update MainController
								});

							});								

						});	

					})
					.error(function(error, status) {
						console.log(err);
					});

				}	

				$scope.address = null;
				player_data = null;
				player_id = null;
				draw_date = null;
				game_id = null;
				game_amount = null;

			}
		}
}]);