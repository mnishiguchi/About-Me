// // http://blog.javascripting.com/2015/01/17/dont-hassle-with-cors/


// var express = require('express');
// var request = require('request');

// var server = express();

// server.use('/acronym', function(req, res) {
//   var url = 'http://api.open-notify.org/astros.json';
//   req.pipe(request(url)).pipe(res);
// });

// server.listen(process.env.PORT || 3000);


// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //


// https://github.com/shawn-simon-developer/NodeAngularProxy/blob/master/index.js


/**
 * Module dependencies
 * an absolute path or the relative path from our index.js file
 */

var express   = require( "express" );
var httpProxy = require( "http-proxy" );

// var apiForwardingUrl = 'http://api.open-notify.org/astros.json?';
var apiForwardingUrl = 'http://www.nactem.ac.uk/software/acromine/dictionary.py/';

// I help you forward all requests to your desire web API.
var apiProxy = httpProxy.createProxyServer();
console.log('Forwarding API requests to ' + apiForwardingUrl);

// I am a node server.
// Run `node server index.js`
var server = express();
server.set( "port", 3000 );
server.use( express.static( __dirname + "/app" ) );  // App's location.

// Grab all requests to the server with "/acronym/".
server.get("/acronym/*", function(req, res) {

    console.log("Request made to 'acronym");
    apiProxy.web( req, res, { target: apiForwardingUrl } );
});

// I assure you that I am working properly.
server.listen( server.get("port"), function() {

  console.log('Express server listening on port ' + server.get('port'));
});
