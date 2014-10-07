// winners.model.js
/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Winners Schema
 */

 var WinnersSchema = new Schema({
 	player: {
		type: Schema.Types.ObjectId, // _id from Players
 		ref: 'Players'
 	},
 	game: {
 		type: Schema.Types.ObjectId // _id from Games
 	}
	amount: Number,		// btc wins
	created_date: {		// win date
		type: Date,
		default: Date.now
	}
 });

 module.exports = mongoose.model('Winners', WinnersSchema, 'Winners');