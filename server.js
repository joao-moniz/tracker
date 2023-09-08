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
server.on ('data', function (raw) {
    console.log ('Event data: '+ raw);
  })

  server.on ('listening', function (listen) {
    console.log(" Event Listening"+listen);
  });
  server.on ('connection', function (socket) {
    console.log ('Connection from '+ socket.remoteAddress);
  });

  server.on ('disconnect', function (socket) {
    console.log ('Disconnected device '+ socket.remoteAddress);
  });

  server.on ('timeout', function (socket) {
    console.log ('Time-out from '+ socket.remoteAddress);
  });

  server.on ('fail', function (err) {
    console.log ("Event fail " + err);
  });

  server.on ('error', function (err) {
    console.log ("Event error "+err);
  });

  server.on ('log', function (name, value) {
    console.log ('Log: ' + name);
    console.log (value);
  });


console.log("Servidor Online");
