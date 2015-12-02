/**
 * I am a simple NodeJS server.
 * --
 * HOW TO RUN: `node server index.js`
 */

(function () {

  var path    = require('path');
  var express = require("express");

  var server = express();

  var config = {
    port: 3000,
  }

  var angularAppStatic = path.join(__dirname, 'app');

  server.use(express.static(angularAppStatic));

  server.listen(config.port, function() {
    console.log('Express server listening on port ' + config.port);
  });

})();
