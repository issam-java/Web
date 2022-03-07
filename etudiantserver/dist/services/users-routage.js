"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _usersHandler = _interopRequireDefault(require("./users-handler"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = _express.default.Router();

let users = [{
  firstName: 'Charles',
  lastName: 'Quint',
  email: 'charles.quint@lesrois.fr',
  diploma: 'License 3 Informatique',
  options: ['web application', 'baby-foot']
}];
/*router.get('/', function (req, res) {
    res.send(users);
})

router.post('/', function (req, res) {
    const userExist = users.find(user => user.firstName === req.body.firstName);
   
    if (userExist) {
    res.send({});
    } else {
    users.push(req.body);
    res.send({ firstName : 'ok' });
    }
   }
  )
   */

usersRouter.get('/', (0, _expressAsyncHandler.default)(_usersHandler.default.getUsers));
usersRouter.post('/', (0, _expressAsyncHandler.default)(_usersHandler.default.create));
usersRouter.delete('/:id', (0, _expressAsyncHandler.default)(_usersHandler.default.userDelete));
var _default = usersRouter;
exports.default = _default;