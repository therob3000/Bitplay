// ticket.model.js
/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Ticket Schema
 */

 var TicketSchema = new Schema({
 	player: {
 		type: Schema.Types.ObjectId, // _id from Playes
 		ref: 'Players'
 	},
 	game: {
 		type: Schema.Types.ObjectId, // _id from Games
 		ref: 'Games'
 	},
 	amount: Number,		// btc amount i.e 0.001
 	create_date: {		// ticket purchase date
 		type: Date,
 		default: Date.now
 	}

 });

 module.exports = mongoose.model('Tickets', TicketSchema, 'Tickets');