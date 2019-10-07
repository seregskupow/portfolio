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
    const file = `${__dirname}/files/zvit.pdf`;
    res.download(file); 
  });

    if (process.env.NODE_ENV === "production"){
      app.use(express.static(`../build`));
    }
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve("../build","index.html"));
   }) 

   const PORT = process.env.PORT || 3001
app.listen(PORT, () =>
  console.log(`Express server is running on localhost:3001`)
 
);
/////npm run dev////