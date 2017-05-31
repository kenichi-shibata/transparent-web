const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.all('*', function(req, res){
  res.send( 'queries: ' + JSON.stringify(req.query) + '\n' +
            'uri: ' + JSON.stringify(req.originalUrl).split("?").shift() + '\n' +
            'headers:' + JSON.stringify(req.headers) + '\n' +
            'body:' + JSON.stringify(req.body)) 
});

app.listen(3000, function(){
  console.log('listening at 3000') 
})
