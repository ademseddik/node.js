
import {createServer} from 'http'
const path = require('path');
const fs = require('fs');
const hostname ='127.0.0.1';

const port =process.env.PORT || 9090;
app.use(express.json());
const gamesData = require('./SteamGames.json');
app.get('/game', (req, res) => {
    res.status(200).json(gamesData);
  });
const server = createServer((req,res)=>{
   res.statusCode=200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('hello word');

});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});