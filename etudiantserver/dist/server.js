"use strict";

var _express = _interopRequireDefault(require("express"));

var _usersRoutage = _interopRequireDefault(require("./services/users-routage"));

var _ws = require("ws");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(' is start ');
const app = (0, _express.default)();
const wsServer = new _ws.Server({
  port: 8085
});
app.use(_express.default.json());
app.use(_express.default.static('./app/etudiants'));
app.use('/users', _usersRoutage.default);
wsServer.on('connection', function (ws) {
  ws.on('message', function (message) {
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