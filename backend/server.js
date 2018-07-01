const express     = require('express'),
      app         = express(),
      mongoose    = require('mongoose'),
      bodyparser  = require('body-parser'),
      router      = require('./router'),
      cors        = require('cors'),
      http        = require('http'),
      morgan      = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

const server = http.createServer(app);
server.listen(process.env.PORT || 3000);
console.log(`I am doin' work on ${port}!`);
