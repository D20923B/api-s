const express = require('express');
const receipe = require('./recipes.json')
const app = express();
const url = require('./index.js');
url.get('/receipe/:id',function(req,res){
  var input = req.params['id'];
  var name = receipe[input-1].name;
  var steps = receipe[input-1].steps;
  res.send({name,steps});
})
