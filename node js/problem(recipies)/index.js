const express = require('express');
const app = express()
var server = app.listen(8000);
app.get('/',function(req,res){
  res.send('<h1 style="text-align:center">the server is listening<h1>');
})
module.exports = app;
