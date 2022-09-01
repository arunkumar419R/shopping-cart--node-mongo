
module.exports = (app)=>{
    const bodyParser = require("body-parser");
    const cors = require('cors');
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    const usersController = require('../controllers/users.controller');

    //to get all users
    app.get('/users', usersController.findAll);

    //create one user
    app.post('/users/addUser', usersController.addUser);

    //delete user
    app.delete('/users/deleteUser/:userId', usersController.deleteUser);

    // //find user
    // app.get('users/findUserById/:userId', usersController.findUser);

    //update user
    app.put('/users/updateUser/:userId', usersController.updateUser);

    //login 
    app.post('/users/login',usersController.login);

}