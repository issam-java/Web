import  express from 'express';
import userRouter from './services/users-routage';
import {Server} from 'ws';

console.log(' is start ');
const app = express();
const wsServer = new Server({port:8085});


app.use(express.json());
app.use(express.static('./app/etudiants'))
app.use('/users',userRouter);

wsServer.on('connection', function(ws) {
    ws.on('message', function(message) {
    wsServer.broadcast(message);
    });
    ws.send('You successfully connected to the websocket.');
   });

wsServer.broadcast = function broadcast(data) {
    wsServer.clients.forEach(function each(client) {
    client.send(data);
    });
   };   

app.get('/', function (req, res) {
 res.sendFile('index.html');
});


app.listen(8080);

