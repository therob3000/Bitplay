// server.js

/*
 * modules
 */

 var express	= require('express');
 var app		= express();
 var mongoose	= require('mongoose');
 var bodyParser	= require('body-parser');
 var methodOverride = require('method-override');
 
  // configs ==================================================
  var db = require('./config/db');	// database config file

  var port = process.env.PORT || 3000; // set our server port

  mongoose.connect(db.url); // connect to our MongoDB via mongoose

  // get all data/stuff of the body (POST) parameters
  app.use(bodyParser.json()); // parse application/json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd+json as json
  app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

  app.use(methodOverride('X-HTTP-Method-Override')); // // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
  app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

  // routes ==================================================
  require('./app/routes/server.routes.js')(app); // configure our routes

// start our app ===============================================
app.listen(port);										// startup our app at http://localhost:8080
console.log('Server started at port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app