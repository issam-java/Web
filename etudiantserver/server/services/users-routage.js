import  express from 'express';
import usersHandler from './users-handler';
import asyncHandler from 'express-async-handler';

    const usersRouter = express.Router();

    let users = [{  firstName:'Charles',
                    lastName: 'Quint',
                    email: 'charles.quint@lesrois.fr',
                    diploma: 'License 3 Informatique',
                    options: ['web application','baby-foot']
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
    usersRouter.get('/', asyncHandler(usersHandler.getUsers));
    usersRouter.post('/', asyncHandler (usersHandler.create));
    usersRouter.delete('/:id', asyncHandler(usersHandler.userDelete));
    export default usersRouter;