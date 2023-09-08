const http = require("http");
var server = require ('tk102');

// start server
server.createServer ({
  port: process.env.PORT ? Number(process.env.PORT) : 8090,
});

// incoming data, i.e. update a map
server.on ('track', function (gps) {
    console.log('Event Track' + gps);
});

server.on ('log', function (name, value) {
console.log ('Log: ' + name);
console.log (value);
});


console.log("Servidor Online");
