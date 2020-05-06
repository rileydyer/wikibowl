var express = require('express');

var app = express();
var server = app.listen(4000, function(){
  console.log('listening to requests on port 4000' + func());
});


function func() {
  return 5 + 6;
}
