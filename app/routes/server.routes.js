// app/routes/core.server.routes.js

/* 
 * Main server route
 */

 var Tickets = require('../models/ticket.model');
 var Players = require('../models/player.model');
 var Games = require('../models/game.model');
 var BlockIoCfg = require('../../config/blockio');
 
 module.exports = function(app) {

 	var _btc = 0.0001; // btc amount to be deducted from the player and added to the pot
 	var _today = new Date().toISOString();

	 app.get('/api/games', function(req, res) {

	 	// use mongoose to get the current jackpot prize from the database
	 	Games.findOne({ draw_date : { $lte: _today }}).lean().exec(function(err,game) {
	 		if(err) res.send(err);
	 		game.addProperty = '_id';
	 		game.addProperty = 'amount';
	 		game.addProperty = 'draw_date';
	 		res.json(game);
	 	});

	 });
	 /*
	 app.post('/api/games', function(req, res) {

	 	// create a new game

	 });
	*/
	 app.post('/api/games', function(req, res) {

	 	// increment the pot prize
	 	Games.findByIdAndUpdate( req.body._id, { $set: { amount : req.body.amount }}, function(err, game) {
	 		if(err) res.send(err);
	 		res.json(game);
	 	});

	 });

	 app.post('/api/tickets', function(req, res) { 	

	 	var ticket = new Tickets({
	 		player : req.body.player,
	 		game : req.body.game,
	 		amount : req.body.amount
	 	});

	 	// create a ticket
	 	ticket.save(function(err, ticket){
	 		if(err) res.send(err);
	 		res.json(ticket);
	 	});

	 });	 

	 app.post('/api/players', function(req, res) {

	 	// create a new play object
	 	var player = new Players({
	 		address : req.body.address
	 	});
	 	
	 	// insert to db
	 	player.save(function(err, player){
	 		if(err) res.send(err);
	 		res.json(player);
	 	});

	 });

	 app.get('/api/players/:address', function(req, res) {

	 	// get details of player by btc address
	 	Players.findOne({ address : req.params.address }).lean().exec(function(err, player) {
	 		if(err) res.send(err);
	 		if(player==null) {
	 			res.json(player);
	 		} else {
		 		player.addProperty = 'address';
		 		player.addProperty = '_id';
		 		//player.addProperty = 'created_date';
		 		res.json(player);
		 	}
	 	});

	 });

	 // route to handle angular requests
	 app.get('*', function(req, res) {
	 	// load our public/index.html file
	 	res.sendfile('./public/views/index.html');

	 });
};