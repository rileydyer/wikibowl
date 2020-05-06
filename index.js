var express = require('express');

const port = process.env.PORT || 3000;
var app = express();
var server = app.listen(port, function(){
  console.log('listening to requests on port 4000' + func());
});


function func() {
  return 5 + 6;
}
