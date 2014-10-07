// player.model.js
/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Player Schema
 */

 var PlayerSchema = new Schema({
 	address: String,	// btc address
 	created_date: {		// join date
 		type: Date,
 		default: Date.now
 	}
 });

 module.exports = mongoose.model('Players', PlayerSchema, 'Players');