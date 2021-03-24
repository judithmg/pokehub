const { Router } = require('express');
const userController = require('../controllers/userController');

function UserRouter() {
  const router = Router();

  router.route('/signup').post(userController.createUser);
  router.route('/user').post(userController.getOneUserByBody);
  router.route('/user/:userId').get(userController.getOneUserByParams);

  router.route('/').get(userController.getAllUsers);
  return router;
}

module.exports = UserRouter();
