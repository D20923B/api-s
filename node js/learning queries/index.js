var express = require('express');
var app = express();
app.get('/',function(req,res){
  res.send("hi")
})
app.listen(8000)
module.exports = app
