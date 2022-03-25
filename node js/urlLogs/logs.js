var express = require('express');
var fs = require('fs');
var app = express();
app.get('/:id',function(req,res){
  let data = req.params.id
  res.send(data)
  fs.appendFile('logs.txt', data+"\n", function (err) {         //\n is used to get on the next line
  if (err) throw err;
  console.log('Saved!');
});
})
app.listen(8000)
