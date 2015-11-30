var express = require("express");

// I am a node server.
// HOW TO RUN: `node server index.js`
var server = express();
server.set("port", 3000);
server.use(express.static(__dirname + "/app"));
server.listen(server.get('port'), function() {
  console.log('Express server listening on port ' + server.get('port'));
});
