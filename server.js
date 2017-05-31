const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.get('/', function(req, res){
  res.send('queries: ' + JSON.stringify(req.query))
  res.send('uri: ' + JSON.stringify(req.originalUrl))
  res.send('headers:' + JSON.stringify(req.headers))
  res.send('body:' + JSON.stringify(req.body))
});

app.listen(3000, function(){
  console.log('listening at 3000') 
})