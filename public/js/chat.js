// Make connection
//var socket = io.connect('http://wikibowl.herokuapp.com/');
//var socket = io.connect('http://localhost:3000');
var socket = io();
socket.on('connect', () => {
  document.getElementById('test').innerHTML = socket.id;
});
// change to process.env.port
