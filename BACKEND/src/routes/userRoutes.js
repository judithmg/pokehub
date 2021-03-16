const { Router } = require('express');
const userController = require('../controllers/userController');

function UserRouter() {
  const router = Router();

  router.route('/').get(userController.getAllUsers);
  router.route('/login').post(userController.getOneUser);
  router.route('/signup').post(userController.createUser);
  return router;
}

module.exports = UserRouter();
