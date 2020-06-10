var express = require('express');
var socket = require('socket.io');

const port = process.env.PORT || 3000;
var app = express();
var server = app.listen(port, function(){
  console.log('listening to requests on port 3000');
});

app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection ' + socket.id);


  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });

});
