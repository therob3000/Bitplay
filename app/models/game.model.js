// game.model.js
/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Game Schema
 */

 var GameSchema = new Schema({
 	amount: Number,	// btc amount
 	draw_date: Date	// draw date
 });

 
module.exports = mongoose.model('Games', GameSchema, 'Games');