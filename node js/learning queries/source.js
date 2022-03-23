var app = require('./index.js');
var rec = require('./recipes.json')
app.get('/recipes',(req,res)=>{
  const page = req.query.page
  const limit = req.query.limit
  const q = req.query.q
  const reply=[]
  if(page==1){
    const data = [];
    for (var a=0;a<3;a++){
      data.push(rec[a])
    }
    for(var a=0;a<limit;a++){
      reply.push(data[a])
    }
    reply.push("skip:",(page-1)*3)
  }
  else if (page==2) {
    const data = [];
    for (var a=3;a<6;a++){
      data.push(rec[a])
    }
    for(var a=0;a<limit;a++){
      reply.push(data[a])
    }
    reply.push("skip:",(page-1)*3)
  }
  else if (page==3) {
    const data = [];
    for (var a=6;a<9;a++){
      data.push(rec[a])
    }
    for(var a=0;a<limit;a++){
      reply.push(data[a])
    }
    reply.push("skip",(page-1)*3)
}
res.send(reply)
})
