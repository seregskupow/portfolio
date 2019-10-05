const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());


app.get('/',(req,res)=>{
    res.send("hello on se");
    
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  const second = req.query.second || "second";
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!, ${second}` }));
});
app.get('/download', function(req, res){
    const file = `${__dirname}/files/text.txt`;
    res.download(file); 
  });

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
 
);
/////npm run dev////